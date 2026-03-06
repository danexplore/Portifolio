import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Github, ExternalLink, Lock } from "lucide-react"

type Project = {
  title: string
  company: string
  category: string
  description: string
  longDescription: string
  tags: string[]
  github: string | null
  demo?: string
  isPrivate?: boolean
  metrics: string[]
}

const projects: Project[] = [
  {
    title: "Backend da Interface de Novos Projetos (INP)",
    company: "Unyleya",
    category: "Unyleya",
    description: "API FastAPI que resolveu a precariedade tecnológica do setor, aumentando a eficiência operacional em +50% e reduzindo erros/retrabalho em +90%.",
    longDescription: "Novos Projetos é um setor da Faculdade Unyleya, responsável por trazer novos Projetos Pedagógicos para a empresa. Este repositório reúne uma API desenvolvida em Python 3.13 utilizando o framework FastAPI, demonstrando práticas de construção de serviços REST, cache em Redis e autenticação básica, integrado com o Pipefy.",
    tags: ["Python", "FastAPI", "API", "Redis", "IA", "Pipefy"],
    github: "https://github.com/danexplore/NPI-backend",
    metrics: ["+50% Eficiência", "-90% Erros"],
  },
  {
    title: "Interface de Novos Projetos",
    company: "Unyleya",
    category: "Unyleya",
    description: "Visualização interativa das novas propostas de cursos, facilitando a análise delas e melhorando o processo de decisão, integrado diretamente com o banco de dados.",
    longDescription: "Desenvolvi com IA uma interface web utilizando React para a visualização de novas propostas acadêmicas. A ferramenta permite que os usuários analisem rapidamente as informações relevantes, como objetivos, público-alvo e diferenciais de cada proposta, possibilitando também interação com uma IA que analisa o contexto das propostas.",
    tags: ["React", "TypeScript", "Interface", "IA", "Integração"],
    github: "https://github.com/alexicm/Novos-Projetos",
    metrics: ["Análise Rápida", "Decisões Estratégicas", "Otimização de Tempo"],
  },
  {
    title: "API Verificadora de Similaridade",
    company: "Unyleya",
    category: "Unyleya",
    description: "API RESTful que utiliza Elastic Search para encontrar cursos similares com base em similaridade textual, auxiliando na tomada de decisões estratégicas.",
    longDescription: "Desenvolvi uma API RESTful utilizando FastAPI que integra com o Elastic Search para realizar buscas de similaridade textual entre cursos. A API recebe uma entrada de texto (nome ou resumo do curso) e retorna uma lista de cursos similares, facilitando a análise e decisão estratégica na criação de novos cursos.",
    tags: ["Python", "FastAPI", "Elastic Search", "API", "Similaridade"],
    github: "https://github.com/danexplore/API-Verificadora-de-Similaridade",
    metrics: ["Busca Eficiente", "Decisões Informadas"],
  },
  {
    title: "Pesquisa de Similaridade Unyleya (Interface)",
    company: "Unyleya",
    category: "Unyleya",
    description: "Sistema de recomendação de cursos baseado em similaridade textual, auxiliando na tomada de decisões estratégicas.",
    longDescription: "Desenvolvi um sistema de recomendação de cursos utilizando técnicas de similaridade vetorial, armazenando cursos em embeddings para calcular a similaridade entre nomes e resumos. Utilizando o Elastic Search e IA, o sistema sugere cursos similares com base em uma entrada fornecida.",
    tags: ["Python", "Elastic Search", "Similaridade", "Avaliação com IA"],
    github: "https://github.com/alexicm/Pesquisa-Similaridade-Uny",
    metrics: ["Análises Ágeis", "Decisões Informadas"],
  },
  {
    title: "ecosysMS-Back (Sistema de Gestão ecosys AUTO)",
    company: "ecosys AUTO",
    category: "ecosys AUTO",
    description: "API RESTful para análise e gestão de clientes, calculando Health Scores, KPIs e métricas de negócio. Realiza um semi-ETL consultando dois bancos (PostgreSQL e MySQL).",
    longDescription: "API RESTful completa para análise e gestão de clientes do sistema ecosys, com cálculo de Health Scores, KPIs e métricas de negócio. Realiza queries em dois bancos diferentes e trata os dados, fornecendo informações valiosíssimas para todos os setores da empresa.",
    tags: ["Python", "MySQL", "PostgreSQL", "API", "ETL"],
    github: "https://github.com/danexplore/ecosysMS-Back",
    metrics: ["Multi-Database", "Real-time KPIs"],
  },
  {
    title: "ecosysMS-Front (Dashboard de Gestão ecosys AUTO)",
    company: "ecosys AUTO",
    category: "ecosys AUTO",
    description: "Dashboard interativo para visualização de dados e métricas de clientes, integrado com a API ecosysMS-Back.",
    longDescription: "Dashboard desenvolvido com tecnologias modernas para proporcionar uma experiência de usuário fluida e interativa. Permite a visualização de dados em tempo real, com gráficos e relatórios personalizados, facilitando a análise de métricas de clientes.",
    tags: ["React", "TypeScript", "API", "Dashboard"],
    github: "https://github.com/danexplore/ecosys-dash-hub",
    metrics: ["Interatividade", "Visualização em Tempo Real"],
  },
  {
    title: "Kommo CRM — Integration API",
    company: "ecosys AUTO",
    category: "ecosys AUTO",
    description: "Backend Python para integração com CRM Kommo, automatizando sincronização de dados entre sistemas e gerando relatórios de pipeline comercial em tempo real.",
    longDescription: "API Python que integra com o CRM Kommo via REST, extraindo e sincronizando dados de leads, negócios e atividades. Automatiza fluxos comerciais, envia alertas e gera relatórios consolidados para a equipe de vendas.",
    tags: ["Python", "FastAPI", "CRM", "API", "Kommo"],
    github: "https://github.com/danexplore/Kommo-Back",
    metrics: ["Sync Automático", "Pipeline em Tempo Real"],
  },
  {
    title: "ecosys AUTO — Landing Page",
    company: "ecosys AUTO",
    category: "ecosys AUTO",
    description: "Landing page institucional desenvolvida em TypeScript/React com deploy no Vercel, apresentando os produtos e serviços da ecosys AUTO com foco em conversão.",
    longDescription: "Landing page moderna desenvolvida com React, TypeScript, Vite e Tailwind CSS. Otimizada para conversão com seções de produto, depoimentos e CTA estratégicos. Deploy contínuo via Vercel.",
    tags: ["TypeScript", "React", "Vite", "Tailwind", "Vercel"],
    github: "https://github.com/danexplore/ecosys-lp",
    demo: "https://ecosys-lp.vercel.app",
    metrics: ["Live Demo", "Deploy Contínuo"],
  },
  {
    title: "JiraSQL — Integração Jira → SQL",
    company: "Pessoal",
    category: "Ferramentas",
    description: "Ferramenta Python que extrai dados do Jira e os carrega em banco SQL, permitindo análises avançadas de produtividade, sprints e ciclos de desenvolvimento.",
    longDescription: "Pipeline ETL que conecta à API do Jira, extrai issues, sprints e métricas de desenvolvimento, transforma os dados e carrega em PostgreSQL/MySQL para análise com BI ou SQL direto.",
    tags: ["Python", "SQL", "Jira", "ETL", "API"],
    github: "https://github.com/danexplore/JiraSQL",
    metrics: ["ETL Automatizado", "Análise de Sprints"],
  },
  {
    title: "Smart Transcription Plan",
    company: "Pessoal",
    category: "Pessoal",
    description: "Sistema inteligente de transcrição automática com IA que converte áudio/vídeo em texto com alta precisão, usando LLMs para análise e sumarização automática.",
    longDescription: "Solução completa de transcrição com IA que processa arquivos de áudio/vídeo, utiliza modelos de reconhecimento de fala (Whisper) para transcrição precisa e aplica modelos de linguagem para gerar resumos, identificar pontos-chave e criar planos de ação automáticos.",
    tags: ["Python", "IA", "Whisper", "NLP", "Automação"],
    github: null,
    isPrivate: true,
    metrics: ["Alta Precisão", "Sumarização Automática"],
  },
]

const categories = ["Todos", "Unyleya", "ecosys AUTO", "Ferramentas", "Pessoal"]

export function GithubProjects() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projetos" className="py-24 bg-gradient-to-b from-white via-foggy/20 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gull/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-danube/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-abbey/10 border border-abbey/20 rounded-full text-abbey text-sm font-medium mb-6">
            <Github className="w-4 h-4" />
            Open Source & Profissional
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-abbey via-danube to-gull bg-clip-text text-transparent">
            Projetos no GitHub
          </h2>
          <p className="text-xl text-abbey/70 max-w-2xl mx-auto font-medium">
            Código aberto, soluções profissionais e impacto mensurável
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-danube text-white border-danube shadow-lg scale-105"
                  : "bg-white text-abbey border-gull/40 hover:border-danube hover:text-danube hover:scale-105"
              }`}
            >
              {cat}
              {cat !== "Todos" && (
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? "bg-white/20" : "bg-gull/20"
                }`}>
                  {projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filtered.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-slide-up border-2 border-gull/20 hover:border-danube bg-white overflow-hidden"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-danube/10 rounded-full blur-2xl"></div>
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-2 bg-danube/10 px-3 py-1.5 rounded-full">
                    <Github className="w-4 h-4 text-danube" />
                    <span className="text-xs font-bold text-danube uppercase tracking-wide">
                      {project.company}
                    </span>
                  </div>
                  {project.isPrivate && (
                    <div className="flex items-center gap-1 bg-abbey/10 px-2 py-1 rounded-full">
                      <Lock className="w-3 h-3 text-abbey/60" />
                      <span className="text-xs text-abbey/60 font-medium">Privado</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl md:text-2xl group-hover:text-danube transition-colors font-black text-abbey leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-abbey/70 font-medium">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-abbey/60 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="bg-gull/20 text-abbey border-gull/30 hover:bg-gull/40 font-semibold">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-br from-danube/20 to-gull/20 rounded-xl p-3 text-center border border-danube/30 shadow-md"
                    >
                      <div className="text-xs font-bold text-danube">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.isPrivate ? (
                  <Button
                    className="flex-1 bg-abbey/20 text-abbey/50 cursor-not-allowed font-bold"
                    disabled
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Repositório Privado
                  </Button>
                ) : (
                  <>
                    <Button
                      className={`${project.demo ? "flex-1" : "w-full"} bg-abbey hover:bg-abbey/90 text-white group-hover:bg-danube group-hover:text-white transition-all font-bold shadow-lg group-hover:shadow-xl`}
                      onClick={() => window.open(project.github!, "_blank")}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Ver no GitHub
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    {project.demo && (
                      <Button
                        variant="outline"
                        className="flex-1 border-2 border-danube text-danube hover:bg-danube hover:text-white font-bold transition-all"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Demo
                      </Button>
                    )}
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
