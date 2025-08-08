import "./index.css";
import "./animations/animations.css";
//
import PreLoader from "./pages/preLoader";
//
import { useState, useEffect } from "react";
import HomeScreen from "./pages/homeScreen";

function renderLoader() {
  return <PreLoader />;
}

function renderApp() {
  return <HomeScreen />;
}

function App() {
  const [preLoaderAtivo, setPreLoaderAtivo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoaderAtivo(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return <div>{preLoaderAtivo ? renderLoader() : renderApp()} </div>;
}

export default App;
