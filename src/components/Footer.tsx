import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-gradient-to-b from-abbey/10 to-abbey/20 border-t-2 border-gull/40 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-danube/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gull/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Informações */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-abbey mb-3 bg-gradient-to-r from-abbey to-danube bg-clip-text text-transparent">
                Vamos conversar?
              </h3>
              <p className="text-abbey/80 text-lg font-medium">
                Aberto para oportunidades e colaborações
              </p>
            </div>

            {/* Links Sociais */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-danube text-danube hover:bg-gradient-to-r hover:from-danube hover:to-gull hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-lg w-12 h-12"
                onClick={() => window.open("https://www.linkedin.com/in/daniel-moreira-87b9b42ba/", "_blank")}
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-2 border-danube text-danube hover:bg-gradient-to-r hover:from-danube hover:to-gull hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-lg w-12 h-12"
                onClick={() => window.open("https://github.com/danexplore", "_blank")}
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-2 border-danube text-danube hover:bg-gradient-to-r hover:from-danube hover:to-gull hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-lg w-12 h-12"
                onClick={() => window.location.href = "mailto:danielbatistamor@gmail.com"}
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">E-mail</span>
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gull/30 my-8"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-abbey/70">
            <p className="mb-2 font-semibold">
              © {currentYear} Analista de Dados & Desenvolvedor. Todos os direitos reservados.
            </p>
            <p className="text-xs font-medium">
              Feito com ❤️ usando React, TypeScript, Tailwind CSS e shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
