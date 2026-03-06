import { Badge } from "./ui/badge"
import { Zap } from "lucide-react"

const skillCategories = [
  {
    icon: "💻",
    title: "Python & Backend",
    borderColor: "border-danube/40 hover:border-danube",
    badgeColor: "bg-danube/15 text-danube border-danube/30 hover:bg-danube/30",
    glowColor: "bg-danube/10",
    skills: ["Python", "FastAPI", "Redis", "SQLAlchemy", "Pydantic", "REST APIs"],
  },
  {
    icon: "🎨",
    title: "Frontend",
    borderColor: "border-gull/40 hover:border-gull",
    badgeColor: "bg-gull/15 text-abbey border-gull/30 hover:bg-gull/40",
    glowColor: "bg-gull/15",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "HTML/CSS"],
  },
  {
    icon: "📊",
    title: "Dados & BI",
    borderColor: "border-danube/40 hover:border-danube",
    badgeColor: "bg-danube/15 text-danube border-danube/30 hover:bg-danube/30",
    glowColor: "bg-danube/10",
    skills: ["Power BI", "Pandas", "NumPy", "Excel", "ETL", "Data Pipeline"],
  },
  {
    icon: "🤖",
    title: "IA & Machine Learning",
    borderColor: "border-gull/40 hover:border-gull",
    badgeColor: "bg-gull/15 text-abbey border-gull/30 hover:bg-gull/40",
    glowColor: "bg-gull/15",
    skills: ["Agentes IA", "Whisper", "Elastic Search", "NLP", "LLMs", "Embeddings"],
  },
  {
    icon: "🗄️",
    title: "Banco de Dados",
    borderColor: "border-danube/40 hover:border-danube",
    badgeColor: "bg-danube/15 text-danube border-danube/30 hover:bg-danube/30",
    glowColor: "bg-danube/10",
    skills: ["PostgreSQL", "MySQL", "Redis", "SQL", "NoSQL", "Migrations"],
  },
  {
    icon: "🛠️",
    title: "Ferramentas & DevOps",
    borderColor: "border-gull/40 hover:border-gull",
    badgeColor: "bg-gull/15 text-abbey border-gull/30 hover:bg-gull/40",
    glowColor: "bg-gull/15",
    skills: ["N8N", "Jira", "Pipefy", "Git", "Vercel", "Docker"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white via-foggy/10 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-danube/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gull/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-danube/10 border border-danube/20 rounded-full text-danube text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Tech Stack
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-abbey via-danube to-gull bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-abbey/70 max-w-2xl mx-auto font-medium">
            Tecnologias e ferramentas que uso para construir soluções reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border-2 ${category.borderColor} p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow de fundo */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${category.glowColor} rounded-full blur-2xl transition-all duration-500 group-hover:w-40 group-hover:h-40`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-black text-abbey group-hover:text-danube transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className={`${category.badgeColor} font-semibold transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
