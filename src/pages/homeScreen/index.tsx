import ContentIniHome from "./contentIniHome";
import "./index.css";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [secondRender, setSecondRender] = useState(false);

  useEffect(() => {
    // Simular espera de 1s para mostrar o segundo
    setTimeout(() => {
      setSecondRender(true);
    }, 1000);
  }, []);
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center backgroundHome">
        <div className="top-0 left-0 absolute z-50 h-screen w-screen flex justify-center items-center backgroundPixelado"></div>
        {secondRender && <ContentIniHome />}
      </div>
    </>
  );
};
export default HomeScreen;
