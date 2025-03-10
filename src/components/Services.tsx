import { Server, Megaphone, BarChart, Wrench } from "lucide-react"

const services = [
  {
    icon: <Server className="w-12 h-12 text-green-600" />,
    title: "Sistema de Gestão Completo",
    description:
      "Um sistema intuitivo que facilita o agendamento de consultas, o controle de prontuários e a gestão com os pacientes.",
  },
  {
    icon: <Megaphone className="w-12 h-12 text-green-600" />,
    title: "Social Media Personalizado",
    description:
      "Criamos postagens e conteúdos relevantes para atrair e fidelizar seus pacientes nas redes sociais, garantindo uma comunicação clara e eficiente.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-green-600" />,
    title: "Tráfego Pago e Otimização de Google Ads",
    description:
      "Implementamos campanhas estratégicas de tráfego pago e otimização no Google Ads para aumentar sua visibilidade e atrair novos pacientes.",
  },
  {
    icon: <Wrench className="w-12 h-12 text-green-600" />,
    title: "Consultoria e Suporte Personalizado",
    description:
      "Oferecemos consultoria contínua para otimizar suas campanhas e suporte completo para maximizar o desempenho da sua clínica.",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white relative">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Na Saúde na Mão, entendemos as necessidades dos médicos, clínicas e consultórios. Nosso trabalho é transformar a presença online do seu negócio para atrair mais pacientes e melhorar a gestão do seu atendimento.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
