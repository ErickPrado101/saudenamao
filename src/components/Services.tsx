import { Server, Megaphone, BarChart, Wrench } from "lucide-react"

const services = [
  {
    icon: <Server className="w-12 h-12 text-[#3E8400]" />,
    title: "Sistema de Gestão Completo",
    description:
      "Um sistema intuitivo que facilita o agendamento de consultas, o controle de prontuários, a gestão financeira e o relacionamento com os pacientes.",
  },
  {
    icon: <Megaphone className="w-12 h-12 text-[#3E8400]" />,
    title: "Social Media Personalizado",
    description:
      "Criamos postagens e conteúdos relevantes para atrair e fidelizar seus pacientes nas redes sociais. Garantimos que sua comunicação seja clara, eficiente e alinhada com os interesses do seu público-alvo.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-[#3E8400]" />,
    title: "Tráfego Pago e Otimização de Google Ads",
    description:
      "Implementamos campanhas de tráfego pago e otimização no Google Ads para aumentar sua visibilidade e atrair novos pacientes de maneira estratégica. Nossos especialistas ajustam cada campanha para maximizar os resultados.",
  },
  {
    icon: <Wrench className="w-12 h-12 text-[#3E8400]" />,
    title: "Consultoria e Suporte Personalizado",
    description:
      "Oferecemos consultoria contínua para analisar e otimizar suas campanhas, além de suporte completo para o uso da plataforma, garantindo o máximo desempenho para sua clínica.",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-[#000F24] to-[#001F3F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/circuit-board.svg')] bg-repeat z-0"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#3E8400] to-[#006A3A]">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
          Na Saúde na Mão, entendemos as necessidades dos médicos, clínicas e consultórios. Nosso trabalho é transformar
          a presença online do seu negócio para atrair mais pacientes e melhorar a gestão do seu atendimento.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-br from-[#001F3F] to-[#003366] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group backdrop-blur-md bg-opacity-80"
            >
              <div className="mb-6 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6 bg-[#000F24] p-4 rounded-full inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#3E8400] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

