import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Zap, Rocket, BarChart } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6 text-gray-500" />,
    title: "Soluções Rápidas",
    description: "Implemente estratégias ágeis e eficientes para seu negócio.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-gray-500" />,
    title: "Inovação Constante",
    description: "Mantenha-se à frente com nossas ferramentas de última geração.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-gray-500" />,
    title: "Análise Avançada",
    description: "Tome decisões baseadas em dados com nossos insights profundos.",
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossos Recursos</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {feature.icon}
                <span>{feature.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

