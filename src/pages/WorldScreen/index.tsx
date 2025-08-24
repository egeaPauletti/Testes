import CodeEditor from "../../components/IDE/CodeEdit";
import Sidebar from "../../components/sideBar/SideBar";

const WorldScreen: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      <div className="w-full h-full backgroundPixelado flex justify-center items-center absolute top-0 left-0 z-50"></div>
      <Sidebar />

      <CodeEditor />
    </div>
  );
};
export default WorldScreen;
