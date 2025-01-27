"use client"; // Torna o componente um Client Component

import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleStartNowClick = () => {
    window.open("https://wa.me/556181926283", "_blank"); // Abre o link do WhatsApp em uma nova aba
  };

  return (
    <section className="relative py-32 px-6 text-center min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-background to-primary/10">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Inovação Digital para o Futuro
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto">
          Transforme seu negócio com nossas soluções de SaaS e marketing digital de ponta.
        </p>
        <Button
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary hover:to-primary text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={handleStartNowClick} 
        >
          Comece Agora
        </Button>
      </div>
    </section>
  );
}
