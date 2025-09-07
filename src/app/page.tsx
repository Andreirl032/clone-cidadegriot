// import Image from "next/image";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

import backgroundCidadeGriot from "../../public/background-cidade-griot.webp";

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
          <button className="bg-[#FED116] text-white rounded-[2.5rem] py-5 px-10">
            Conheça nossos roteiros!
          </button>
        </div>
      </section>
      <section id="sobre-nos" className="flex h-[30rem] bg-white"></section>
      <section id="depoimentos"></section>
      <section id="fale-conosco"></section>
    </div>
  );
}
