import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import blogsDataJson from "@/data/blogs.json";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

const blogs = blogsDataJson as any[];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((b: any) => b.slug === params.slug && b.active !== false);

  if (!blog) return { title: "Not Found" };

  return {
    title: `${blog.title} | ForbTech News`,
    description: blog.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b: any) => b.slug === params.slug && b.active !== false);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col">
      <Navbar />

      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="flex-1 relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
        
        <Link href="/news" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        {/* Article Header */}
        <div className="mb-12 border-b border-foreground/10 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">
              {blog.category || "Technology"}
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              {new Date(blog.date).toLocaleDateString()}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            {blog.excerpt}
          </p>
        </div>

        {/* Markdown Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </article>

      </div>

      <Footer />
    </main>
  );
}
