import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { BarChart3, Layout, Target, TrendingUp } from "lucide-react"

export function DashboardsAndInterfaces() {
  return (
    <section className="py-24 bg-gradient-to-b from-abbey/5 via-abbey/10 to-abbey/5 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-danube/15 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-gull/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-danube/10 border border-danube/20 rounded-full text-danube text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            Dados Visualizados com Propósito
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-abbey via-danube to-gull bg-clip-text text-transparent">
            Dashboards & Interfaces
          </h2>
          <p className="text-xl text-abbey/70 max-w-2xl mx-auto font-medium">
            Transformando complexidade em clareza visual
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="bi" className="w-full">
            <TabsList className="inline-flex w-auto mx-auto mb-12 bg-white/80 backdrop-blur-sm border-2 border-gull/30 p-2 rounded-full shadow-2xl">
              <TabsTrigger 
                value="bi" 
                className="rounded-full px-8 py-4 text-base font-bold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-danube data-[state=active]:to-gull data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=inactive]:text-abbey/60 data-[state=inactive]:hover:text-abbey data-[state=inactive]:hover:bg-gull/10"
              >
                <BarChart3 className="w-5 h-5 inline mr-2" />
                Power BI
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                className="rounded-full px-8 py-4 text-base font-bold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-danube data-[state=active]:to-gull data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=inactive]:text-abbey/60 data-[state=inactive]:hover:text-abbey data-[state=inactive]:hover:bg-gull/10"
              >
                <Layout className="w-5 h-5 inline mr-2" />
                Interfaces Web
              </TabsTrigger>
            </TabsList>

            {/* Dashboards PowerBI */}
            <TabsContent value="bi" className="space-y-8 animate-fade-in">
              <Card className="border-2 border-gull/30 hover:border-danube transition-all bg-white shadow-2xl hover:shadow-3xl hover:scale-[1.02] duration-500">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-danube/10 rounded-full blur-3xl"></div>
                  <div className="flex items-center gap-2 mb-3 relative z-10">
                    <div className="bg-danube/10 p-2 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-danube" />
                    </div>
                    <Badge className="bg-danube/20 text-danube border-danube/30 font-bold">ecosys AUTO</Badge>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-black text-abbey">
                    Dashboard de Usabilidade do Sistema
                  </CardTitle>
                  <CardDescription className="text-base text-abbey/70 font-medium">
                    Um dashboard completo que traz informações reais e atuais sobre 
                    a utilização do sistema por cada cliente
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-danube shadow-md">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-danube">
                      <Target className="w-6 h-6" />
                      Objetivo
                    </h4>
                    <p className="text-abbey leading-relaxed">
                      A empresa precisava entender o quanto cada cliente utilizava 
                      cada componente do sistema (80-90% das informações relevantes).
                    </p>
                  </div>

                  <div className="bg-gull/10 rounded-2xl p-6 border border-gull/30">
                    <h4 className="font-bold text-lg mb-3 text-abbey">💡 Solução Implementada</h4>
                    <p className="text-abbey/70 leading-relaxed mb-4">
                      Cruzamento de dados do CRM com o banco do sistema (tenants), 
                      usando queries validadas por múltiplas pessoas para garantir 
                      dados verdadeiros para o time de CS e Atendimento.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-danube/20 text-danube border-danube/30 font-semibold">SQL</Badge>
                      <Badge className="bg-danube/20 text-danube border-danube/30 font-semibold">Power BI</Badge>
                      <Badge className="bg-danube/20 text-danube border-danube/30 font-semibold">ETL</Badge>
                      <Badge className="bg-danube/20 text-danube border-danube/30 font-semibold">Data Validation</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-danube to-gull rounded-2xl p-5 text-center shadow-lg">
                      <div className="text-3xl font-black text-white">80-90%</div>
                      <div className="text-xs text-white/90 font-semibold mt-1">
                        Cobertura de Dados
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-danube to-gull rounded-2xl p-5 text-center shadow-lg">
                      <div className="text-3xl font-black text-white">100%</div>
                      <div className="text-xs text-white/90 font-semibold mt-1">
                        Dados Validados
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-danube to-gull rounded-2xl p-5 text-center shadow-lg">
                      <div className="text-3xl font-black text-white">Real-time</div>
                      <div className="text-xs text-white/90 font-semibold mt-1">
                        Atualização
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Interfaces Web */}
            <TabsContent value="web" className="space-y-8 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Interface de Gestão de Clientes */}
                <Card className="border-2 border-gull/30 hover:border-danube transition-all bg-white shadow-xl hover:shadow-2xl hover:scale-105 duration-500">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-danube/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-danube" />
                      </div>
                      <Badge className="bg-danube/20 text-danube border-danube/30 font-bold">ecosys AUTO</Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-black text-abbey">
                      Interface de Gestão de Clientes
                    </CardTitle>
                    <CardDescription className="text-abbey/70 font-medium">
                      Aprimoramento do dashboard focado na simplicidade e eficácia
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-abbey leading-relaxed">
                      Exibe <strong className="text-danube">Churn Rate, Growth Rate, LTV, meses ativos, 
                      histórico de adesão e evolução de clientes</strong>, usando 
                      o CRM como fonte única da verdade.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-danube">
                      <h5 className="font-bold text-sm mb-2 text-danube">🎯 Objetivo</h5>
                      <p className="text-sm text-abbey">
                        Acompanhamento facilitado dos dados, removendo múltiplas 
                        fontes e tornando o trabalho mais simples e dinâmico.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                      <h5 className="font-bold text-sm mb-2 text-green-700">🚀 Futuro</h5>
                      <p className="text-sm text-abbey">
                        Tornar um gestor completo de clientes para o comercial 
                        e financeiro.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-gull/20 text-abbey border-gull/30 font-semibold">React</Badge>
                      <Badge className="bg-gull/20 text-abbey border-gull/30 font-semibold">Python API</Badge>
                      <Badge className="bg-gull/20 text-abbey border-gull/30 font-semibold">IA</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Interface de Novos Projetos */}
                <Card className="border-2 border-gull/30 hover:border-danube transition-all bg-white shadow-xl hover:shadow-2xl hover:scale-105 duration-500">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-danube/10 p-2 rounded-lg">
                        <Layout className="w-5 h-5 text-danube" />
                      </div>
                      <Badge className="bg-danube/20 text-danube border-danube/30 font-bold">Unyleya</Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-black text-abbey">
                      Interface de Novos Projetos
                    </CardTitle>
                    <CardDescription className="text-abbey/70 font-medium">
                      Sistema desenvolvido para o comitê de novos cursos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-abbey leading-relaxed">
                      Desenvolvida para o comitê de novos cursos, <strong className="text-red-600">substituindo 
                      o terrível processo de "análise por e-mail"</strong>. Integrada 
                      ao Pipefy.
                    </p>
                    <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
                      <h5 className="font-bold text-sm mb-2 text-red-700">⚠️ Problema</h5>
                      <p className="text-sm text-abbey">
                        Tudo era feito na hora pelos diretores, manter dados corretos 
                        e atualizados era um trabalho ineficaz.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                      <h5 className="font-bold text-sm mb-2 text-green-700">✅ Impacto</h5>
                      <p className="text-sm text-abbey">
                        Reduziu o retrabalho e simplificou tanto a análise quanto 
                        a aprovação de propostas.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-gull/20 text-abbey border-gull/30 font-semibold">Pipefy</Badge>
                      <Badge className="bg-gull/20 text-abbey border-gull/30 font-semibold">Automação</Badge>
                      <Badge className="bg-gull/20 text-abbey border-gull/30 font-semibold">React</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
