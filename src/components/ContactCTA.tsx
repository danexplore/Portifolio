import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { User, MessageSquare, Send, CheckCircle2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data)
    
    // Envia via WhatsApp
    const message = `*Olá, gostaria de ter os seus serviços aqui!*%0A%0AMeu nome é *${data.name}*%0A*Eu preciso:*%0A${data.message}`
    const whatsappUrl = `https://wa.me/5561991808196?text=${message}`
    
    window.open(whatsappUrl, "_blank")
    
    setSubmitted(true)
    reset()
    
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contato-cta" className="py-24 bg-gradient-to-br from-danube/15 via-foggy/30 to-gull/15 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-danube/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gull/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Lado Esquerdo - Foto e Descrição */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-6">
                {/* Foto de Perfil */}
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-danube to-gull p-1.5 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      {/* Placeholder para sua foto */}
                      <img 
                        src="/images/profile.jpg" 
                        alt="Foto de perfil"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback caso a imagem não exista
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<div class="text-6xl">👨‍💻</div>';
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-abbey to-danube bg-clip-text text-transparent">
                    Vamos Trabalhar Juntos?
                  </h2>
                  <p className="text-lg text-abbey/70 font-semibold">
                    Analista de Dados & Desenvolvedor
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xl leading-relaxed text-abbey">
                  Transformo dados em decisões estratégicas e desenvolvo soluções 
                  tecnológicas que <strong className="text-danube">geram resultados reais</strong>.
                </p>

                <div className="space-y-3 pt-4">
                  <h3 className="font-bold text-xl text-abbey">🎯 Especialidades:</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-danube to-gull text-white rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-transform">
                      Python & APIs
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-danube to-gull text-white rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-transform">
                      Power BI
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-danube to-gull text-white rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-transform">
                      ETL & Pipelines
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-danube to-gull text-white rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-transform">
                      IA FullStack
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Formulário */}
            <Card className="shadow-3xl border-2 border-gull/30 hover:border-danube transition-all animate-slide-up bg-white">
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-danube/10 rounded-full blur-2xl"></div>
                <CardTitle className="text-3xl font-black text-abbey relative z-10">📩 Entre em Contato</CardTitle>
                <CardDescription className="text-abbey/70 font-medium text-base relative z-10">
                  Preencha o formulário e vamos conversar sobre seu projeto
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-green-600">Mensagem Enviada!</h3>
                    <p className="text-abbey/70 font-medium">
                      Obrigado pelo contato. Vou responder em breve via WhatsApp! 🚀
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Nome */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2 text-abbey font-bold">
                        <User className="w-5 h-5 text-danube" />
                        Nome Completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        {...register("name", { required: "Nome é obrigatório" })}
                        className={`border-2 ${errors.name ? "border-red-500" : "border-gull/30"} focus:border-danube text-abbey font-medium`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 font-semibold">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Mensagem */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2 text-abbey font-bold">
                        <MessageSquare className="w-5 h-5 text-danube" />
                        Descreva a Solução Necessária
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Conte-me sobre seu projeto ou necessidade..."
                        rows={5}
                        {...register("message", { 
                          required: "Descrição é obrigatória",
                          minLength: {
                            value: 10,
                            message: "Descreva melhor sua necessidade (mínimo 10 caracteres)"
                          }
                        })}
                        className={`border-2 ${errors.message ? "border-red-500" : "border-gull/30"} focus:border-danube text-abbey font-medium`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 font-semibold">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Botão Submit */}
                    <Button 
                      type="submit" 
                      className="w-full text-lg py-7 bg-gradient-to-r from-danube to-gull hover:from-danube/90 hover:to-gull/90 text-white font-black shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                      size="lg"
                    >
                      <Send className="mr-2 h-6 w-6" />
                      Enviar via WhatsApp
                    </Button>

                    <p className="text-xs text-center text-abbey/60 font-medium">
                      ✨ Ao enviar, você será redirecionado para o WhatsApp
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
