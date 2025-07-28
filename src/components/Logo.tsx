import logoImg from "../assets/logoCQBranca.png";

interface logoProps {
  size: number;
  bg: boolean;
  animation: boolean;
}

const LogoIcon: React.FC<logoProps> = ({ size, bg, animation }) => {
  return (
    <>
      <div className={animation ? "animationFadeIn" : ""}>
        <figure
          className="flex items-center justify-center 2xl:h-40 2xl:w-40 logoBackground"
          style={{
            width: size * 0.6 + size,
            height: size * 0.6 + size,
            background: bg ? "#2ea98c" : "transparent",
          }}
        >
          <img
            src={logoImg}
            style={{ width: size, height: size * 0.1 + size }}
            alt=""
          />
        </figure>
      </div>
    </>
  );
};
export default LogoIcon;
