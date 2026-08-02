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
      <div className="min-h-screen bg-black text-[#00ff00] font-mono flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-black border border-[#00ff00]/30 p-8 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-8 h-8 text-[#00ff00]" />
            <h1 className="text-2xl font-bold tracking-widest">FORBTECH HQ</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm mb-2 opacity-70">ENTER SECURITY KEY</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-[#00ff00]/50 text-[#00ff00] p-3 rounded focus:outline-none focus:border-[#00ff00] focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#00ff00]/10 hover:bg-[#00ff00]/20 border border-[#00ff00] text-[#00ff00] p-3 rounded font-bold tracking-widest transition-colors disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "ACCESS"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-mono">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/20 pb-6 gap-6">
          <div>
            <h1 className="text-3xl font-black text-[#00ff00] tracking-widest flex items-center gap-3">
              <Terminal className="w-8 h-8" />
              SYSTEM OVERRIDE
            </h1>
            <p className="text-white/50 mt-2 text-sm">Direct GitHub Repository Access</p>
          </div>
          
          <button 
            onClick={handlePushToGitHub}
            disabled={loading}
            className="bg-[#00ff00] hover:bg-[#00cc00] text-black px-6 py-3 rounded font-bold tracking-widest flex items-center gap-2 transition-all disabled:opacity-50 w-full md:w-auto justify-center"
          >
            <GitCommit className="w-5 h-5" />
            {loading ? "COMMITTING..." : "DEPLOY TO LIVE"}
          </button>
        </header>

        {success && (
          <div className="bg-[#00ff00]/20 border border-[#00ff00] text-[#00ff00] p-4 rounded mb-8">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded mb-8">
            {error}
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Featured Projects Data</h2>
          <button onClick={addProject} className="flex items-center gap-1 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-colors">
            <Plus className="w-4 h-4" /> ADD ROW
          </button>
        </div>

        <div className="space-y-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col md:flex-row gap-4 relative group">
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/50 mb-1 uppercase">Project Name</label>
                    <input 
                      value={proj.name}
                      onChange={(e) => updateProject(idx, "name", e.target.value)}
                      className="w-full bg-black/50 border border-white/20 rounded p-2 text-sm focus:border-[#00ff00] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1 uppercase">Category</label>
                    <input 
                      value={proj.category}
                      onChange={(e) => updateProject(idx, "category", e.target.value)}
                      className="w-full bg-black/50 border border-white/20 rounded p-2 text-sm focus:border-[#00ff00] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1 uppercase">Live URL</label>
                  <input 
                    value={proj.url}
                    onChange={(e) => updateProject(idx, "url", e.target.value)}
                    className="w-full bg-black/50 border border-white/20 rounded p-2 text-sm focus:border-[#00ff00] outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button 
                  onClick={() => removeProject(idx)}
                  className="text-red-500 hover:bg-red-500/20 p-3 rounded transition-colors"
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
