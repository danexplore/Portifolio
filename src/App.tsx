import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { CaseStudies } from "./components/CaseStudies"
import { GithubProjects } from "./components/GithubProjects"
import { DashboardsAndInterfaces } from "./components/DashboardsAndInterfaces"
import { ContactCTA } from "./components/ContactCTA"
import { Footer } from "./components/Footer"
import { WhatsAppFloat } from "./components/WhatsAppFloat"

function App() {
  return (
    <div className="min-h-screen bg-white text-abbey">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <CaseStudies />
        <GithubProjects />
        <DashboardsAndInterfaces />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
