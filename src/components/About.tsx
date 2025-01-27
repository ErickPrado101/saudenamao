export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-background to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-foreground">Sobre Nós</h2>
        <p className="text-xl mb-12 text-muted-foreground">
          Somos uma agência de SaaS e marketing digital dedicada a impulsionar o crescimento de negócios através de
          tecnologia de ponta e estratégias inovadoras.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Visão</h3>
            <p className="text-foreground">Liderar a transformação digital global.</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Missão</h3>
            <p className="text-foreground">Capacitar empresas com soluções digitais inovadoras.</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Valores</h3>
            <p className="text-foreground">Inovação, Integridade, Excelência.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

