import { useState, useEffect } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { CheckCircle2, TrendingUp, Images, ChevronLeft, ChevronRight } from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

interface CaseStudy {
  title: string
  company: string
  tags: string[]
  problem: string
  solution: string
  impact: string
  metrics: { label: string; value: string }[]
  images: string[]
}

export function CaseStudies() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImages, setCurrentImages] = useState<{ src: string }[]>([])
  const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>({})

  const cases: CaseStudy[] = [
    {
      title: "Automação e Análise de Impacto de Cursos",
      company: "Unyleya",
      tags: ["Desenvolvimento IA", "Automação", "Backend", "Elastic Search", "Data Science"],
      problem: "A Unyleya precisava automatizar relatórios e entender o impacto de novos cursos com base em segmentos similares, um processo manual e lento. Onde a pessoa tinha que consultar em mais de 3 lugares diferentes (planilhas e sistemas) para conseguir essas informações.",
      solution: "Desenvolvi um site centralizando a visualização de similaridade de cursos, permitindo análises rápidas com o mínimo de recurso.",
      impact: "Melhoria direta na tomada de decisões estratégicas da faculdade sobre novos produtos, auxiliando tanto os coordenadores quanto o comitê de aprovação de novos cursos.",
      metrics: [
        { label: "Eficiência Operacional", value: "+100%" },
        { label: "Redução de Erros", value: "+95%" },
        { label: "Inovação", value: "+100%" }
      ],
      images: [
        "/images/projetos/unyleya/PesquisaSimilaridade.png",
        "/images/projetos/unyleya/GestaoPropostas.png",
      ]
    },
    {
      title: "Análise de Churn e Engajamento de Clientes",
      company: "ecosys AUTO",
      tags: ["Pipeline de Dados", "N8N - Integração CRM", "PostgreSQL", "mySQL", "Python", "API", "PowerBI", "Analise de Churn"],
      problem: "Como uma startup em crescimento, a ecosys AUTO precisava de acompanhamento constante dos clientes para reduzir o churn e melhorar o crescimento.",
      solution: "Criei um ecossistema de dados: ETL (via CRM/N8N), SQL para extração do banco, um backend Python (API) para servir os dados, e um frontend (feito com IA) e dashboards em Power BI para visualização.",
      impact: "O time inteiro, do CS ao C-level, passou a visualizar o engajamento do cliente e a evolução das metas da empresa em tempo real, tornando o restrito acessível.",
      metrics: [
        { label: "Visibilidade de Dados", value: "80-90%" },
        { label: "Acesso em Tempo Real", value: "100%" }
      ],
      images: [
        "/images/projetos/ecosys/Gestor_Clientes.png",
        "/images/projetos/ecosys/Dashboard_Gestor.png",
        "/images/projetos/ecosys/Clientes.png",
        "/images/projetos/ecosys/Estoque_dash.png"
      ]
    }
  ]

  const openLightbox = (images: string[]) => {
    setCurrentImages(images.map(src => ({ src })))
    setLightboxOpen(true)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides(prev => {
        const newSlides = { ...prev }
        cases.forEach((_, index) => {
          const currentSlide = newSlides[index] || 0
          newSlides[index] = (currentSlide + 1) % cases[index].images.length
        })
        return newSlides
      })
    }, 3000) // Muda a cada 3 segundos

    return () => clearInterval(interval)
  }, [cases.length])

  const nextSlide = (caseIndex: number, totalImages: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [caseIndex]: ((prev[caseIndex] || 0) + 1) % totalImages
    }))
  }

  const prevSlide = (caseIndex: number, totalImages: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [caseIndex]: ((prev[caseIndex] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <section id="casos" className="py-24 bg-gradient-to-b from-foggy/30 via-white to-foggy/30 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-danube/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gull/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-danube/10 border border-danube/20 rounded-full text-danube text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Projetos com Impacto Real
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-abbey via-danube to-gull bg-clip-text text-transparent">
            Estudos de Caso
          </h2>
          <p className="text-xl text-abbey/70 max-w-2xl mx-auto font-medium">
            Transformando desafios complexos em soluções mensuráveis
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {cases.map((caseStudy, caseIndex) => {
            const currentSlide = activeSlides[caseIndex] || 0
            
            return (
              <div
                key={caseIndex}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-slide-up border-2 border-gull/20 hover:border-danube/50"
                style={{ animationDelay: `${caseIndex * 0.2}s` }}
              >
                <div className="grid md:grid-cols-[1fr,400px] gap-8 items-start">
                  {/* Conteúdo à Esquerda */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-danube/10 p-2 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-danube" />
                        </div>
                        <span className="text-sm font-bold text-danube uppercase tracking-wider">
                          {caseStudy.company}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-4 text-abbey leading-tight">
                        {caseStudy.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {caseStudy.tags.map((tag) => (
                          <Badge key={tag} className="bg-gull/20 text-abbey border-gull/30 hover:bg-gull/30 font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2 text-red-700">
                          <span className="text-xl">⚠️</span> Problema
                        </h4>
                        <p className="text-abbey leading-relaxed text-sm">
                          {caseStudy.problem}
                        </p>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-danube p-4 rounded-r-lg">
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2 text-danube">
                          <span className="text-xl">💡</span> Solução
                        </h4>
                        <p className="text-abbey leading-relaxed text-sm">
                          {caseStudy.solution}
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2 text-green-700">
                          <CheckCircle2 className="w-5 h-5" />
                          Impacto
                        </h4>
                        <p className="text-abbey leading-relaxed text-sm">
                          {caseStudy.impact}
                        </p>
                      </div>
                    </div>

                    {/* Métricas e Botão */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {caseStudy.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex-1 min-w-[120px] bg-gradient-to-br from-danube to-gull rounded-xl p-4 text-center shadow-lg"
                        >
                          <div className="text-2xl md:text-3xl font-black text-white drop-shadow-md">
                            {metric.value}
                          </div>
                          <div className="text-xs text-white/90 font-semibold mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Carrossel de Imagens à Direita */}
                  <div className="space-y-4">
                    <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-abbey/5 aspect-[4/3]">
                      {/* Imagem */}
                      <div className="relative w-full h-full">
                        <img
                          src={caseStudy.images[currentSlide]}
                          alt={`${caseStudy.title} - Imagem ${currentSlide + 1}`}
                          className="w-full h-full object-cover transition-opacity duration-500"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23cfcfbc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%2352535b">Imagem não disponível</text></svg>'
                          }}
                        />
                        
                        {/* Overlay com gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-abbey/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>

                      {/* Botões de navegação */}
                      <button
                        onClick={() => prevSlide(caseIndex, caseStudy.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-abbey p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => nextSlide(caseIndex, caseStudy.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-abbey p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Indicadores */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {caseStudy.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveSlides(prev => ({ ...prev, [caseIndex]: i }))}
                            className={`h-2 rounded-full transition-all ${
                              i === currentSlide 
                                ? 'w-8 bg-white' 
                                : 'w-2 bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Ir para imagem ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Botão Ver Todas as Imagens */}
                    <Button
                      onClick={() => openLightbox(caseStudy.images)}
                      className="w-full bg-gradient-to-r from-danube to-gull hover:from-danube/90 hover:to-gull/90 text-white font-bold shadow-lg hover:shadow-xl transition-all group"
                    >
                      <Images className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Ver Todas as Imagens
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox para visualização de imagens */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentImages}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </section>
  )
}
