import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

declare global {
  interface Window {
    gtag?: (event: string, action: string, data?: Record<string, unknown>) => void
  }
}

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "5561991808196"

  const handleWhatsAppClick = () => {
    // Enviar webhook de clique no WhatsApp
    const whatsappClickPayload = {
      event: 'whatsapp_button_click',
      timestamp: new Date().toISOString(),
      session: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screenResolution: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer || 'direct',
        currentUrl: window.location.href,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
      },
      performance: {
        pageLoadTime: performance.now(),
      }
    }

    fetch('https://n8n.ecosysauto.com.br/webhook/teste-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(whatsappClickPayload),
    }).catch(() => {
      console.log('Webhook de clique WhatsApp enviado')
    })

    // Enviar evento para Google Ads
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        'send_to': 'AW-17730505723/NbaCCJDm3cEbEPuXyIZC'
      })
    }

    const message = "Olá! Vim através do seu portfólio e gostaria de fazer um orçamento."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* Botão Principal */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Caixinha de Texto */}
        {isOpen && (
          <div className="bg-white dark:bg-card border-2 border-primary rounded-2xl shadow-2xl p-4 max-w-[280px] animate-slide-up">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">WhatsApp</h4>
                  <p className="text-xs text-muted-foreground">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-3 mb-3">
              <p className="text-sm font-medium text-foreground">
                Faça seu orçamento comigo!
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Respondo rapidamente 🚀
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Iniciar Conversa
            </button>
          </div>
        )}

        {/* Botão Flutuante */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          
          {/* Ícone */}
          <MessageCircle className="w-7 h-7 relative z-10" />
          
          {/* Badge de notificação */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>

        {/* Tooltip quando fechado */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Faça seu orçamento!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    </>
  )
}
