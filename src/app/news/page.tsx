"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import blogsDataJson from "@/data/blogs.json";
import { X } from "lucide-react";

const blogs = blogsDataJson as any[];

export default function NewsIndex() {
  const publishedBlogs = blogs.filter(b => b.active !== false).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col">
      <Navbar />

      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="flex-1 relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-4">
            Intelligence <span className="text-primary">HQ</span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base">
            Expert insights, architectural breakdowns, and the latest news on enterprise scalability and AI integration.
          </p>
        </div>

        {/* Blog Grid */}
        {publishedBlogs.length === 0 ? (
          <div className="py-20 text-center border border-foreground/10 rounded-[2rem] bg-foreground/5 backdrop-blur-md">
            <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground mb-2">No Articles Yet</h2>
            <p className="text-sm text-muted-foreground/60">Our AI engine is currently generating the latest insights.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedBlogs.map((blog) => (
              <Link 
                href={`/news/${blog.slug}`}
                onClick={(e) => { e.preventDefault(); setSelectedBlog(blog); }}
                key={blog.id}
                className="group flex flex-col justify-between p-6 bg-background border border-foreground/10 rounded-[2rem] hover:border-primary/50 transition-all duration-300 shadow-xl overflow-hidden relative cursor-pointer block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-full">
                      {blog.category || "Technology"}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      {new Date(blog.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  Read Article
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Reading Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-background/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background border border-foreground/10 w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-foreground/5 hover:bg-foreground/10 hover:text-red-500 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="overflow-y-auto p-8 md:p-12 scrollbar-hide">
                <div className="mb-10 border-b border-foreground/10 pb-8 pr-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {selectedBlog.category || "Technology"}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      {new Date(selectedBlog.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                    {selectedBlog.title}
                  </h1>
                </div>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl">
                  <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
                </article>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
