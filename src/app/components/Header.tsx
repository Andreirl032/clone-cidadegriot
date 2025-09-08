import Image from "next/image";
import Link from "next/link";

import logoCidadeGriot from "../../../public/logo-cidade-griot.webp";

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 h-19 w-full bg-(--color-griot) justify-between flex items-center px-30 z-30">
      <div className="flex items-center gap-8">
        <Link href={"https://cidadegriot.com.br/"}>
          <Image
            // height={42}
            // width={60}
            alt="logo-cidade-griot"
            src={logoCidadeGriot}
            // fill
            className="w-full h-auto max-w-3xs max-h-11 object-contain"
          ></Image>
        </Link>
        <Link
          href={"https://cidadegriot.com.br/"}
          className="font-bold text-xl"
        >
          CIDADE GRIOT
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <Link href={"#inicio"}>Início</Link>
        <Link href={"#sobre-nos"}>Sobre nós</Link>
        <Link href={"#depoimentos"}>Depoimentos</Link>
        <Link href={"#fale-conosco"}>Fale conosco</Link>
      </div>
    </header>
  );
};

export default Header;
