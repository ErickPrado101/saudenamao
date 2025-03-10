import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Tecnologia de ponta em saúde digital",
  "Equipe de especialistas em software e marketing",
  "Soluções personalizadas para cada cliente",
  "Compromisso com inovação contínua",
]

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Revolucionando a Saúde Digital
            </h2>
            <p className="text-gray-600 text-lg">
              Saúde na Mão é a solução completa para médicos, clínicas e consultórios que buscam transformar sua presença online e otimizar seus processos. Com uma plataforma SaaS inovadora, oferecemos ferramentas que vão desde um sistema de gestão eficiente até estratégias personalizadas de social media e tráfego pago. Nosso objetivo é simplificar a forma como você se conecta com seus pacientes, ajudando na gestão do seu negócio e maximizando a visibilidade na internet.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/health-tech.jpg"
              alt="Tecnologia em Saúde"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
