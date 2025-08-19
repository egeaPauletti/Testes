import "./index.css";
import "./animations/animations.css";
//
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//
import PreLoader from "./pages/preLoader";

import AboutScreen from "./pages/aboutScreen";
import AuthScreen from "./pages/authScreen";
import InitialScreen from "./pages/initialScreen";
import HomeScreen from "./pages/homeScreen";
import ChoseWorld from "./pages/choseWorldScreem";
import WorldScreen from "./pages/WorldScreen";

function renderLoader() {
  return <PreLoader />;
}

function renderApp() {
  return (
    <Routes>
      <Route path="/" element={<InitialScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/login" element={<AuthScreen />} />
      <Route path="/register" element={<AuthScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/campaign" element={<ChoseWorld />} />
      <Route path="/worlds/*" element={<WorldScreen />} />
    </Routes>
  );
}

function App() {
  const [preLoaderAtivo, setPreLoaderAtivo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoaderAtivo(false);
    }, 40);

    return () => clearTimeout(timer);
  }, []);
  return <div>{preLoaderAtivo ? renderLoader() : renderApp()} </div>;
}

export default App;
