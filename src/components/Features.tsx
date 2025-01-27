import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Zap, Rocket, BarChart } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Soluções Rápidas",
    description: "Implemente estratégias ágeis e eficientes para seu negócio.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Inovação Constante",
    description: "Mantenha-se à frente com nossas ferramentas de última geração.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Análise Avançada",
    description: "Tome decisões baseadas em dados com nossos insights profundos.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Nossos Recursos</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-primary/5"
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-4 text-2xl font-semibold text-foreground">
                  <div className="p-3 rounded-full bg-primary/10">{feature.icon}</div>
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

