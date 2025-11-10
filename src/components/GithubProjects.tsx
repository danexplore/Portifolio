import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Github, ExternalLink } from "lucide-react"

export function GithubProjects() {
  const projects = [
    {
      title: "Backend da Interface de Novos Projetos (INP)",
      company: "Unyleya",
      description: "API FastAPI que resolveu a precariedade tecnológica do setor, aumentando a eficiência operacional em +50% e reduzindo erros/retrabalho em +90%.",
      longDescription: "Novos Projetos é um setor da Faculdade Unyleya, responsável por trazer novos Projetos Pedagógicos para a empresa. Este repositório reúne uma API desenvolvida em Python 3.13 utilizando o framework FastAPI, demonstrando práticas de construção de serviços REST, cache em Redis e autenticação básica, integrado com o Pipefy.",
      tags: ["Python", "FastAPI", "API", "Redis", "IA", "Pipefy"],
      github: "https://github.com/danexplore/NPI-backend",
      metrics: ["+50% Eficiência", "-90% Erros"]
    },
    {
      title: "Interface de Novos de Projetos",
      company: "Unyleya",
      description: "Visualização interativa das novas propostas de cursos, facilitando a análise delas e melhorando o processo de decisão, integrado diretamente com o banco de dados.",
      longDescription: "Desenvolvi com IA uma interface web utilizando React para a visualização novas propostas acadêmicas. A ferramenta permite que os usuários analisem rapidamente as informações relevantes, como objetivos, público-alvo e diferenciais de cada proposta. possibilitando também interação com uma IA que analisa o contexto da propsotas e te fornece detalhes pontuais.",
      tags: ["React", "TypeScript", "Interface", "IA", "Integração"],
      github: "https://github.com/alexicm/Novos-Projetos",
      metrics: ["Análise Rápida", "Decisões Estratégicas", "Otimização de Tempo"]
    },
    {
      title: "API Verificadora de Similaridade",
      company: "Unyleya",
      description: "API RESTful que utiliza Elastic Search para encontrar cursos similares com base em similaridade textual, auxiliando na tomada de decisões estratégicas.",
      longDescription: "Desenvolvi uma API RESTful utilizando FastAPI que integra com o Elastic Search para realizar buscas de similaridade textual entre cursos. A API recebe uma entrada de texto (nome ou resumo do curso) e retorna uma lista de cursos similares, facilitando a análise e decisão estratégica na criação de novos cursos.",
      tags: ["Python", "FastAPI", "Elastic Search", "API", "Similaridade"],
      github: "https://github.com/danexplore/API-Verificadora-de-Similaridade",
      metrics: ["Busca Eficiente", "Decisões Informadas"]
    },
    {
      title: "Pesquisa de Similaridade Unyleya (Interface)",
      company: "Unyleya",
      description: "Sistema de recomendação de cursos baseado em similaridade textual, auxiliando na tomada de decisões estratégicas.",
      longDescription: "Desenvolvi um sistema de recomendação de cursos utilizando técnicas de similaridade vetorial, armazenando cursos em embeddings para calcular a similaridade entre nomes e resumos. Utilizando o Elastic Search e IA, o sistema sugere cursos similares com base em uma entrada fornecida, auxiliando a faculdade para encontrar cursos similares ao tema fornecido e não desperdiçar tempo analisando planilhas e sistemas.",
      tags: ["Python", "Elastic Search", "Similaridade", "Avaliação com IA"],
      github: "https://github.com/alexicm/Pesquisa-Similaridade-Uny",
      metrics: ["Análises Ágeis", "Decisões Informadas"]
    },
    {
      title: "ecosysMS-Back (Sistema de Gestão ecosys AUTO)",
      company: "ecosys AUTO",
      description: "API RESTful para análise e gestão de clientes, calculando Health Scores, KPIs e métricas de negócio. Realiza um semi-ETL consultando dois bancos (PostgreSQL e MySQL).",
      longDescription: "API RESTful completa para análise e gestão de clientes do sistema ecosys, com cálculo de Health Scores, KPIs e métricas de negócio. Realiza queries em dois bancos diferentes e trata os dados, fornecendo informações valiosíssimas para todos os setores da empresa.",
      tags: ["Python", "MySQL", "PostgreSQL", "API", "ETL"],
      github: "https://github.com/danexplore/ecosysMS-Back",
      metrics: ["Multi-Database", "Real-time KPIs"]
    },
    {
      title: "ecosysMS-Front (Dashboard de Gestão ecosys AUTO)",
      company: "ecosys AUTO",
      description: "Dashboard interativo para visualização de dados e métricas de clientes, integrado com a API ecosysMS-Back.",
      longDescription: "Dashboard desenvolvido com tecnologias modernas para proporcionar uma experiência de usuário fluida e interativa. Permite a visualização de dados em tempo real, com gráficos e relatórios personalizados, facilitando a análise de métricas de clientes.",
      tags: ["React", "TypeScript", "API", "Dashboard"],
      github: "https://github.com/danexplore/ecosys-dash-hub",
      metrics: ["Interatividade", "Visualização em Tempo Real"]
    }
  ]

  return (
    <section id="projetos" className="py-24 bg-gradient-to-b from-white via-foggy/20 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gull/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-danube/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-slide-up border-2 border-gull/20 hover:border-danube bg-white overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
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

              <CardFooter>
                <Button
                  className="w-full bg-abbey hover:bg-abbey/90 text-white group-hover:bg-danube group-hover:text-white transition-all font-bold shadow-lg group-hover:shadow-xl"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" />
                  Ver no GitHub
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
