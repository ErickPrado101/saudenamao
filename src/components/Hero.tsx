"use client"

import { Button } from "@/components/ui/button"


export default function Hero() {
  return (
    <section className="relative py-32 px-6 text-center min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background">
     
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Inovação Digital para o Futuro
        </h1>
        <p className="text-xl mb-8 text-secondary max-w-2xl mx-auto">
          Transforme seu negócio com nossas soluções de SaaS e marketing digital de ponta.
        </p>
        <Button className="bg-gradient-to-r from-primary to-secondary text-background hover:from-primary hover:to-primary">
          Comece Agora
        </Button>
      </div>
    </section>
  )
}

