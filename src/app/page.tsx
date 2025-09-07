// import Image from "next/image";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <section id="inicio"></section>
      <section id="sobre-nos"></section>
      <section id="depoimentos"></section>
      <section id="fale-conosco"></section>
    </div>
  );
}
