import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Entre em Contato</h2>
        <form className="space-y-6">
          <div>
            <Input type="text" placeholder="Seu Nome" className="w-full" />
          </div>
          <div>
            <Input type="email" placeholder="Seu Email" className="w-full" />
          </div>
          <div>
            <Textarea placeholder="Sua Mensagem" className="w-full h-32" />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:from-gray-600 hover:to-gray-400"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  )
}

