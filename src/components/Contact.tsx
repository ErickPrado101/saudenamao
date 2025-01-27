"use client";
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/556181926283", "_blank")
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-foreground">Entre em Contato</h2>
        <p className="text-xl mb-12 text-muted-foreground">
          Estamos prontos para ajudar você a transformar seu negócio. Entre em contato conosco via WhatsApp!
        </p>
        <Button
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="mr-2 h-6 w-6" />
          Fale Conosco no WhatsApp
        </Button>
      </div>
    </section>
  )
}
