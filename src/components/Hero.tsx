import Link from "next/link"

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
          Revolucione sua presença digital na saúde
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Soluções inovadoras de SaaS e marketing digital para catapultar seu negócio no setor de saúde para o futuro.
        </p>
        <div className="flex flex-col gap-6 items-center">
          <Link
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#3E8400] to-[#006A3A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#006A3A] hover:to-[#3E8400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Inicie sua jornada futurista
          </Link>
          <Link
            href="https://saashealer.vercel.app"
            className="inline-block bg-gradient-to-r from-[#3E8400] to-[#006A3A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#006A3A] hover:to-[#3E8400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Testar demo
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
