import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const { password, topic } = await req.json();
    
    // Auth Check
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "AI_API_KEY is not configured in environment variables." }, { status: 500 });
    }

    const prompt = `You are an elite, highly technical enterprise software architect and technology journalist writing for a premium B2B software engineering firm called "ForbTech". 
    Write a highly engaging, SEO-optimized, technical article about: "${topic}".
    Format the exact response as follows (do not include any other text or markdown blocks):
    TITLE: [A highly catchy, click-worthy, professional title]
    SLUG: [url-friendly-slug]
    CATEGORY: [Tech, Architecture, AI, or Engineering]
    EXCERPT: [A powerful 2-sentence summary designed to drive clicks]
    CONTENT:
    [The full article formatted in beautiful Markdown...]`;

    const geminiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";
    
    const aiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    });

    if (!aiResponse.ok) {
      const errorData = await aiResponse.text();
      console.error("AI API Error:", errorData);
      return NextResponse.json({ error: "AI API Generation Failed" }, { status: 500 });
    }

    const aiData = await aiResponse.json();
    
    const rawContent = aiData.candidates[0].content.parts[0].text;
    
    // Parse the custom format
    const titleMatch = rawContent.match(/TITLE:\s*(.*)/i);
    const slugMatch = rawContent.match(/SLUG:\s*(.*)/i);
    const categoryMatch = rawContent.match(/CATEGORY:\s*(.*)/i);
    const excerptMatch = rawContent.match(/EXCERPT:\s*(.*)/i);
    const contentMatch = rawContent.match(/CONTENT:\s*([\s\S]*)/i);

    const newBlog = {
      id: `blog-${Date.now()}`,
      title: titleMatch ? titleMatch[1].trim() : "Generated Article",
      slug: slugMatch ? slugMatch[1].trim() : `article-${Date.now()}`,
      category: categoryMatch ? categoryMatch[1].trim() : "Technology",
      excerpt: excerptMatch ? excerptMatch[1].trim() : "An AI generated technology article.",
      content: contentMatch ? contentMatch[1].trim() : rawContent,
      date: new Date().toISOString(),
      active: true
    };

    // Read and update blogs.json locally (HQ will sync to GitHub separately)
    const filePath = path.join(process.cwd(), "src/data/blogs.json");
    let blogs = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      blogs = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist or is empty
    }

    blogs.unshift(newBlog);
    await fs.writeFile(filePath, JSON.stringify(blogs, null, 2));

    return NextResponse.json({ success: true, blog: newBlog });
  } catch (error) {
    console.error("News Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate news" }, { status: 500 });
  }
}
