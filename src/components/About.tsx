import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
    "Tecnologia de ponta em saúde digital",
    "Equipe de especialistas em SaaS e marketing",
    "Soluções personalizadas para cada cliente",
    "Compromisso com inovação contínua",
]

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#000F24] to-[#001F3F] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('/dna.svg')] bg-repeat z-0"></div>
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3E8400] to-[#006A3A]">
                            Revolucionando a Saúde Digital
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Saúde na mão é a solução completa para médicos, clínicas e consultórios que buscam transformar sua presença online e otimizar seus processos. Com uma plataforma SaaS inovadora, oferecemos ferramentas que vão desde um sistema de gestão eficiente até estratégias personalizadas de social media e tráfego pago. Nosso objetivo é simplificar a forma como você se conecta com seus pacientes, ajuda na gestão do seu negócio e maximiza a visibilidade na internet. Somos parceiros do seu sucesso, cuidando da parte digital para que você possa focar no que realmente importa: o cuidado com seus pacientes.
                        </p>
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="text-[#3E8400] w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-200">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/health-tech.jpg"
                            alt="Tecnologia em Saúde"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000F24] via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

