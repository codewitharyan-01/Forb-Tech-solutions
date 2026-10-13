"use client";

const techStacks = [
  { category: "Frontend", skills: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { category: "Backend", skills: ["Node.js", "Python", "Go", "GraphQL"] },
  { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { category: "AI & Data", skills: ["OpenAI", "LangChain", "Vector DBs", "TensorFlow"] }
]

export function Technologies() {
  return (
    <section className="py-24 bg-foreground text-background relative z-10 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">The Stack.</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            We operate exclusively on modern, high-performance tech stacks. Legacy code has no place here.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {techStacks.map((stack, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-16"
            >
              <h3 className="text-xl md:text-2xl font-bold md:w-48 text-center md:text-right opacity-50 pt-2">{stack.category}</h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 flex-1">
                {stack.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="px-5 py-3 rounded-xl bg-background/10 border border-background/20 font-bold text-base md:text-lg tracking-tight hover:bg-background hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
