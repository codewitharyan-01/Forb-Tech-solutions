"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, GitCommit, LogOut, ChevronDown, Globe, Sparkles, Check, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import projectsData from "@/data/projects.json";
import configData from "@/data/config.json";
import teamData from "@/data/team.json";
import servicesData from "@/data/services.json";
import testimonialsData from "@/data/testimonials.json";
import socialsData from "@/data/socials.json";
import careersData from "@/data/careers.json";
import leadsData from "@/data/leads.json";
import trafficData from "@/data/traffic.json";
import seoData from "@/data/seo-pages.json";
import blogsData from "@/data/blogs.json";

export default function AdminHQ() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [openSection, setOpenSection] = useState<string>("config");

  const [projects, setProjects] = useState(projectsData);
  const [config, setConfig] = useState(configData);
  const [team, setTeam] = useState(teamData as any[]);
  const [services, setServices] = useState(servicesData as any[]);
  const [testimonials, setTestimonials] = useState(testimonialsData as any[]);
  const [socials, setSocials] = useState(socialsData as any[]);
  const [careers, setCareers] = useState(careersData as any[]);
  const [leads, setLeads] = useState(leadsData as any[]);
  const [traffic, setTraffic] = useState(trafficData as any[]);
  const [seoPages, setSeoPages] = useState(seoData as any[]);
  const [blogs, setBlogs] = useState(blogsData as any[]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationTopic, setGenerationTopic] = useState("");
  
  const [deployStatus, setDeployStatus] = useState("Sync All Changes");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isAuthenticated) {
      timeout = setTimeout(() => {
        handleExit();
      }, 300000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_token", password);
      } else {
        setError("Access Denied: Invalid Passcode");
      }
    } catch (err) {
      setError("System connection error");
    }
    setLoading(false);
  };

  const handleExit = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_token");
    router.push("/");
  };

  const handlePushToGitHub = async () => {
    setLoading(true);
    setDeployStatus("Syncing...");

    try {
      const token = sessionStorage.getItem("admin_token");
      
      const endpoints = [
        { data: projects, type: "projects" },
        { data: config, type: "config" },
        { data: team, type: "team" },
        { data: services, type: "services" },
        { data: testimonials, type: "testimonials" },
        { data: socials, type: "socials" },
        { data: careers, type: "careers" },
        { data: leads, type: "leads" },
        { data: traffic, type: "traffic" },
        { data: seoPages, type: "seo" },
        { data: blogs, type: "blogs" },
      ];

      for (const ep of endpoints) {
        await fetch("/api/github", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: token, newContent: ep.data, dataType: ep.type }),
        });
      }
      
      setDeployStatus("Synced to GitHub ✓");
      setTimeout(() => setDeployStatus("Sync All Changes"), 4000);
      
    } catch (err) {
      setDeployStatus("Sync Failed");
      setTimeout(() => setDeployStatus("Sync All Changes"), 4000);
    }
    setLoading(false);
  };

  const handleGenerateBlog = async (auto = false) => {
    setIsGenerating(true);
    setDeployStatus("Generating Article...");
    try {
      const topic = auto ? "The Future of Artificial Intelligence in Enterprise Software Architecture" : generationTopic;
      const token = sessionStorage.getItem("admin_token");
      const res = await fetch("/api/generate-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: token, topic })
      });
      if (res.ok) {
        const data = await res.json();
        setBlogs([data.blog, ...blogs]);
        setGenerationTopic("");
        setDeployStatus("Article Generated ✓");
      } else {
        setDeployStatus("Generation Failed (Check API Key)");
      }
    } catch (e) {
      setDeployStatus("Generation Error");
    }
    setTimeout(() => setDeployStatus("Sync All Changes"), 4000);
    setIsGenerating(false);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const AccordionHeader = ({ title, id, count }: { title: string, id: string, count?: number }) => (
    <button 
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between p-5 sm:p-6 bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-colors border-b border-[var(--line)] text-left"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold tracking-tight text-[var(--foreground)]">{title}</h2>
        {count !== undefined && (
          <span className="bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] text-[11px] px-2.5 py-0.5 rounded-full font-medium">
            {count}
          </span>
        )}
      </div>
      <motion.div animate={{ rotate: openSection === id ? 180 : 0 }} transition={{ duration: 0.25 }}>
        <ChevronDown className="w-4 h-4 text-[var(--muted-text)]" />
      </motion.div>
    </button>
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="w-[450px] h-[450px] bg-[var(--apple-blue)]/10 rounded-full blur-[140px]" />
        </div>

        <div className="w-full max-w-sm relative z-10">
          <div className="bg-[var(--surface)] rounded-3xl p-8 sm:p-10 shadow-xl border border-[var(--line)]">
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="w-10 h-10 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center mb-4 text-[var(--foreground)] shadow-sm">
                <Lock className="w-4 h-4 text-[var(--muted-text)]" />
              </div>
              <h1 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">ForbTech HQ</h1>
              <p className="text-xs text-[var(--muted-text)] mt-1">Admin authentication required</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-2xl text-[var(--foreground)] p-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--apple-blue)]/30 transition-all text-center tracking-[0.25em] text-sm placeholder:tracking-normal placeholder:text-[var(--muted-text)]"
                  placeholder="Enter passcode"
                  autoFocus
                />
              </div>
              
              {error && (
                <p className="text-red-500 font-medium text-xs tracking-tight text-center">
                  {error}
                </p>
              )}
              
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 p-3.5 rounded-2xl text-xs font-semibold tracking-wide transition-opacity disabled:opacity-50 shadow-sm"
              >
                {loading ? "Authenticating..." : "Unlock Gateway"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 md:p-8 font-sans flex flex-col items-center relative overflow-hidden">
      
      {/* Ambient Radial Accent */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-[var(--apple-blue)]/5 rounded-full blur-[160px]" />
      </div>

      <div className="w-full max-w-5xl flex-1 flex flex-col relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-[var(--surface)]/90 backdrop-blur-xl border border-[var(--line)] rounded-2xl p-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
              <span className="text-[11px] font-semibold text-[var(--muted-text)] uppercase tracking-wider">Live System</span>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--foreground)] leading-tight">ForbTech HQ</h1>
            <p className="text-xs text-[var(--muted-text)] font-normal">Content & Operations Management</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePushToGitHub}
              disabled={loading}
              className="bg-[var(--foreground)] hover:opacity-90 text-[var(--background)] px-5 md:px-7 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 transition-all disabled:opacity-50 shadow-sm"
            >
              <GitCommit className="w-3.5 h-3.5" />
              <span>{deployStatus}</span>
            </button>
            
            <button
              onClick={handleExit}
              title="Lock & Exit"
              className="p-2.5 rounded-full bg-[var(--surface-sunken)] hover:bg-[var(--surface-hover)] border border-[var(--line)] text-[var(--muted-text)] hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="bg-[var(--surface)] rounded-3xl border border-[var(--line)] overflow-hidden shadow-sm mb-12 flex flex-col">

          {/* ============================== */}
          {/* 0. COMMAND CENTER              */}
          {/* ============================== */}
          <div className="p-6 md:p-8 bg-[var(--surface-sunken)] border-b border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-[var(--foreground)] mb-1">Command Center</h2>
              <p className="text-xs text-[var(--muted-text)] font-normal">Real-time engagement telemetry</p>
            </div>
            
            <div className="flex gap-4 md:gap-6 w-full md:w-auto">
              <div className="flex-1 md:flex-none bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm min-w-[130px]">
                <p className="text-[11px] text-[var(--muted-text)] font-medium uppercase tracking-wider mb-1">Visitors (24h)</p>
                <p className="text-2xl font-semibold text-[var(--foreground)] tracking-tight">1,402</p>
                <p className="text-[11px] text-[#34c759] font-medium mt-1">↑ 12% vs yesterday</p>
              </div>
              <div className="flex-1 md:flex-none bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm min-w-[130px]">
                <p className="text-[11px] text-[var(--muted-text)] font-medium uppercase tracking-wider mb-1">Conversion</p>
                <p className="text-2xl font-semibold text-[var(--foreground)] tracking-tight">3.8%</p>
                <p className="text-[11px] text-[#34c759] font-medium mt-1">↑ 0.4% vs yesterday</p>
              </div>
            </div>
          </div>
          
          {/* ============================== */}
          {/* 1. GLOBAL CONFIGURATION        */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Global Configuration" id="config" />
            <AnimatePresence>
              {openSection === "config" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-[var(--foreground)] mb-2">SEO Title</label>
                          <input 
                            value={config.seoTitle} 
                            onChange={(e) => setConfig({...config, seoTitle: e.target.value})} 
                            className="w-full bg-[var(--surface)] border border-[var(--line)] rounded-xl p-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--apple-blue)] shadow-sm" 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--foreground)] mb-2">SEO Description</label>
                          <textarea 
                            value={config.seoDescription} 
                            onChange={(e) => setConfig({...config, seoDescription: e.target.value})} 
                            className="w-full bg-[var(--surface)] border border-[var(--line)] rounded-xl p-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--apple-blue)] shadow-sm resize-none h-24" 
                          />
                        </div>
                      </div>

                      {/* Live SEO Preview */}
                      <div className="bg-[#1f1f1f] p-5 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-center">
                        <h3 className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] animate-pulse" /> Google Search Preview
                        </h3>
                        <div className="font-sans text-left w-full overflow-hidden">
                          <div className="flex items-center gap-2.5 mb-2">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center p-1 border border-white/10">
                              <Globe className="w-full h-full text-white/60" />
                            </div>
                            <div>
                              <p className="text-[12px] text-white/90 font-medium leading-none">ForbTech</p>
                              <p className="text-[10px] text-white/50 leading-none mt-1">https://forbtech.com</p>
                            </div>
                          </div>
                          <h4 className="text-[16px] text-[#8ab4f8] hover:underline cursor-pointer font-medium leading-tight mb-1 line-clamp-1">{config.seoTitle || "ForbTech — Fast Websites & Apps in Gujarat"}</h4>
                          <p className="text-[12px] text-[#bdc1c6] leading-snug line-clamp-2">{config.seoDescription || "Affordable website development, app development, Google Business Profile setup and IT services for businesses in Gujarat, India."}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-[var(--line)] space-y-4">
                      <div className="bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-xs font-semibold text-[var(--foreground)] mb-0.5">Announcement Banner</label>
                            <p className="text-xs text-[var(--muted-text)]">Displays at the very top of the website when active.</p>
                          </div>
                          <button 
                            type="button"
                            onClick={() => setConfig({...config, announcementActive: !config.announcementActive})}
                            className={`w-12 h-6 rounded-full transition-colors relative ${config.announcementActive ? 'bg-[var(--apple-blue)]' : 'bg-[var(--surface-sunken)] border border-[var(--line)]'}`}
                          >
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${config.announcementActive ? 'left-7' : 'left-1'}`} />
                          </button>
                        </div>
                        {config.announcementActive && (
                          <input 
                            value={config.announcementText} 
                            onChange={(e) => setConfig({...config, announcementText: e.target.value})} 
                            placeholder="Announcement message text..." 
                            className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl p-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--apple-blue)]" 
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 2. PORTFOLIO PROJECTS          */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Portfolio Projects" id="projects" count={projects.length} />
            <AnimatePresence>
              {openSection === "projects" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3">
                    {projects.map((proj, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-[var(--surface)] p-3.5 rounded-2xl border border-[var(--line)] shadow-sm">
                        <input value={proj.name} onChange={(e) => { const n=[...projects]; n[idx].name=e.target.value; setProjects(n); }} placeholder="Project Name" className="flex-1 w-full bg-transparent text-sm font-semibold text-[var(--foreground)] focus:outline-none" />
                        <input value={proj.category} onChange={(e) => { const n=[...projects]; n[idx].category=e.target.value; setProjects(n); }} placeholder="Category" className="w-full md:w-1/4 bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] uppercase tracking-wider focus:outline-none" />
                        <input value={proj.url} onChange={(e) => { const n=[...projects]; n[idx].url=e.target.value; setProjects(n); }} placeholder="https://" className="w-full md:w-1/3 bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] focus:outline-none" />
                        <button onClick={() => setProjects(projects.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 self-end md:self-auto p-1.5 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setProjects([...projects, { id: `new-${Date.now()}`, name: "", category: "", url: "" }])} className="w-full py-3.5 border-2 border-dashed border-[var(--line)] rounded-2xl hover:border-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/5 text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--apple-blue)] transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Project
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 3. SERVICES OFFERS             */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Services Catalog" id="services" count={services.length} />
            <AnimatePresence>
              {openSection === "services" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3">
                    {services.map((srv, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-[var(--surface)] p-3.5 rounded-2xl border border-[var(--line)] shadow-sm">
                        <input value={srv.title} onChange={(e) => { const n=[...services]; n[idx].title=e.target.value; setServices(n); }} placeholder="Service Title" className="w-full md:w-1/3 bg-transparent text-sm font-semibold text-[var(--foreground)] focus:outline-none" />
                        <input value={srv.description} onChange={(e) => { const n=[...services]; n[idx].description=e.target.value; setServices(n); }} placeholder="Short Description" className="flex-1 w-full bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] focus:outline-none" />
                        <button onClick={() => setServices(services.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 self-end md:self-auto p-1.5 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setServices([...services, { id: `srv-${Date.now()}`, title: "", description: "" }])} className="w-full py-3.5 border-2 border-dashed border-[var(--line)] rounded-2xl hover:border-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/5 text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--apple-blue)] transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Service
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 4. SOCIAL MEDIA & CONTACT      */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Social & Direct Connect" id="socials" count={socials.length} />
            <AnimatePresence>
              {openSection === "socials" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-6">
                    
                    {/* Direct Contact Config */}
                    <div className="bg-[var(--surface)] p-5 rounded-2xl border border-[var(--line)] shadow-sm">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)] mb-4 border-b border-[var(--line)] pb-2">Direct Contact Channels</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">Direct Phone</label>
                          <input value={config.contactPhone} onChange={(e) => setConfig({...config, contactPhone: e.target.value})} className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl p-2.5 text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--apple-blue)]" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">WhatsApp Number</label>
                          <input value={config.contactWhatsApp} onChange={(e) => setConfig({...config, contactWhatsApp: e.target.value})} className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl p-2.5 text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--apple-blue)]" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">Official Email</label>
                          <input value={config.contactEmail} onChange={(e) => setConfig({...config, contactEmail: e.target.value})} className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl p-2.5 text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--apple-blue)]" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)] mb-2">Platform URLs</h3>
                      {socials.map((soc, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-[var(--surface)] p-3.5 rounded-2xl border border-[var(--line)] shadow-sm">
                          <select 
                            value={soc.platform} 
                            onChange={(e) => { const n=[...socials]; n[idx].platform=e.target.value; setSocials(n); }} 
                            className="w-full md:w-1/4 bg-transparent text-sm font-semibold text-[var(--foreground)] focus:outline-none cursor-pointer"
                          >
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Twitter">Twitter / X</option>
                            <option value="YouTube">YouTube</option>
                            <option value="Website">Website</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                            <option value="GitHub">GitHub</option>
                          </select>
                          <input value={soc.url} onChange={(e) => { const n=[...socials]; n[idx].url=e.target.value; setSocials(n); }} placeholder="https://" className="flex-1 w-full bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] focus:outline-none" />
                          <button onClick={() => setSocials(socials.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 self-end md:self-auto p-1.5 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button onClick={() => setSocials([...socials, { id: `soc-${Date.now()}`, platform: "LinkedIn", url: "" }])} className="w-full py-3.5 border-2 border-dashed border-[var(--line)] rounded-2xl hover:border-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/5 text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--apple-blue)] transition-all flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" /> Add Social Link
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 5. TESTIMONIALS                */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Client Testimonials" id="testimonials" count={testimonials.length} />
            <AnimatePresence>
              {openSection === "testimonials" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3">
                    {testimonials.map((test, idx) => (
                      <div key={idx} className="flex flex-col gap-3 bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm">
                        <div className="flex gap-3">
                          <input value={test.name} onChange={(e) => { const n=[...testimonials]; n[idx].name=e.target.value; setTestimonials(n); }} placeholder="Client Name" className="flex-1 bg-transparent text-sm font-semibold text-[var(--foreground)] focus:outline-none border-b border-[var(--line)] pb-1" />
                          <input value={test.company} onChange={(e) => { const n=[...testimonials]; n[idx].company=e.target.value; setTestimonials(n); }} placeholder="Company" className="flex-1 bg-transparent text-sm text-[var(--muted-text)] focus:text-[var(--foreground)] focus:outline-none border-b border-[var(--line)] pb-1" />
                        </div>
                        <textarea value={test.quote} onChange={(e) => { const n=[...testimonials]; n[idx].quote=e.target.value; setTestimonials(n); }} placeholder="Client Quote" className="w-full bg-transparent text-sm text-[var(--foreground)] focus:outline-none resize-none h-16" />
                        <button onClick={() => setTestimonials(testimonials.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 self-end p-1.5 transition-colors -mt-2">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setTestimonials([...testimonials, { id: `tst-${Date.now()}`, name: "", company: "", quote: "" }])} className="w-full py-3.5 border-2 border-dashed border-[var(--line)] rounded-2xl hover:border-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/5 text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--apple-blue)] transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Testimonial
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 6. TEAM ROSTER                 */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Team Roster" id="team" count={team.length} />
            <AnimatePresence>
              {openSection === "team" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3">
                    {team.map((member, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-[var(--surface)] p-3.5 rounded-2xl border border-[var(--line)] shadow-sm">
                        <input value={member.name} onChange={(e) => { const n=[...team]; n[idx].name=e.target.value; setTeam(n); }} placeholder="Member Name" className="w-full md:w-1/3 bg-transparent text-sm font-semibold text-[var(--foreground)] focus:outline-none" />
                        <input value={member.role} onChange={(e) => { const n=[...team]; n[idx].role=e.target.value; setTeam(n); }} placeholder="Role" className="flex-1 w-full bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] uppercase tracking-wider focus:outline-none" />
                        <input value={member.image} onChange={(e) => { const n=[...team]; n[idx].image=e.target.value; setTeam(n); }} placeholder="Image URL" className="w-full md:w-1/4 bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] focus:outline-none" />
                        <button onClick={() => setTeam(team.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 self-end md:self-auto p-1.5 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setTeam([...team, { id: `team-${Date.now()}`, name: "", role: "", image: "" }])} className="w-full py-3.5 border-2 border-dashed border-[var(--line)] rounded-2xl hover:border-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/5 text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--apple-blue)] transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Team Member
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 7. CAREERS MANAGER             */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Job Openings (Careers)" id="careers" count={careers.length} />
            <AnimatePresence>
              {openSection === "careers" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3">
                    {careers.map((job, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm">
                        <input value={job.title} onChange={(e) => { const n=[...careers]; n[idx].title=e.target.value; setCareers(n); }} placeholder="Job Title" className="w-full md:w-1/3 bg-transparent text-sm font-semibold text-[var(--foreground)] focus:outline-none" />
                        <input value={job.type} onChange={(e) => { const n=[...careers]; n[idx].type=e.target.value; setCareers(n); }} placeholder="Full-time / Remote" className="w-full md:w-1/4 bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] uppercase tracking-wider focus:outline-none" />
                        <input value={job.salary} onChange={(e) => { const n=[...careers]; n[idx].salary=e.target.value; setCareers(n); }} placeholder="Salary Range" className="flex-1 w-full bg-transparent text-xs text-[var(--muted-text)] focus:text-[var(--foreground)] focus:outline-none" />
                        
                        <div className="flex items-center gap-3 self-end md:self-auto pt-2 md:pt-0">
                          <button 
                            type="button"
                            onClick={() => { const n=[...careers]; n[idx].active = !n[idx].active; setCareers(n); }}
                            className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${job.active ? 'bg-green-500/10 text-[#34c759] border-green-500/20' : 'bg-[var(--surface-sunken)] text-[var(--muted-text)] border-[var(--line)]'}`}
                          >
                            {job.active ? 'Active' : 'Closed'}
                          </button>
                          <button onClick={() => setCareers(careers.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 p-1.5 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setCareers([...careers, { id: `job-${Date.now()}`, title: "", type: "", salary: "", active: true }])} className="w-full py-3.5 border-2 border-dashed border-[var(--line)] rounded-2xl hover:border-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/5 text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--apple-blue)] transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Job Opening
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 8. LEADS CRM                   */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Leads Inquiries" id="leads" count={leads.length} />
            <AnimatePresence>
              {openSection === "leads" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3">
                    {leads.length === 0 ? (
                      <div className="p-8 text-center text-[var(--muted-text)] text-xs font-medium uppercase tracking-wider border-2 border-dashed border-[var(--line)] rounded-2xl">
                        No active leads currently in queue.
                      </div>
                    ) : leads.map((lead, idx) => (
                      <div key={idx} className="flex flex-col gap-3 bg-[var(--surface)] p-5 rounded-2xl border border-[var(--line)] shadow-sm">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-semibold text-[var(--foreground)]">{lead.name}</h4>
                            <p className="text-xs text-[var(--muted-text)] mt-0.5">{lead.email} &bull; {lead.phone}</p>
                          </div>
                          <button onClick={() => setLeads(leads.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 p-1.5 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-sm text-[var(--foreground)] bg-[var(--surface-sunken)] p-3 rounded-xl border border-[var(--line)] font-normal leading-relaxed">
                          &quot;{lead.message}&quot;
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-[var(--muted-text)]">
                          <span>Received: {lead.date}</span>
                          <button 
                            type="button"
                            onClick={() => { const n=[...leads]; n[idx].contacted = !n[idx].contacted; setLeads(n); }}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${lead.contacted ? 'bg-[#34c759]/10 text-[#34c759]' : 'bg-[var(--surface-sunken)] text-[var(--muted-text)] hover:bg-[var(--surface-hover)]'}`}
                          >
                            {lead.contacted ? 'Contacted ✓' : 'Mark as Contacted'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 9. B2B TRAFFIC INTEL           */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="B2B Visitor Intelligence" id="traffic" count={traffic.length} />
            <AnimatePresence>
              {openSection === "traffic" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3 max-h-[500px] overflow-y-auto">
                    {traffic.length === 0 ? (
                      <div className="p-8 text-center text-[var(--muted-text)] text-xs font-medium uppercase tracking-wider border-2 border-dashed border-[var(--line)] rounded-2xl">
                        No traffic logged yet.
                      </div>
                    ) : traffic.map((visit, idx) => (
                      <div key={idx} className="flex flex-col gap-2 bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-semibold text-[var(--foreground)]">{visit.org}</h4>
                          <span className="text-[11px] text-[var(--muted-text)] font-mono">{visit.timestamp}</span>
                        </div>
                        <div className="text-xs text-[var(--muted-text)] flex gap-4">
                          <span>Location: {visit.location}</span>
                          <span>IP: {visit.ip}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 10. SEO ENGINE                 */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Programmatic SEO Landing Pages" id="seo" count={seoPages.length} />
            <AnimatePresence>
              {openSection === "seo" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-3">
                    {seoPages.map((page, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm">
                        <div className="flex-1 w-full space-y-2">
                          <div className="flex gap-2">
                            <input value={page.service} onChange={(e) => { const n=[...seoPages]; n[idx].service=e.target.value; setSeoPages(n); }} placeholder="Service (e.g. Website Development)" className="w-1/2 bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl p-2.5 text-xs text-[var(--foreground)] font-semibold focus:outline-none" />
                            <input value={page.location} onChange={(e) => { const n=[...seoPages]; n[idx].location=e.target.value; setSeoPages(n); }} placeholder="Location (e.g. Ahmedabad)" className="w-1/2 bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl p-2.5 text-xs text-[var(--foreground)] focus:outline-none" />
                          </div>
                          <div className="text-[10px] text-[var(--muted-text)] font-mono bg-[var(--surface-sunken)] p-2 rounded-lg">
                            Route: <span className="text-[var(--apple-blue)] font-medium">/solutions/{(page.service || '').toLowerCase().replaceAll(' ', '-')}-in-{(page.location || '').toLowerCase().replaceAll(' ', '-')}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 self-end md:self-auto">
                          <button 
                            type="button"
                            onClick={() => { const n=[...seoPages]; n[idx].active = !n[idx].active; setSeoPages(n); }}
                            className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${page.active ? 'bg-green-500/10 text-[#34c759] border-green-500/20' : 'bg-[var(--surface-sunken)] text-[var(--muted-text)] border-[var(--line)]'}`}
                          >
                            {page.active ? 'Live' : 'Draft'}
                          </button>
                          <button onClick={() => setSeoPages(seoPages.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 p-1.5 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setSeoPages([...seoPages, { id: `seo-${Date.now()}`, service: "", location: "", active: true }])} className="w-full py-3.5 border-2 border-dashed border-[var(--line)] rounded-2xl hover:border-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/5 text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--apple-blue)] transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Generate New SEO Page
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 11. AI NEWSROOM                */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Automated AI Newsroom" id="news" count={blogs.length} />
            <AnimatePresence>
              {openSection === "news" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-8 bg-[var(--surface-sunken)]/50 space-y-6">
                    
                    {/* AI Generator Controls */}
                    <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 space-y-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[var(--apple-blue)]" />
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Generate New Article</h3>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3">
                        <input 
                          value={generationTopic} 
                          onChange={(e) => setGenerationTopic(e.target.value)} 
                          placeholder="Topic (e.g. Next.js vs WordPress for Local Businesses)" 
                          className="flex-1 bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl p-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--apple-blue)]" 
                        />
                        <button 
                          onClick={() => handleGenerateBlog(false)} 
                          disabled={isGenerating || !generationTopic}
                          className="bg-[var(--apple-blue)] hover:opacity-90 text-white px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide disabled:opacity-50 transition-opacity"
                        >
                          Write Custom
                        </button>
                        <button 
                          onClick={() => handleGenerateBlog(true)} 
                          disabled={isGenerating}
                          className="bg-[var(--foreground)] hover:opacity-90 text-[var(--background)] px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide disabled:opacity-50 transition-opacity"
                        >
                          Auto-Trending
                        </button>
                      </div>
                    </div>

                    {/* Blog List */}
                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                      {blogs.map((blog, idx) => (
                        <div key={idx} className="bg-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-sm font-semibold text-[var(--foreground)]">{blog.title}</h4>
                            <div className="flex items-center gap-3 ml-4">
                              <span className="text-[10px] text-[var(--muted-text)]">{new Date(blog.date).toLocaleDateString()}</span>
                              <button onClick={() => setBlogs(blogs.filter((_, i) => i !== idx))} className="text-[var(--muted-text)] hover:text-red-500 transition-colors p-1">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-xs text-[var(--muted-text)] mb-3 leading-relaxed">{blog.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] bg-[var(--surface-sunken)] border border-[var(--line)] px-2 py-0.5 rounded font-mono text-[var(--muted-text)]">/news/{blog.slug}</span>
                            <button 
                              type="button"
                              onClick={() => { const n=[...blogs]; n[idx].active = !n[idx].active; setBlogs(n); }}
                              className={`text-[9px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${blog.active ? 'bg-green-500/10 text-[#34c759] border-green-500/20' : 'bg-[var(--surface-sunken)] text-[var(--muted-text)] border-[var(--line)]'}`}
                            >
                              {blog.active ? 'Live' : 'Hidden'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="w-full flex justify-end pb-8">
          <button 
            onClick={handleExit}
            className="text-xs font-medium text-[var(--muted-text)] hover:text-red-500 transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" /> Terminate Session
          </button>
        </div>

      </div>
    </div>
  );
}
