import { Button } from "./ui/button"
import { ArrowDown, Sparkles, TrendingUp, Database, FolderOpen } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="sobre" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background com gradiente e padrão */}
      <div className="absolute inset-0 bg-gradient-to-br from-danube/5 via-gull/5 to-foggy/10"></div>
      
      {/* Padrão de grid animado */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Círculos decorativos com blur */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-danube/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gull/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-danube/10 border border-danube/20 rounded-full text-danube text-sm font-medium animate-slide-up">
            <Sparkles className="w-4 h-4" />
            Dados + IA = Decisões Inteligentes
          </div>

          {/* Título principal com efeito gradiente */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight animate-delay-1">
            <span className="bg-gradient-to-r from-abbey via-danube to-gull bg-clip-text text-transparent leading-tight block">
              Transformo Dados
            </span>
            <span className="text-danube block mt-3 drop-shadow-lg">
              em Resultados Reais
            </span>
          </h1>

          {/* Estatísticas impactantes */}
          <div className="flex flex-wrap justify-center gap-8 py-6 animate-delay-2">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl font-bold text-danube">
                <TrendingUp className="w-8 h-8" />
                +150%
              </div>
              <p className="text-sm text-abbey/70 font-medium mt-1">Eficiência</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl font-bold text-danube">
                <Database className="w-8 h-8" />
                90%
              </div>
              <p className="text-sm text-abbey/70 font-medium mt-1">Precisão</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl font-bold text-danube">
                <Sparkles className="w-8 h-8" />
                24/7
              </div>
              <p className="text-sm text-abbey/70 font-medium mt-1">Automação</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl font-bold text-danube">
                <FolderOpen className="w-8 h-8" />
                10+
              </div>
              <p className="text-sm text-abbey/70 font-medium mt-1">Projetos</p>
            </div>
          </div>

          {/* Descrição mais impactante */}
          <p className="text-xl md:text-2xl text-abbey max-w-3xl mx-auto leading-relaxed animate-delay-3 font-medium">
            Analista de Dados e Desenvolvedor com foco em{" "}
            <span className="text-danube font-bold">resultado de negócio</span>.
            <br />
            Construo pipelines, dashboards, APIs e automações com IA que{" "}
            <span className="text-danube font-bold">transformam dados brutos</span> em vantagem competitiva.
          </p>

          {/* CTAs maiores e mais chamativos */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-delay-4 pt-6">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-danube hover:bg-danube/90 text-white px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Ver Projetos Reais
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById("contato-cta")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="border-2 border-danube text-danube hover:bg-danube hover:text-white px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-danube/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
