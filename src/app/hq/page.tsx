"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, GitCommit, LogOut, ChevronDown, Globe } from "lucide-react";
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
  
  const [deployStatus, setDeployStatus] = useState("SYNC ALL CHANGES");

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
        setError("ACCESS DENIED");
      }
    } catch (err) {
      setError("SYSTEM ERROR");
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
    setDeployStatus("SYNCING DATABASES...");

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
      
      setDeployStatus("SUCCESS: VERCEL DEPLOYING");
      setTimeout(() => setDeployStatus("SYNC ALL CHANGES"), 4000);
      
    } catch (err) {
      setDeployStatus("SYNC FAILED");
      setTimeout(() => setDeployStatus("SYNC ALL CHANGES"), 4000);
    }
    setLoading(false);
  };

  const handleGenerateBlog = async (auto = false) => {
    setIsGenerating(true);
    setDeployStatus("GENERATING AI ARTICLE...");
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
        setDeployStatus("ARTICLE GENERATED!");
      } else {
        setDeployStatus("GENERATION FAILED (Check API Key)");
      }
    } catch (e) {
      setDeployStatus("ERROR");
    }
    setTimeout(() => setDeployStatus("SYNC ALL CHANGES"), 4000);
    setIsGenerating(false);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const AccordionHeader = ({ title, id, count }: { title: string, id: string, count?: number }) => (
    <button 
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between p-6 bg-white/40 hover:bg-white/60 transition-colors border-b border-black/5"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-black">{title}</h2>
        {count !== undefined && (
          <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
            {count}
          </span>
        )}
      </div>
      <motion.div animate={{ rotate: openSection === id ? 180 : 0 }} transition={{ duration: 0.3 }}>
        <ChevronDown className="w-5 h-5 text-black/50" />
      </motion.div>
    </button>
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Site Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="w-full max-w-sm relative z-10">
          <div className="glass-white rounded-3xl p-8 shadow-2xl border border-white">
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-xl font-black tracking-[0.2em] uppercase mb-2">FORBTECH</h1>
              <p className="text-[10px] text-black/50 tracking-[0.2em] uppercase font-bold">Secure Gateway</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/5 border border-black/10 rounded-xl text-black p-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-center tracking-[0.3em] text-sm"
                placeholder="PASSWORD"
              />
              {error && <p className="text-red-500 font-bold text-[10px] uppercase tracking-widest text-center">{error}</p>}
              <button type="submit" disabled={loading} className="w-full bg-primary text-white hover:bg-primary/90 p-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-colors disabled:opacity-50 shadow-lg shadow-primary/30">
                Authenticate
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-sans flex flex-col items-center relative overflow-hidden">
      
      {/* Site Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-5xl flex-1 flex flex-col relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl p-6 shadow-sm">
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase leading-none">FORBTECH CMS</h1>
            <p className="text-[10px] text-black/50 tracking-[0.2em] uppercase mt-2 font-bold">Master Control Panel</p>
          </div>
          <button 
            onClick={handlePushToGitHub}
            disabled={loading}
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all disabled:opacity-50 shadow-lg shadow-primary/30"
          >
            <GitCommit className="w-4 h-4" />
            <span className="hidden md:inline">{deployStatus}</span>
            <span className="md:hidden">SYNC</span>
          </button>
        </div>

        {/* Accordion Container */}
        <div className="glass-white rounded-3xl border border-white/50 overflow-hidden shadow-xl mb-12 flex flex-col">

          {/* ============================== */}
          {/* 0. COMMAND CENTER              */}
          {/* ============================== */}
          <div className="p-6 md:p-8 bg-black/5 border-b border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <h2 className="text-sm font-black tracking-[0.2em] uppercase text-black mb-1">Command Center</h2>
              <p className="text-[10px] text-black/50 tracking-[0.1em] uppercase font-bold">Vercel Web Analytics (Simulated)</p>
            </div>
            <div className="flex gap-4 md:gap-8 w-full md:w-auto">
              <div className="flex-1 md:flex-none bg-white p-4 rounded-xl border border-black/5 shadow-sm min-w-[120px]">
                <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest mb-1">Visitors (24h)</p>
                <p className="text-2xl font-black text-black">1,402</p>
                <p className="text-[10px] text-green-500 font-bold mt-1">↑ 12% vs yesterday</p>
              </div>
              <div className="flex-1 md:flex-none bg-white p-4 rounded-xl border border-black/5 shadow-sm min-w-[120px]">
                <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest mb-1">Conversion</p>
                <p className="text-2xl font-black text-black">3.8%</p>
                <p className="text-[10px] text-green-500 font-bold mt-1">↑ 0.4% vs yesterday</p>
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
                  <div className="p-6 md:p-10 bg-white/20">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">SEO Title</label>
                            <input value={config.seoTitle} onChange={(e) => setConfig({...config, seoTitle: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-3 text-sm focus:outline-none focus:border-primary shadow-inner" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">SEO Description</label>
                            <textarea value={config.seoDescription} onChange={(e) => setConfig({...config, seoDescription: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-3 text-sm focus:outline-none focus:border-primary shadow-inner resize-none h-24" />
                          </div>
                        </div>

                        {/* Live SEO Preview */}
                        <div className="bg-[#1f1f1f] p-5 rounded-xl border border-black/20 shadow-xl flex flex-col justify-center transform transition-all hover:scale-[1.01]">
                          <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Search Preview
                          </h3>
                          <div className="font-sans text-left w-full overflow-hidden">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center p-1.5 border border-white/10">
                                <Globe className="w-full h-full text-white/50" />
                              </div>
                              <div>
                                <p className="text-[13px] text-white/90 font-medium leading-none">ForbTech</p>
                                <p className="text-[11px] text-white/50 leading-none mt-1">https://forbtech.com</p>
                              </div>
                            </div>
                            <h4 className="text-[18px] text-[#8ab4f8] hover:underline cursor-pointer font-medium leading-tight mb-1 line-clamp-1">{config.seoTitle || "Enter SEO Title..."}</h4>
                            <p className="text-[13px] text-[#bdc1c6] leading-snug line-clamp-2">{config.seoDescription || "Enter SEO description to see how it looks on Google..."}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6 pt-6 border-t border-black/5">
                        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-black/10 shadow-sm">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-1">Primary Brand Color</label>
                            <p className="text-[10px] text-black/40">Sync to instantly theme the website.</p>
                          </div>
                          <input 
                            type="color" 
                            value={config.primaryColor} 
                            onChange={(e) => setConfig({...config, primaryColor: e.target.value})} 
                            className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0" 
                          />
                        </div>
                        
                        <div className="bg-white p-4 rounded-xl border border-black/10 shadow-sm space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-1">Announcement Banner</label>
                              <p className="text-[10px] text-black/40">Displays at the very top of the site.</p>
                            </div>
                            <button 
                              onClick={() => setConfig({...config, announcementActive: !config.announcementActive})}
                              className={`w-12 h-6 rounded-full transition-colors relative ${config.announcementActive ? 'bg-primary' : 'bg-black/20'}`}
                            >
                              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${config.announcementActive ? 'left-7' : 'left-1'}`} />
                            </button>
                          </div>
                          {config.announcementActive && (
                            <input 
                              value={config.announcementText} 
                              onChange={(e) => setConfig({...config, announcementText: e.target.value})} 
                              placeholder="Announcement Text" 
                              className="w-full bg-black/5 border border-black/5 rounded-lg p-3 text-sm focus:outline-none focus:border-primary" 
                            />
                          )}
                        </div>
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
                  <div className="p-6 bg-white/20 space-y-3">
                    {projects.map((proj, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-3 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <input value={proj.name} onChange={(e) => { const n=[...projects]; n[idx].name=e.target.value; setProjects(n); }} placeholder="Project Name" className="flex-1 w-full bg-transparent text-sm font-bold focus:outline-none" />
                        <input value={proj.category} onChange={(e) => { const n=[...projects]; n[idx].category=e.target.value; setProjects(n); }} placeholder="Category" className="w-full md:w-1/4 bg-transparent text-xs text-black/50 focus:text-black uppercase tracking-wider focus:outline-none" />
                        <input value={proj.url} onChange={(e) => { const n=[...projects]; n[idx].url=e.target.value; setProjects(n); }} placeholder="https://" className="w-full md:w-1/3 bg-transparent text-xs text-black/50 focus:text-black focus:outline-none" />
                        <button onClick={() => setProjects(projects.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 self-end md:self-auto p-2 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setProjects([...projects, { id: `new-${Date.now()}`, name: "", category: "", url: "" }])} className="w-full py-4 border-2 border-dashed border-black/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 text-[10px] uppercase font-bold text-black/40 hover:text-primary transition-all flex items-center justify-center gap-2">
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
            <AccordionHeader title="Services" id="services" count={services.length} />
            <AnimatePresence>
              {openSection === "services" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 bg-white/20 space-y-3">
                    {services.map((srv, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-3 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <input value={srv.title} onChange={(e) => { const n=[...services]; n[idx].title=e.target.value; setServices(n); }} placeholder="Service Title" className="w-full md:w-1/3 bg-transparent text-sm font-bold focus:outline-none" />
                        <input value={srv.description} onChange={(e) => { const n=[...services]; n[idx].description=e.target.value; setServices(n); }} placeholder="Short Description" className="flex-1 w-full bg-transparent text-xs text-black/60 focus:text-black focus:outline-none" />
                        <button onClick={() => setServices(services.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 self-end md:self-auto p-2 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setServices([...services, { id: `srv-${Date.now()}`, title: "", description: "" }])} className="w-full py-4 border-2 border-dashed border-black/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 text-[10px] uppercase font-bold text-black/40 hover:text-primary transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Service
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================== */}
          {/* 4. SOCIAL MEDIA LINKS          */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Social Links" id="socials" count={socials.length} />
            <AnimatePresence>
              {openSection === "socials" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 bg-white/20 space-y-8">
                    
                    {/* Direct Contact Config embedded in Socials */}
                    <div className="bg-white/50 p-6 rounded-2xl border border-black/5 shadow-sm">
                      <h3 className="text-xs font-black tracking-[0.2em] uppercase text-black/40 mb-4 border-b border-black/5 pb-2">Direct Connect Methods</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">Contact Phone</label>
                          <input value={config.contactPhone} onChange={(e) => setConfig({...config, contactPhone: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-2 text-xs focus:outline-none focus:border-primary" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">WhatsApp Number</label>
                          <input value={config.contactWhatsApp} onChange={(e) => setConfig({...config, contactWhatsApp: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-2 text-xs focus:outline-none focus:border-primary" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">Contact Email</label>
                          <input value={config.contactEmail} onChange={(e) => setConfig({...config, contactEmail: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-2 text-xs focus:outline-none focus:border-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xs font-black tracking-[0.2em] uppercase text-black/40 mb-2 border-b border-black/5 pb-2">Platform Links</h3>
                    {socials.map((soc, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-3 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <select 
                          value={soc.platform} 
                          onChange={(e) => { const n=[...socials]; n[idx].platform=e.target.value; setSocials(n); }} 
                          className="w-full md:w-1/4 bg-transparent text-sm font-bold focus:outline-none cursor-pointer"
                        >
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Twitter">Twitter / X</option>
                          <option value="YouTube">YouTube</option>
                          <option value="Website">Website</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="GitHub">GitHub</option>
                        </select>
                        <input value={soc.url} onChange={(e) => { const n=[...socials]; n[idx].url=e.target.value; setSocials(n); }} placeholder="https://" className="flex-1 w-full bg-transparent text-xs text-black/60 focus:text-black focus:outline-none" />
                        <button onClick={() => setSocials(socials.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 self-end md:self-auto p-2 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setSocials([...socials, { id: `soc-${Date.now()}`, platform: "LinkedIn", url: "" }])} className="w-full py-4 border-2 border-dashed border-black/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 text-[10px] uppercase font-bold text-black/40 hover:text-primary transition-all flex items-center justify-center gap-2">
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
            <AccordionHeader title="Testimonials" id="testimonials" count={testimonials.length} />
            <AnimatePresence>
              {openSection === "testimonials" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 bg-white/20 space-y-3">
                    {testimonials.map((test, idx) => (
                      <div key={idx} className="flex flex-col gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-3">
                          <input value={test.name} onChange={(e) => { const n=[...testimonials]; n[idx].name=e.target.value; setTestimonials(n); }} placeholder="Client Name" className="flex-1 bg-transparent text-sm font-bold focus:outline-none border-b border-black/5 pb-1" />
                          <input value={test.company} onChange={(e) => { const n=[...testimonials]; n[idx].company=e.target.value; setTestimonials(n); }} placeholder="Company" className="flex-1 bg-transparent text-sm text-black/60 focus:text-black focus:outline-none border-b border-black/5 pb-1" />
                        </div>
                        <textarea value={test.quote} onChange={(e) => { const n=[...testimonials]; n[idx].quote=e.target.value; setTestimonials(n); }} placeholder="Client Quote" className="w-full bg-transparent text-sm text-black/80 focus:outline-none resize-none h-16" />
                        <button onClick={() => setTestimonials(testimonials.filter((_, i) => i !== idx))} className="text-black/30 hover:text-red-500 self-end p-2 transition-colors -mt-2">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setTestimonials([...testimonials, { id: `tst-${Date.now()}`, name: "", company: "", quote: "" }])} className="w-full py-4 border-2 border-dashed border-black/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 text-[10px] uppercase font-bold text-black/40 hover:text-primary transition-all flex items-center justify-center gap-2">
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
                  <div className="p-6 bg-white/20 space-y-3">
                    {team.map((member, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-3 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <input value={member.name} onChange={(e) => { const n=[...team]; n[idx].name=e.target.value; setTeam(n); }} placeholder="Member Name" className="w-full md:w-1/3 bg-transparent text-sm font-bold focus:outline-none" />
                        <input value={member.role} onChange={(e) => { const n=[...team]; n[idx].role=e.target.value; setTeam(n); }} placeholder="Role" className="flex-1 w-full bg-transparent text-xs text-black/60 focus:text-black uppercase tracking-wider focus:outline-none" />
                        <input value={member.image} onChange={(e) => { const n=[...team]; n[idx].image=e.target.value; setTeam(n); }} placeholder="Image URL" className="w-full md:w-1/4 bg-transparent text-xs text-black/50 focus:text-black focus:outline-none" />
                        <button onClick={() => setTeam(team.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 self-end md:self-auto p-2 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => setTeam([...team, { id: `team-${Date.now()}`, name: "", role: "", image: "" }])} className="w-full py-4 border-2 border-dashed border-black/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 text-[10px] uppercase font-bold text-black/40 hover:text-primary transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Member
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
            <AccordionHeader title="Job Postings (Careers)" id="careers" count={careers.length} />
            <AnimatePresence>
              {openSection === "careers" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 bg-white/20 space-y-3">
                    {careers.map((job, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <input value={job.title} onChange={(e) => { const n=[...careers]; n[idx].title=e.target.value; setCareers(n); }} placeholder="Job Title" className="w-full md:w-1/3 bg-transparent text-sm font-bold focus:outline-none" />
                        <input value={job.type} onChange={(e) => { const n=[...careers]; n[idx].type=e.target.value; setCareers(n); }} placeholder="Full-time / Remote" className="w-full md:w-1/4 bg-transparent text-xs text-black/60 uppercase tracking-wider focus:outline-none" />
                        <input value={job.salary} onChange={(e) => { const n=[...careers]; n[idx].salary=e.target.value; setCareers(n); }} placeholder="Salary Range" className="flex-1 w-full bg-transparent text-xs text-black/60 focus:outline-none" />
                        
                        <div className="flex items-center gap-4 self-end md:self-auto pt-2 md:pt-0">
                          <button 
                            onClick={() => { const n=[...careers]; n[idx].active = !n[idx].active; setCareers(n); }}
                            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${job.active ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-black/5 text-black/40 border-black/10'}`}
                          >
                            {job.active ? 'Active' : 'Closed'}
                          </button>
                          <button onClick={() => setCareers(careers.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 p-2 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setCareers([...careers, { id: `job-${Date.now()}`, title: "", type: "", salary: "", active: true }])} className="w-full py-4 border-2 border-dashed border-black/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 text-[10px] uppercase font-bold text-black/40 hover:text-primary transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Job Posting
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
            <AccordionHeader title="Leads CRM" id="leads" count={leads.length} />
            <AnimatePresence>
              {openSection === "leads" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 bg-white/20 space-y-3">
                    {leads.length === 0 ? (
                      <div className="p-8 text-center text-black/40 text-xs font-bold uppercase tracking-widest border-2 border-dashed border-black/10 rounded-xl">
                        No active leads. Your next client is on the way!
                      </div>
                    ) : leads.map((lead, idx) => (
                      <div key={idx} className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-black text-black">{lead.name}</h4>
                            <p className="text-xs text-black/60 font-medium">{lead.email} &bull; {lead.phone}</p>
                          </div>
                          <button onClick={() => setLeads(leads.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="mt-2 text-sm text-black/80 bg-black/5 p-3 rounded-lg">
                          &quot;{lead.message}&quot;
                        </div>
                        <div className="mt-2 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-black/40">
                          <span>Received: {lead.date}</span>
                          <button 
                            onClick={() => { const n=[...leads]; n[idx].contacted = !n[idx].contacted; setLeads(n); }}
                            className={`px-3 py-1 rounded-full transition-colors ${lead.contacted ? 'bg-primary text-white' : 'bg-black/10 text-black/50 hover:bg-black/20'}`}
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
            <AccordionHeader title="B2B Traffic Intel" id="traffic" count={traffic.length} />
            <AnimatePresence>
              {openSection === "traffic" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 bg-white/20 space-y-3 max-h-[500px] overflow-y-auto">
                    {traffic.length === 0 ? (
                      <div className="p-8 text-center text-black/40 text-xs font-bold uppercase tracking-widest border-2 border-dashed border-black/10 rounded-xl">
                        No traffic logged yet.
                      </div>
                    ) : traffic.map((visit, idx) => (
                      <div key={idx} className="flex flex-col gap-2 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-black text-primary">{visit.org}</h4>
                          <span className="text-[10px] text-black/40 font-bold uppercase">{visit.timestamp}</span>
                        </div>
                        <div className="text-xs text-black/60 font-medium">
                          <p>Location: {visit.location}</p>
                          <p>IP Address: {visit.ip}</p>
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
            <AccordionHeader title="Programmatic SEO Engine" id="seo" count={seoPages.length} />
            <AnimatePresence>
              {openSection === "seo" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 bg-white/20 space-y-3">
                    {seoPages.map((page, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-1 w-full space-y-2">
                          <div className="flex gap-2">
                            <input value={page.service} onChange={(e) => { const n=[...seoPages]; n[idx].service=e.target.value; setSeoPages(n); }} placeholder="Service (e.g. Custom Software)" className="w-1/2 bg-black/5 border border-black/10 rounded-lg p-2 text-sm font-bold focus:outline-none" />
                            <input value={page.location} onChange={(e) => { const n=[...seoPages]; n[idx].location=e.target.value; setSeoPages(n); }} placeholder="Location (e.g. New York)" className="w-1/2 bg-black/5 border border-black/10 rounded-lg p-2 text-sm focus:outline-none" />
                          </div>
                          <div className="text-[10px] text-black/40 font-mono bg-black/5 p-2 rounded-lg">
                            Live Route: <span className="text-primary font-bold">/solutions/{(page.service || '').toLowerCase().replaceAll(' ', '-')}-in-{(page.location || '').toLowerCase().replaceAll(' ', '-')}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 self-end md:self-auto">
                          <button 
                            onClick={() => { const n=[...seoPages]; n[idx].active = !n[idx].active; setSeoPages(n); }}
                            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${page.active ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-black/5 text-black/40 border-black/10'}`}
                          >
                            {page.active ? 'Live' : 'Draft'}
                          </button>
                          <button onClick={() => setSeoPages(seoPages.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 p-2 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setSeoPages([...seoPages, { id: `seo-${Date.now()}`, service: "", location: "", active: true }])} className="w-full py-4 border-2 border-dashed border-black/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 text-[10px] uppercase font-bold text-black/40 hover:text-primary transition-all flex items-center justify-center gap-2">
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
                  <div className="p-6 bg-white/20 space-y-6">
                    
                    {/* AI Generator Controls */}
                    <div className="bg-black/5 border border-black/10 rounded-xl p-5 space-y-4">
                      <h3 className="text-xs font-black tracking-widest uppercase text-black/60">Generate New Article</h3>
                      <div className="flex flex-col md:flex-row gap-3">
                        <input 
                          value={generationTopic} 
                          onChange={(e) => setGenerationTopic(e.target.value)} 
                          placeholder="Topic (e.g. Scaling Next.js Apps)" 
                          className="flex-1 bg-white border border-black/10 rounded-lg p-3 text-sm focus:outline-none focus:border-primary" 
                        />
                        <button 
                          onClick={() => handleGenerateBlog(false)} 
                          disabled={isGenerating || !generationTopic}
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest disabled:opacity-50 transition-colors"
                        >
                          Write Custom
                        </button>
                        <button 
                          onClick={() => handleGenerateBlog(true)} 
                          disabled={isGenerating}
                          className="bg-foreground hover:bg-foreground/90 text-background px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest disabled:opacity-50 transition-colors"
                        >
                          Auto-Generate Trending
                        </button>
                      </div>
                    </div>

                    {/* Blog List */}
                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                      {blogs.map((blog, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-sm font-black tracking-tight">{blog.title}</h4>
                            <div className="flex items-center gap-3 ml-4">
                              <span className="text-[10px] uppercase font-bold text-black/40">{new Date(blog.date).toLocaleDateString()}</span>
                              <button onClick={() => setBlogs(blogs.filter((_, i) => i !== idx))} className="text-black/20 hover:text-red-500 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-xs text-black/60 mb-2">{blog.excerpt}</p>
                          <div className="flex items-center justify-between mt-4">
                            <span className="text-[10px] bg-black/5 px-2 py-1 rounded text-black/50 font-mono">/news/{blog.slug}</span>
                            <button 
                              onClick={() => { const n=[...blogs]; n[idx].active = !n[idx].active; setBlogs(n); }}
                              className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${blog.active ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-black/5 text-black/40 border-black/10'}`}
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
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <LogOut className="w-3 h-3" /> Terminate Session
          </button>
        </div>

      </div>
    </div>
  );
}
