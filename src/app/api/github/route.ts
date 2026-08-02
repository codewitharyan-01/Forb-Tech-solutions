import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password, newContent } = await req.json();
    
    // Auth Check
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      return NextResponse.json({ error: "GITHUB_TOKEN not set on server" }, { status: 500 });
    }

    const repoOwner = "codewitharyan-01";
    const repoName = "Forb-Tech-solutions";
    const filePath = "src/data/projects.json";

    // 1. Get current file SHA
    const getRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
      headers: {
        "Authorization": `Bearer ${githubToken}`,
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      cache: "no-store"
    });

    if (!getRes.ok) {
      return NextResponse.json({ error: "Failed to fetch file from GitHub" }, { status: 500 });
    }

    const getResData = await getRes.json();
    const sha = getResData.sha;

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
