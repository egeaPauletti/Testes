import LogoCQ from "./LogoCQ";

export default function Header() {
  return (
    <header className="w-[93%] h-16 pb-2 bg-primaryColor flex items-center justify-between  rounded-lg shadow-xl">
      <figure className="flex items-center space-x-3 ">
        <LogoCQ size={50} />

        <div className="text-white text-lg ibm uppercase">CodingQuest</div>
      </figure>
      <nav className="flex space-x-8 pl-[2%] 2xl:text-base text-sm">
        <a href="#home" className="text-white underlineAnimado">
          Home
        </a>
        <a href="#about" className="text-white underlineAnimado">
          Sobre nós
        </a>
        <a href="#contact" className="text-white underlineAnimado">
          Plataforma
        </a>
        <a href="#contact" className="text-white underlineAnimado">
          Quem pode Jogar?
        </a>
        <a href="#contact" className="text-white underlineAnimado">
          Desenvolvedores
        </a>
      </nav>
      <div className="flex items-center gap-5">
        <button className="relative cursor-pointer 2xl:py-2 2xl:px-9 text-center font-barlow inline-flex justify-center 2xl:text-base text-sm px-6 py-1.5 text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-[#2ea98c] focus:outline-offset-4 overflow-hidden hover:opacity-75">
          <span className="relative z-20">Entrar</span>
          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>

        <button className="relative cursor-pointer 2xl:py-2 2xl:px-9 text-center font-barlow inline-flex justify-center 2xl:text-base text-sm px-5 py-1.5 text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-[#2ea98c] focus:outline-offset-4 overflow-hidden bg-[#2ea98c]  hover:opacity-75">
          <span className="relative z-20">Registrar</span>
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
