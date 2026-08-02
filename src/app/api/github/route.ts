import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password, newContent, dataType } = await req.json();
    
    // Auth Check
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      return NextResponse.json({ error: "GITHUB_TOKEN not set on server" }, { status: 500 });
    }

    let filePath = "src/data/projects.json";
    if (dataType === "config") filePath = "src/data/config.json";
    if (dataType === "team") filePath = "src/data/team.json";
    if (dataType === "services") filePath = "src/data/services.json";
    if (dataType === "testimonials") filePath = "src/data/testimonials.json";

    const repoOwner = "codewitharyan-01";
    const repoName = "Forb-Tech-solutions";

    // 1. Get current file SHA
    const getRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
      headers: {
        "Authorization": `Bearer ${githubToken}`,
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      cache: "no-store"
    });

    let sha: string | undefined = undefined;

    if (getRes.ok) {
      const getResData = await getRes.json();
      sha = getResData.sha;
    } else if (getRes.status !== 404) {
      // If it's not a 404 (file doesn't exist yet), then it's a real error
      return NextResponse.json({ error: "Failed to fetch file from GitHub" }, { status: 500 });
    }

    // 2. Commit new file
    const contentEncoded = Buffer.from(JSON.stringify(newContent, null, 2)).toString("base64");

    const putRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${githubToken}`,
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: JSON.stringify({
        message: "Admin Dashboard: Update projects.json",
        content: contentEncoded,
        sha: sha
      })
    });

    if (!putRes.ok) {
      const errorData = await putRes.json();
      console.error("GitHub API Error:", errorData);
      return NextResponse.json({ error: "Failed to commit to GitHub" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
