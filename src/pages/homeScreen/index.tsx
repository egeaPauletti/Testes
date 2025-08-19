import Sidebar from "../../components/SideBar";
import "./index.css";

export default function HomeScreen() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      <div className="w-full h-full backgroundPixelado flex justify-center items-center absolute top-0 left-0 z-50"></div>
      <Sidebar />
      <div className="w-[1.5%] h-full bg-[#1a1a1a80] flex justify-center items-center left-0 top-0 absolute z-50"></div>
    </div>
  );
}
