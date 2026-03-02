export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-danube">Portfólio - Daniel Moreira Batista</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium text-abbey hover:text-danube transition-colors"
          >
            Sobre Mim
          </button>
          <button
            onClick={() => scrollToSection("experiencia")}
            className="text-sm font-medium text-abbey hover:text-danube transition-colors"
          >
            Experiência
          </button>
          <button
            onClick={() => scrollToSection("casos")}
            className="text-sm font-medium text-abbey hover:text-danube transition-colors"
          >
            Estudos de Caso
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className="text-sm font-medium text-abbey hover:text-danube transition-colors"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("contato-cta")}
            className="text-sm font-medium text-abbey hover:text-danube transition-colors"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  )
}
