// import Image from "next/image";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

import backgroundCidadeGriot from "../../public/background-cidade-griot.webp";

import sobreNos1 from "../../public/sobre-nos1.webp";
import sobreNos2 from "../../public/sobre-nos2.webp";
import sobreNos3 from "../../public/sobre-nos3.webp";

export default function Home() {
  return (
    <div>
      <Header />
      <section
        id="inicio"
        className="flex h-[30rem] bg-gray-500/60 justify-center items-center"
      >
        <Image
          alt="background"
          src={backgroundCidadeGriot}
          className="absolute -top-10 object-contain z-[-2]"
        ></Image>
        <div className="flex flex-col items-center gap-9">
          <h1 className="text-white text-6xl">
            {'"O caminho se faz caminhando"'}
          </h1>
          <h2 className="text-white text-2xl w-1/2 text-center">
            Cidade Griot – A primeira agência de afroturismo do Maranhão.
          </h2>
          <button className="bg-(--color-griot) text-white rounded-[2.5rem] py-5 px-10">
            Conheça nossos roteiros!
          </button>
        </div>
      </section>
      <section id="sobre-nos" className="flex h-[60rem] bg-white">
        <div className="flex flex-col items-center gap-8 py-8">
          <div className="w-[44%] h-64 flex flex-row">
            <div className="relative h-full w-1/2">
              <Image
                src={sobreNos1}
                alt="sobre-nos1"
                fill
                className="object-cover"
                style={{ overflowClipMargin: "unset" }}
              />
            </div>
            <div className="bg-(--color-griot) h-64 w-1/2 p-6 text-lg flex items-center">
              <h3>
                Somos a primeira agência de afroturismo do Maranhão, trabalhamos
                com experiências receptivas na capital São Luís com roteiros no
                Centro Histórico, no bairro da Madre Deus e no quilombo urbano
                Liberdade.
              </h3>
            </div>
          </div>

          <div className="w-[44%] h-64 flex flex-row">
            <div className="bg-[#8C6239] h-64 w-1/2 p-6 text-lg flex items-center">
              <h3 className="text-white">
                Oferecemos experiências em Alcântara a cidade monumento, em
                Raposa e na praia de Santa Maria do Icatu.
              </h3>
            </div>
            <div className="relative h-full w-1/2">
              <Image
                src={sobreNos2}
                alt="sobre-nos2"
                fill
                className="object-cover"
                style={{ overflowClipMargin: "unset" }}
              />
            </div>
          </div>

          <div className="w-[44%] h-64 flex flex-row">
            <div className="relative h-full w-1/2">
              <Image
                src={sobreNos3}
                alt="sobre-nos3"
                fill
                className="object-cover"
                style={{ overflowClipMargin: "unset" }}
              />
            </div>
            <div className="bg-(--color-griot) h-64 w-1/2 p-6 text-lg flex items-center">
              <h3>
                Com base nessas experiências, valorizamos as histórias de nossa
                gente, apresentando uma perspectiva única que só pode ser vista
                e vivida aqui!
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id="depoimentos"></section>
      <section id="fale-conosco"></section>
    </div>
  );
}
