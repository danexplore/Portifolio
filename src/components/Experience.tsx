import { Briefcase, Building2, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "ecosys AUTO",
      role: "Analista de dados",
      period: "julho de 2025 - Present (9 meses)",
      location: "Brasília, Distrito Federal, Brasil",
      description: [
        "Segmentação de Clientes (RFMA): Adaptei o RFM para encaixar no nosso sistema para identificar clientes que mais utilizam o sistema dos que estão em risco de churn (Campeões, Saudáveis, Normais, Críticos), assim conseguimos definir estratégias para cada tipo, como ativação, identificação de funcionalidade que não está sendo utilizada, frequência de uso da plataforma, etc...",
        "ETL: Com SQL, Python e N8N, desenvolvo sistemas de extração e transformação/manipulação de dados, desenvolvendo API\'s Rest com IA, capazes de fornecer dados bem estruturados e fidedignos para a empresa.",
        "Organização e Estruturação de dados: Planejamento e Organização de banco de dados para armazenar dados necessárias para consumo análitico provindos do ETL.",
        "Mapeamento de processos: Mapeamento de Processos e Regras de Negócios para geração de insights por meio dos dados, construindo fluxos de dados alinhados ao negócio.",
        "Criação de dashboards e Geração de Insights Valiosos: Com power BI ou Lovable / Desenvolvimento de Sites com IA, consigo fornecer esses dados com uma segurança básica para o público interno e externo, trazendo informações valiosas sobre a usabilidade do sistema dos nossos clientes.",
        "Inovação de tecnologias: Criação de app interno e desenvolvimento de soluções inovadoras com IA, famoso \"A sua ideia no papel se torna realidade aqui!\"."
      ]
    },
    {
      company: "Unyleya Educacional",
      role: "Assistente administrativo | Analista de Dados",
      period: "setembro de 2024 - julho de 2025 (11 meses)",
      location: "Brasília, Distrito Federal, Brasil",
      description: [
        "Tratamento e Organização de dados",
        "Geração de relatórios mensais",
        "Criação de dashboards para consulta de dados",
        "Automação de tarefas",
        "Melhoria de processos administrativos com a ferramenta Pipefy",
        "Criação de webapp para visualização e gestão de propostas de novos cursos: Feito utilizando python e V0.dev para a criação do frontend.",
        "Criação de webapp para verificação de similaridade de cursos com base em tema (assunto) e resumo do curso: Feito utilizando Elastic Search, Python e V0.Dev para o desenvolvimento do frontend."
      ]
    },
    {
      company: "Unyleya Educacional",
      role: "Jovem aprendiz",
      period: "agosto de 2022 - junho de 2024 (1 ano 11 meses)",
      location: "Brasília, Distrito Federal, Brasil",
      description: [
        "Envio de e-mails marketing automatizados via VBA",
        "Web scraping para prospecção de leads",
        "Automação de tarefas e processos repetitivos utilizando python",
        "Relatórios automatizados em Excel",
        "Apoio em tarefas administrativas",
      ]
    }
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-danube" />
            <h2 className="text-4xl font-bold text-abbey">Experiência Profissional</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Linha vertical (visível apenas em mobile) */}
                <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gray-200 md:hidden"></div>

                <div className="md:grid md:grid-cols-4 md:gap-8 hover:bg-gray-50 p-6 rounded-2xl transition-colors border border-transparent hover:border-gray-100">
                  {/* Informações laterais (empresa, data) */}
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <div className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                      <div className="font-bold text-abbey flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-danube" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Detalhes da experiência */}
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-danube mb-4">{exp.role}</h3>
                    {exp.description.length > 0 && (
                      <ul className="space-y-3 text-gray-600">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-danube/50 flex-shrink-0 mt-2"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
