import { Instagram, Mail } from "lucide-react";

const socialLinks = [
  { Icon: Instagram, url: "https://www.instagram.com/saasaudenamao/" },
  { Icon: Mail, url: "mailto:atendimento.saudenamao@gmail.com" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white relative">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Conecte-se ao futuro da saúde
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Estamos prontos para ajudar sua jornada no setor de saúde. Fale conosco pelo WhatsApp ou redes sociais.
        </p>

        <a
          href="https://wa.me/556181926283"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#3E8400] to-[#006A3A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#006A3A] hover:to-[#3E8400] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Inicie uma conversa no WhatsApp
        </a>

        <div className="flex justify-center space-x-6 mt-8">
          {socialLinks.map(({ Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110"
              aria-label={url.includes("instagram") ? "Instagram" : "E-mail"}
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
