import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center">
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-400">
        Inovação Digital para o Futuro
      </h1>
      <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
        Transforme seu negócio com nossas soluções de SaaS e marketing digital de ponta.
      </p>
      <Button className="bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:from-gray-600 hover:to-gray-400">
        Comece Agora
      </Button>
    </section>
  )
}

