"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, GitCommit, ShieldAlert } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function AdminHQ() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [projects, setProjects] = useState(projectsData);
  const [deployStatus, setDeployStatus] = useState("Deploy to GitHub");

  // Security: Redirect to home on page refresh
  useEffect(() => {
    if (typeof window !== "undefined" && window.performance) {
      const nav = window.performance.getEntriesByType("navigation")[0] as any;
      if (nav && nav.type === "reload") {
        router.push("/");
      }
    }
  }, [router]);

  // Security: Auto-close after 5 minutes
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isAuthenticated) {
      timeout = setTimeout(() => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_token");
        router.push("/");
      }, 300000); // 5 minutes
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isAuthenticated, router]);

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
        setError("Denied");
      }
    } catch (err) {
      setError("Error");
    }
    setLoading(false);
  };

  const handlePushToGitHub = async () => {
    setLoading(true);
    setDeployStatus("Committing...");

    try {
      const token = sessionStorage.getItem("admin_token");
      const res = await fetch("/api/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: token, newContent: projects }),
      });
      
      const data = await res.json();

      if (data.success) {
        setDeployStatus("Success! Vercel Building...");
        setTimeout(() => setDeployStatus("Deploy to GitHub"), 4000);
      } else {
        setDeployStatus("Failed!");
        setTimeout(() => setDeployStatus("Deploy to GitHub"), 4000);
      }
    } catch (err) {
      setDeployStatus("Error!");
      setTimeout(() => setDeployStatus("Deploy to GitHub"), 4000);
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
    setProjects([...projects, { id: `new-${Date.now()}`, name: "", category: "", url: "" }]);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-4">
        <div className="w-full max-w-xs">
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 text-white p-3 focus:outline-none focus:border-white transition-all text-center tracking-[0.3em] text-sm"
              placeholder="KEY"
            />
            {error && <p className="text-white/50 text-xs text-center">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-black hover:bg-gray-200 p-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans flex flex-col">
      <div className="max-w-3xl mx-auto w-full flex-1">
        
        <div className="flex justify-end mb-8">
          <button onClick={addProject} className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-white/50 hover:text-white transition-colors">
            <Plus className="w-3 h-3" /> Add Row
          </button>
        </div>

        <div className="space-y-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-transparent border-b border-white/10 pb-4 mb-4">
              <input 
                value={proj.name}
                onChange={(e) => updateProject(idx, "name", e.target.value)}
                placeholder="Name"
                className="flex-1 bg-transparent text-sm focus:outline-none text-white placeholder-white/30"
              />
              <input 
                value={proj.category}
                onChange={(e) => updateProject(idx, "category", e.target.value)}
                placeholder="Category"
                className="w-1/4 bg-transparent text-sm focus:outline-none text-white/60 placeholder-white/30"
              />
              <input 
                value={proj.url}
                onChange={(e) => updateProject(idx, "url", e.target.value)}
                placeholder="URL"
                className="w-1/3 bg-transparent text-sm focus:outline-none text-white/60 placeholder-white/30"
              />
              <button 
                onClick={() => removeProject(idx)}
                className="text-white/20 hover:text-white p-2 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={handlePushToGitHub}
            disabled={loading}
            className="bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50"
          >
            <GitCommit className="w-4 h-4" />
            {deployStatus}
          </button>
        </div>

      </div>
    </div>
  );
}
