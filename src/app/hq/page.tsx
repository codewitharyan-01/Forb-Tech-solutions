"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, GitCommit, LogOut, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import projectsData from "@/data/projects.json";
import configData from "@/data/config.json";
import teamData from "@/data/team.json";
import servicesData from "@/data/services.json";
import testimonialsData from "@/data/testimonials.json";

export default function AdminHQ() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [openSection, setOpenSection] = useState<string>("config");

  const [projects, setProjects] = useState(projectsData);
  const [config, setConfig] = useState(configData);
  const [team, setTeam] = useState(teamData);
  const [services, setServices] = useState(servicesData as any[]);
  const [testimonials, setTestimonials] = useState(testimonialsData as any[]);
  
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
          {/* 1. GLOBAL CONFIGURATION        */}
          {/* ============================== */}
          <div>
            <AccordionHeader title="Global Configuration" id="config" />
            <AnimatePresence>
              {openSection === "config" && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-6 md:p-10 bg-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
                      <div className="space-y-6">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">Contact Phone</label>
                          <input value={config.contactPhone} onChange={(e) => setConfig({...config, contactPhone: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-3 text-sm focus:outline-none focus:border-primary shadow-inner" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">WhatsApp Number (No +)</label>
                          <input value={config.contactWhatsApp} onChange={(e) => setConfig({...config, contactWhatsApp: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-3 text-sm focus:outline-none focus:border-primary shadow-inner" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 mb-2">Contact Email</label>
                          <input value={config.contactEmail} onChange={(e) => setConfig({...config, contactEmail: e.target.value})} className="w-full bg-white border border-black/10 rounded-lg p-3 text-sm focus:outline-none focus:border-primary shadow-inner" />
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
          {/* 4. TESTIMONIALS                */}
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
          {/* 5. TEAM ROSTER                 */}
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
