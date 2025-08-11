import { Link } from "react-router-dom";
import LogoCQ from "./LogoCQ";
import "../index.css";
import "../pages/aboutScreen/index.css";

export default function Header() {
  return (
    <header
      className=" h-16  p-5 bg-primaryColor flex items-center justify-between
       headerAnimation glasseffect "
    >
      <Link to={"/"} className="flex items-center">
        <LogoCQ size={50} />
      </Link>
      <nav
        className="flex space-x-8 pl-[2%] 2xl:text-sm text-xs animationFadeIn
 animationsdelay1s opacity-0"
      >
        <Link to={"/"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Home
          </button>
        </Link>
        <Link to={"/about"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Sobre nós
          </button>
        </Link>
        <Link to={"/"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Plataforma
          </button>
        </Link>
        <Link to={"/"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Quem pode Jogar?
          </button>
        </Link>
        <Link to={"/"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Contato
          </button>
        </Link>
        <button className="text-white underlineAnimado cursor-pointer">
          Desenvolvedores
        </button>
      </nav>
      <div className="flex items-center pr-[2%]  ">
        <button
          className="animationFadeIn
 animationsdelay1s opacity-0 relative cursor-pointer 2xl:py-2 2xl:px-9 text-center font-barlow inline-flex justify-center 2xl:text-sm text-sm px-6 py-1.5 text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-[#2ea98c] focus:outline-offset-4 overflow-hidden hover:opacity-75"
        >
          <span className="relative z-20">Entrar</span>
          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>
      </div>
    </header>
  );
}
