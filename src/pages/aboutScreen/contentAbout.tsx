import Header from "../../components/Header";
import LogoCQ from "../../components/LogoCQ";

export default function ContentAbout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="absolute top-[2%] left-0 z-100 w-full justify-center items-center flex ">
        <Header />
      </div>
      <div className="absolute flex items-center justify-center">
        <div className="w-1/2">
          <div className="flex flex-col 2xl:gap-15 gap-5">
            <div className="flex flex-col items-start justify-center w-[60%] border-r-3 py-7 pr-10 border-[#2ea98c] slideToRight">
              <h1 className="primaryColor font-bold text-lg 2xl:text-xl mb-5">
                O que é a <br />
                CondingQuest?
              </h1>
              <p className="text-white 2xl:text-sm text-xs">
                Bem-vindo ao CodingQuest, a plataforma online que transforma o
                aprendizado de lógica de programação em uma aventura envolvente
                e divertida! Se você está começando sua jornada no mundo da
                programação ou quer aprimorar suas habilidades, o CodingQuest
                foi projetado para tornar esse processo intuitivo, desafiador e
                recompensador.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center w-[60%]  2xl:w-[50%] relative -right-[30%] slideToLeft">
              <h1 className="primaryColor font-bold 2xl:text-lg">
                Uma Jornada Gamificada
              </h1>
              <p className="text-white 2xl:text-sm text-xs">
                No CodingQuest, a programação vai além de códigos e algoritmos:
                é uma experiência gamificada! Você avança por níveis,
                desbloqueia conquistas e enfrenta desafios que evoluem conforme
                sua habilidade. Cada problema resolvido é um passo adiante em
                sua jornada, trazendo a satisfação de ver seu progresso em tempo
                real.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:flex animationFadeIn2">
          <LogoCQ size={412} />
        </div>
        <div className="flex 2xl:hidden animationFadeIn2">
          <LogoCQ size={312} />
        </div>
      </div>
      <span className="primaryColor font-bold 2xl:text-base text-sm -rotate-90 absolute right-0 bottom-[10%] slideToTop">
        CodingQuest
      </span>
      <div className="absolute flex w-screen h-screen gap-10 justify-start items-end bottom-[5%] left-[5%] slideToBottom">
        <div className="bgPrimaryColor w-[5%] h-[0.5%]"></div>
        <div className="bgPrimaryColor w-[5%] h-[0.5%]"></div>
      </div>
    </div>
  );
}
