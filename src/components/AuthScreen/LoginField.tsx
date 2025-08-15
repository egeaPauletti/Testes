import { useState } from "react";
import GitHubIcon from "../icons/iconsAuth/GithubIcon";
import GoogleIcon from "../icons/iconsAuth/GoogleIcon";

export default function LoginField() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div className="absolute w-6/10 h-full left-[40%] flex flex-col gap-15 justify-center items-center animationFadeInAuth whiteColor">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="ibm font-semibold text-3xl">Bem vindo de Volta!!</span>
        <span className="text-sm opacity-50 font-semibold ibm">
          acesse sua conta
        </span>
      </div>
      <div>
        <form className="flex flex-col justify-center items-center gap-7.5">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="2xl:w-150 2xl:h-13 w-80 h-10 flex items-center px-4 rounded-xl border border-stone-400 text-sm outline-[#2ea98c] bg-[#7070709e]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="2xl:w-150 2xl:h-13 w-80 h-10 flex items-center px-4 rounded-xl border border-stone-400 text-sm outline-[#2ea98c] bg-[#7070709e]"
            />
          </div>
          <div className="mt-5"></div>
        </form>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex items-center gap-5">
            <hr className="w-65 h-0.5 primaryColor bgPrimaryColor" />
            <span className="primaryColor font-bold text-lg">ou</span>
            <hr className="w-65 h-0.5 primaryColor bgPrimaryColor" />
          </div>
          <span className="text-sm opacity-50 font-semibold">acesse via</span>
          <div className="flex gap-10 items-center justify-center">
            <button className="bg-[#2ea98ca9] rounded-lg p-2.5 hover:opacity-70 cursor-pointer">
              <GoogleIcon size={20} />
            </button>
            <button className="bg-[#2ea98ca9] rounded-lg p-2.5 hover:opacity-70 cursor-pointer">
              <GitHubIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      <button className="relative cursor-pointer 2xl:py-[1.5%] 2xl:px-70 text-center font-barlow inline-flex justify-center 2xl:text-base text-sm px-6 py-1.5 text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-[#2ea98c] focus:outline-offset-4 overflow-hidden hover:opacity-75 bg-[#2ea98c]">
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
