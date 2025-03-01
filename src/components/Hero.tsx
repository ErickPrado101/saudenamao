import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000F24] to-[#006A3A] z-0"></div>
      <div className="absolute inset-0 opacity-30 bg-[url('/grid.svg')] bg-center z-10"></div>
      <div className="container mx-auto text-center relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3E8400]">
          Revolucione sua presença digital na saúde
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
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
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#000F24] to-transparent z-30"></div>
    </section>
  )
}

export default Hero

