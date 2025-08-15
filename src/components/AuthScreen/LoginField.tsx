export default function LoginField() {
  return (
    <div className="absolute w-6/10 h-full left-[40%] flex flex-col gap-10 justify-center items-center animationFadeIn whiteColor">
      <div className="flex flex-col items-center justify-center gap-5">
        <span>Bem vindo de Volta!!</span>
        <span>acesse sua conta</span>
      </div>
      <div></div>
      <div></div>
      <span>acesse via</span>
      <div></div>
      <button className="relative cursor-pointer 2xl:py-[2%] 2xl:px-[30%] text-center font-barlow inline-flex justify-center 2xl:text-base text-sm px-6 py-1.5 text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-[#2ea98c] focus:outline-offset-4 overflow-hidden hover:opacity-75 bg-[#2ea98c]">
        <span className="relative z-20">Entrar</span>
        <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
      </button>
    </div>
  );
}
