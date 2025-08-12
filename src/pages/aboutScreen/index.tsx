import ContentAbout from "./contentAbout";
import "./index.css";
import { useState, useEffect } from "react";

const AboutScreen = () => {
  const [secondRender, setSecondRender] = useState(false);

  useEffect(() => {
    // Simular espera de 1s para mostrar o segundo
    setTimeout(() => {
      setSecondRender(true);
    }, 0);
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#222222]  backgroundAbout">
      <div className="top-0 left-0 absolute z-50 h-screen w-screen flex justify-center items-center backgroundPixelado"></div>
      {secondRender && <ContentAbout />}
    </div>
  );
};
export default AboutScreen;
