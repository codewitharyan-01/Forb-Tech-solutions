"use client";

import { useState } from "react";
import { Terminal, ShieldAlert, GitCommit, Plus, Trash2 } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function AdminHQ() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [projects, setProjects] = useState(projectsData);

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
        setError(data.error || "Access Denied");
      }
    } catch (err) {
      setError("Network Error");
    }
    setLoading(false);
  };

  const handlePushToGitHub = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = sessionStorage.getItem("admin_token");
      const res = await fetch("/api/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: token, newContent: projects }),
      });
      
      const data = await res.json();

      if (data.success) {
        setSuccess("Commit pushed successfully! Vercel is building the update.");
      } else {
        setError(data.error || "Failed to push to GitHub.");
      }
    } catch (err) {
      setError("Network error while pushing to GitHub.");
    }
    setLoading(false);
  };

  const updateProject = (index: number, field: string, value: string) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setProjects(newProjects);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([...projects, { id: `new-project-${Date.now()}`, name: "New Project", category: "Category", url: "https://" }]);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center gap-4 mb-10">
            <ShieldAlert className="w-10 h-10 text-white" strokeWidth={1.5} />
            <h1 className="text-xl font-bold tracking-[0.2em] uppercase">Admin Access</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 text-white p-3 focus:outline-none focus:border-white transition-all text-center tracking-[0.3em]"
                placeholder="PASSWORD"
              />
            </div>
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-black hover:bg-gray-200 p-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Enter"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8 gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-[0.1em] uppercase flex items-center gap-3">
              <Terminal className="w-6 h-6" />
              ForbTech Admin
            </h1>
            <p className="text-white/40 mt-2 text-xs uppercase tracking-widest">Database Editor</p>
          </div>
          
          <button 
            onClick={handlePushToGitHub}
            disabled={loading}
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50 w-full md:w-auto justify-center"
          >
            <GitCommit className="w-4 h-4" />
            {loading ? "Committing..." : "Deploy to GitHub"}
          </button>
        </header>

        {success && (
          <div className="bg-white/10 border border-white/20 text-white p-4 rounded-lg mb-8 text-sm">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg mb-8 text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Featured Projects</h2>
          <button onClick={addProject} className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
            <Plus className="w-3 h-3" /> Add Project
          </button>
        </div>

        <div className="space-y-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 relative group">
              <div className="flex-1 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Project Name</label>
                    <input 
                      value={proj.name}
                      onChange={(e) => updateProject(idx, "name", e.target.value)}
                      className="w-full bg-transparent border-b border-white/10 p-2 text-sm focus:border-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Category</label>
                    <input 
                      value={proj.category}
                      onChange={(e) => updateProject(idx, "category", e.target.value)}
                      className="w-full bg-transparent border-b border-white/10 p-2 text-sm focus:border-white outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Live URL</label>
                  <input 
                    value={proj.url}
                    onChange={(e) => updateProject(idx, "url", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 p-2 text-sm focus:border-white outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button 
                  onClick={() => removeProject(idx)}
                  className="text-white/30 hover:text-red-400 p-3 transition-colors"
                  title="Remove Project"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
