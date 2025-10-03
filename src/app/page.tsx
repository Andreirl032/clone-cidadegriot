// import Image from "next/image";

import Image from "next/image";
import Header from "./components/Header";

import backgroundCidadeGriot from "../../public/background-cidade-griot.webp";

import sobreNos1 from "../../public/sobre-nos1.webp";
import sobreNos2 from "../../public/sobre-nos2.webp";
import sobreNos3 from "../../public/sobre-nos3.webp";
import Footer from "./components/Footer";

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

      <section
        id="depoimentos"
        className="flex justify-center h-[24rem] bg-white"
      >
        <div className="flex flex-col items-center gap-10 w-2/3">
          <h1 className="text-5xl font-bold">Depoimentos</h1>
          <div className="flex flex-row gap-8">
            <div className="bg-[#F7F7F8] p-6 gap-4 flex-col flex flex-1">
              <h2 className="font-bold">“Foi ótima!”</h2>
              <h3>
                “Adorei o passeio, as conversas, as informações e as indicações.
                Desde o atendimento, até a experiência do roteiro, tudo ótimo”
              </h3>
            </div>
            <div className="bg-[#F7F7F8] p-6 gap-4 flex-col flex flex-1">
              <h2 className="font-bold">“Trabalho diferenciado! Parabéns”</h2>
              <h3>
                “Quero agradecer por vocês me fazer conhecer a cidade que
                escolhi morar, e onde me sinto em casa.”
              </h3>
            </div>
            <div className="bg-[#F7F7F8] p-6 gap-4 flex-col flex flex-1">
              <h2 className="font-bold">“Experiência Incrível”</h2>
              <h3>
                “Foi uma experiência incrível, única e maravilhosa. Tô em
                êxtase. Parabéns a todos vocês por esse roteiro! Vida longa ao
                Caminho da Madre Deus.”
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section
        id="fale-conosco"
        className="flex justify-center h-[34rem] bg-white"
      >
        <div className="flex flex-col items-center gap-10 w-[45%]">
          <h1 className="text-5xl font-bold">Fale Conosco</h1>
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <h2>
                Nome <span className="text-red-500">*</span>
              </h2>
              <input className="border-1 border-black p-2 w-full"></input>
            </div>
            <div>
              <h2>
                E-mail <span className="text-red-500">*</span>
              </h2>
              <input className="border-1 border-black p-2 w-full"></input>
            </div>
            <div>
              <h2>
                Mensagem <span className="text-red-500">*</span>
              </h2>
              <textarea className="border-1 border-black p-2 w-full h-32"></textarea>
            </div>
          </div>
          <button className="bg-(--color-griot) rounded-md py-3 px-6 font-bold text-xl w-min">
            Enviar
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
