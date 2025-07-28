import { useEffect, useState } from "react";
//
import TypingText from "../../animations/TypingText";
import LogoIcon from "../../components/Logo";
//
import "./index.css";

const PreLoader = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); //ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <figure className="h-screen w-screen flex items-center justify-center gap-5 bg-[#161616]">
      <div className="flex items-center justify-center h-60 w-60 logoBackground bgPrimaryColor animationFadeIn">
        <LogoIcon size={150} bg={false} animation={true} />
      </div>
      <span>{showText && <TypingText text="CodingQuest" />}</span>
    </figure>
  );
};

export default PreLoader;
