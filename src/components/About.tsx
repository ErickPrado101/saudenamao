export default function About() {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre Nós</h2>
          <p className="text-xl text-gray-600 mb-8">
            Somos uma agência de SaaS e marketing digital dedicada a impulsionar o crescimento de negócios através de
            tecnologia de ponta e estratégias inovadoras.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">Visão</h3>
              <p className="text-gray-600">Liderar a transformação digital global.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">Missão</h3>
              <p className="text-gray-600">Capacitar empresas com soluções digitais inovadoras.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">Valores</h3>
              <p className="text-gray-600">Inovação, Integridade, Excelência.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  