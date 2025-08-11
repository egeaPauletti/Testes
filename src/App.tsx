import "./index.css";
import "./animations/animations.css";
//
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//
import PreLoader from "./pages/preLoader";
import HomeScreen from "./pages/homeScreen";
import AboutScreen from "./pages/aboutScreen";

function renderLoader() {
  return <PreLoader />;
}

function renderApp() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
    </Routes>
  );
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
