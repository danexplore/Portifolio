import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Sobre Mim", id: "sobre" },
  { label: "Skills", id: "skills" },
  { label: "Experiência", id: "experiencia" },
  { label: "Estudos de Caso", id: "casos" },
  { label: "Projetos", id: "projetos" },
  { label: "Contato", id: "contato-cta" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-danube">Portfólio - Daniel Moreira Batista</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-abbey hover:text-danube transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded-lg text-abbey hover:text-danube hover:bg-danube/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-gull/20 shadow-lg">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium text-abbey hover:text-danube hover:bg-danube/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
