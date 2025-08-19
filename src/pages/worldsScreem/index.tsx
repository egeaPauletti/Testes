import { Link } from "react-router-dom";
import Sidebar from "../../components/SideBar";
import type { WorldsData } from "../../interfaces/interfaces";
import "./index.css";
import Button from "../../components/Button";

const WorldsScreen: React.FC = () => {
  const WorldsDataSection1: WorldsData[] = [
    { id: "1", worldName: "O começo" },
    { id: "2", worldName: "Uma condição" },
    { id: "3", worldName: "Rep,Rep,Rep" },
    { id: "4", worldName: "Desenhando" },
    { id: "5", worldName: "Não sei" },
  ];
  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      <div className="w-full h-full backgroundPixelado flex justify-center items-center absolute top-0 left-0 z-50"></div>
      <Sidebar />
      <div className="w-[1.5%] h-full bg-[#1a1a1a80] flex justify-center items-center left-0 top-0 absolute z-50"></div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-10 z-90">
        <div className="whiteColor bgThirdColor w-[25%] h-[5%] flex items-center justify-center text-xs 2xl:text-base font-semibold rounded-lg 2xl:rounded-xl">
          Escolha um mundo
        </div>

        <div className="flex w-[60%] h-[50%] 2xl:w-[60%] 2xl:h-[60%] gap-1">
          {WorldsDataSection1.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center backgroundWorlds${item.id} animationDelayWorlds${item.id} w-1/4 h-full  sliderWorlds opacity-0 hover:px-[10%]`}
            >
              <div
                className="flex w-full h-full  bg-black opacity-65
                absolute"
              ></div>
              <div className="flex flex-col gap-5 h-[70%] items-center z-100">
                <span className="primaryColor text-sm 2xl:text-base font-bold w-max">
                  Mundo {item.id}
                </span>
                <span className="whiteColor ibm text-xs 2xl:text-base w-max">
                  {item.worldName}
                </span>
              </div>
              <Link to={`/worlds/${item.id}`}>
                <Button label="Acessar" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldsScreen;
