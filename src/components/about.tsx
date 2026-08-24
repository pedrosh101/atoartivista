import React from "react";
import { AboutCard } from "./aboutCard";
import { Hexagon, Boxes, Orbit, Network } from "lucide-react";

function About() {
  return (
    <section id="sobre" className="px-12 lg:px-20 py-40 bg-clr4">
      <div className="max-w-[1800px] mx-auto">
        <span className="uppercase tracking-[0.3em] text-xs text-clr2">
          SOBRE
        </span>

        <div className="grid lg:grid-cols-2 gap-24 mt-8">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] text-clr2">
              A arte só gera transformação quando encontra pessoas.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-clr2/80">
              A ATO conecta artistas independentes, projetos sociais, educação e
              comunidade para que a produção artística gere impacto real. Mais
              do que uma galeria, somos uma rede que transforma criatividade em
              oportunidade.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-28">
          <AboutCard
            icon={<Hexagon size={72} strokeWidth={1.2} />}
            title="Arte Autoral"
            text="Produção contemporânea, artistas independentes e novas formas de expressão."
          />

          <AboutCard
            icon={<Boxes size={72} strokeWidth={1.2} />}
            title="Projetos Sociais"
            text="Educação, cultura e desenvolvimento comunitário financiados através da arte."
          />

          <AboutCard
            icon={<Orbit size={72} strokeWidth={1.2} />}
            title="Comunidade Criativa"
            text="Conectamos artistas, parceiros, instituições e pessoas que querem transformar territórios."
          />

          <AboutCard
            icon={<Network size={72} strokeWidth={1.2} />}
            title="Impacto Transparente"
            text="Relatórios públicos, acompanhamento dos projetos e prestação de contas."
          />
        </div>
      </div>
    </section>
  );
}

export default About;
