import { ExternalLink, Mic, Globe, Users, FileText, Zap, ArrowRight } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const features = [
  {
    icon: Mic,
    title: "Transcrição de Áudio e Vídeo",
    description:
      "Converte ficheiros multimédia em documentos de texto com rapidez e precisão, eliminando o processo manual e demorado de transcrição.",
    color: "bg-danube/10 text-danube",
    border: "border-danube/20",
  },
  {
    icon: Globe,
    title: "Suporte a Múltiplos Idiomas",
    description:
      "Identifica e transcreve automaticamente diversos idiomas e sotaques, tornando a plataforma acessível a um público global.",
    color: "bg-gull/20 text-abbey",
    border: "border-gull/30",
  },
  {
    icon: Users,
    title: "Identificação de Oradores",
    description:
      "Distingue automaticamente quem está a falar, facilitando a leitura de entrevistas, reuniões e conferências com múltiplos participantes.",
    color: "bg-danube/10 text-danube",
    border: "border-danube/20",
  },
  {
    icon: FileText,
    title: "Editor Online Sincronizado",
    description:
      "Interface para rever e corrigir o texto enquanto ouve o áudio sincronizado, garantindo precisão sem perda de produtividade.",
    color: "bg-gull/20 text-abbey",
    border: "border-gull/30",
  },
]

const techTags = ["Next.js", "TypeScript", "IA Generativa", "Cloud", "SaaS", "Whisper", "NLP"]

export function EcoTranscribeFeature() {
  return (
    <section
      id="ecotranscribe"
      className="py-24 bg-gradient-to-b from-white via-danube/5 to-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-danube/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gull/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-foggy/40 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-danube/10 border border-danube/20 rounded-full text-danube text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Projeto em Destaque — Produto SaaS
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-abbey via-danube to-gull bg-clip-text text-transparent leading-tight">
            EcoTranscribe AI
          </h2>

          <p className="text-xl text-abbey/70 max-w-2xl mx-auto font-medium mb-6">
            Plataforma SaaS de transcrição automática com inteligência artificial — transformando
            horas de áudio em texto editável em minutos.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techTags.map((tag) => (
              <Badge
                key={tag}
                className="bg-danube/10 text-danube border-danube/20 hover:bg-danube/20 font-semibold"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            asChild
            className="bg-gradient-to-r from-danube to-gull hover:from-danube/90 hover:to-gull/90 text-white font-bold shadow-lg hover:shadow-xl transition-all group px-8 py-3 text-base"
          >
            <a href="https://ecotranscribe-ai.com" target="_blank" rel="noopener noreferrer">
              Aceder à Plataforma
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Central showcase card */}
        <div className="max-w-6xl mx-auto mb-14">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-danube/20 hover:border-danube/50 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left: Problem → Solution story */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-bold text-danube uppercase tracking-wider">
                    O Desafio
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-abbey mt-2 leading-snug">
                    Transcrição manual é lenta, cara e propensa a erros.
                  </h3>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-sm mb-1 text-red-700">⚠️ Problema</h4>
                  <p className="text-abbey text-sm leading-relaxed">
                    Profissionais de jornalismo, pesquisa, recursos humanos e saúde perdem horas
                    transcrevendo áudio manualmente — um processo caro, demorado e sujeito a erros.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-danube p-4 rounded-r-lg">
                  <h4 className="font-bold text-sm mb-1 text-danube">💡 Solução</h4>
                  <p className="text-abbey text-sm leading-relaxed">
                    EcoTranscribe AI processa ficheiros de áudio e vídeo na nuvem, utilizando IA
                    para gerar transcrições precisas em múltiplos idiomas, com identificação
                    automática de oradores e um editor sincronizado para revisão.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-sm mb-1 text-green-700 flex items-center gap-1">
                    ✅ Impacto
                  </h4>
                  <p className="text-abbey text-sm leading-relaxed">
                    Redução drástica do tempo de transcrição — o que levava horas passa a levar
                    minutos — com maior fidelidade e acessibilidade multilíngue.
                  </p>
                </div>
              </div>

              {/* Right: Metrics + visual */}
              <div className="space-y-6">
                {/* Mock UI card */}
                <div className="bg-gradient-to-br from-abbey to-danube rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-white/20 rounded-lg p-2">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">EcoTranscribe AI</p>
                      <p className="text-white/70 text-xs">Processando ficheiro...</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-white/70">Online</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Idioma detectado", value: "Português (PT)" },
                      { label: "Oradores", value: "3 identificados" },
                      { label: "Duração", value: "1h 24min" },
                      { label: "Precisão estimada", value: "97.3%" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between items-center text-sm border-b border-white/10 pb-2"
                      >
                        <span className="text-white/70">{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-4 bg-green-400 rounded-sm animate-pulse" />
                    <div className="w-3 h-6 bg-white/40 rounded-sm" />
                    <div className="w-2 h-3 bg-white/30 rounded-sm" />
                    <div className="w-4 h-5 bg-white/50 rounded-sm" />
                    <div className="w-2 h-4 bg-green-400/70 rounded-sm" />
                    <div className="w-3 h-3 bg-white/20 rounded-sm" />
                    <p className="ml-2 text-xs text-white/60 italic">transcrição em tempo real...</p>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "97%+", label: "Precisão" },
                    { value: "20+", label: "Idiomas" },
                    { value: "10×", label: "Mais Rápido" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="bg-gradient-to-br from-danube to-gull rounded-xl p-4 text-center shadow-lg"
                    >
                      <div className="text-2xl font-black text-white drop-shadow-md">{m.value}</div>
                      <div className="text-xs text-white/90 font-semibold mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-abbey/60 text-sm font-semibold uppercase tracking-widest mb-8">
            Funcionalidades Principais
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border ${feature.border} animate-slide-up`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-abbey mb-2 leading-snug">{feature.title}</h4>
                  <p className="text-sm text-abbey/65 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="text-center mt-14 animate-fade-in">
          <a
            href="https://ecotranscribe-ai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-danube font-semibold hover:text-abbey transition-colors group"
          >
            Explorar o produto completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
