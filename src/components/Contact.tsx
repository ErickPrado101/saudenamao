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
            <Input 
              type="text" 
              placeholder="Seu Nome" 
              className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Seu Email" 
              className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            />
          </div>
          <div>
            <Textarea 
              placeholder="Sua Mensagem" 
              className="w-full p-4 h-32 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:from-gray-600 hover:to-gray-400 rounded-none transition-all duration-300"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  )
}
