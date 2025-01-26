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
      <Button
        className="bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-gray-600 hover:to-gray-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Comece Agora
      </Button>


    </section>
  )
}

