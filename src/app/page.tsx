import Header from "@/components/header";
import Slider from "@/components/slider";
import Image from "next/image";
import nossoTrabalho1 from "../../public/nossoTrabalho1.webp";
import nossoTrabalho2 from "../../public/nossoTrabalho2.webp";
import nossoTrabalho3 from "../../public/nossoTrabalho3.webp";

export default function Home() {
  return (
    <div className="bg-clr1 min-h-screen">
      <Header />
      <Slider />
      <div className="bg-clr3 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-16 text-center">Nosso trabalho</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-24 px-6">
          <div className="flex flex-col justify-center items-center gap-4 max-w-md">
            <Image
              src={nossoTrabalho1}
              alt="Construindo Redes"
              width={220}
              height={220}
              priority
              className="rounded-full object-cover shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">Construindo Redes</h2>
              <p className="leading-relaxed">
                Cada projeto realizado foi marcado pelo comprometimento,
                dedicação e paixão de nossa equipe, bem como pela generosidade e
                apoio de colaboradoras(es) e parceiras(os).
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center gap-4 max-w-md">
            <Image
              src={nossoTrabalho3}
              alt="Residências em obra"
              width={220}
              height={220}
              priority
              className="rounded-full object-cover shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">
                Residências em obra
              </h2>
              <p className="leading-relaxed">
                Ao adquirir uma obra de nosso Acervo, você contribui diretamente
                com nosso projeto de Residências Artísticas. O lucro é
                integralmente revertido para custear nosso principal projeto.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center gap-4 max-w-md">
            <Image
              src={nossoTrabalho2}
              alt="Inspiração que transforma"
              width={220}
              height={220}
              priority
              className="rounded-full object-cover shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">
                Inspiração que transforma
              </h2>
              <p className="leading-relaxed">
                Por meio de formações, mentorias e residências, inspiramos novos
                caminhos para que artistas possam expressar suas histórias e
                transformar suas comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
