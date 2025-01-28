import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#006A3A] to-[#000F24] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/circuit.svg')] bg-center"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3E8400]">
          Conecte-se ao futuro da saúde
        </h2>
        <a
          href="https://wa.me/556181926283"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#3E8400] to-[#006A3A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#006A3A] hover:to-[#3E8400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-12"
        >
          Inicie uma Conversa conodco no WhatsApp
        </a>
        <div className="flex justify-center space-x-6">
          {[Facebook, Instagram, Mail, Linkedin].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-white hover:text-[#3E8400] transition-all duration-300 transform hover:scale-110"
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

