import React, { useRef } from "react";
//
import type { FloatingSquareProps, SquareData } from "../interfaces/interfaces";
//
import JavaIcon from "./icons/iconsLanguages/JavaIcon";
import PythonIcon from "./icons/iconsLanguages/PythonIcon";
import CIcon from "./icons/iconsLanguages/CIcon";
import RubyIcon from "./icons/iconsLanguages/RubyIcon";
import JSIcon from "./icons/iconsLanguages/JSIcon";
import GOIcon from "./icons/iconsLanguages/GOIcon";
import LuaIcon from "./icons/iconsLanguages/LuaIcon copy";
import DartIcon from "./icons/iconsLanguages/DartIcon";
import KotlinIcon from "./icons/iconsLanguages/KotlinIcon";

const squarePositions: SquareData[] = [
  { x: 900, y: 200, width: 90, height: 90, icon: <JavaIcon size={50} /> },
  { x: 1200, y: 600, width: 90, height: 90, icon: <RubyIcon size={50} /> },
  { x: 1600, y: 300, width: 90, height: 90, icon: <PythonIcon size={50} /> },
  { x: 200, y: 300, width: 90, height: 90, icon: <JSIcon size={50} /> },
  { x: 500, y: 300, width: 70, height: 70, className: "squareOp50" },
  { x: 350, y: 830, width: 90, height: 90, icon: <DartIcon size={50} /> },
  { x: 1400, y: 500, width: 60, height: 60, icon: <KotlinIcon size={30} /> },
  { x: 600, y: 500, width: 60, height: 60, icon: <GOIcon size={30} /> },
  { x: 1350, y: 100, width: 60, height: 60, icon: <CIcon size={30} /> },
  { x: 1150, y: 400, width: 70, height: 70, className: "squareOp50" },
  {
    x: 1750,
    y: 700,
    width: 70,
    height: 70,
    className: "squareOp50",
    icon: <LuaIcon size={30} />,
  },
  { x: 750, y: 750, width: 70, height: 70, className: "squareOp50" },
  {
    x: 650,
    y: 50,
    width: 50,
    height: 50,
    className: "squareOp50",
  },
  { x: 1790, y: 70, width: 70, height: 70, className: "squareOp50" },
  { x: 1250, y: 250, width: 50, height: 50, className: "squareBorder" },
  { x: 950, y: 550, width: 70, height: 70, className: "squareBorder" },
  { x: 1450, y: 880, width: 70, height: 70, className: "squareBorder" },
  { x: 1850, y: 500, width: 70, height: 70, className: "squareBorder" },
  { x: 150, y: 100, width: 70, height: 70, className: "squareBorder" },
  { x: 250, y: 650, width: 70, height: 70, className: "squareBorder" },
];
const squarePositionsLogin: SquareData[] = [
  { x: 50, y: 200, width: 70, height: 70, icon: <JavaIcon size={40} /> },
  { x: 430, y: 700, width: 70, height: 70, icon: <RubyIcon size={40} /> },
  { x: 550, y: 400, width: 70, height: 70, icon: <PythonIcon size={40} /> },
  { x: 560, y: 200, width: 70, height: 70, icon: <JSIcon size={40} /> },
  { x: 500, y: 300, width: 50, height: 50, className: "squareOp50" },
  { x: 30, y: 830, width: 70, height: 70, icon: <DartIcon size={40} /> },
  { x: 100, y: 500, width: 40, height: 40, icon: <KotlinIcon size={20} /> },
  { x: 10, y: 50, width: 40, height: 40, icon: <GOIcon size={20} /> },
  { x: 350, y: 100, width: 40, height: 40, icon: <CIcon size={20} /> },
  { x: 150, y: 400, width: 50, height: 50, className: "squareOp50" },
  {
    x: 600,
    y: 800,
    width: 50,
    height: 50,
    className: "squareOp50",
    icon: <LuaIcon size={20} />,
  },
  { x: 620, y: 750, width: 50, height: 50, className: "squareOp50" },
  {
    x: 550,
    y: 50,
    width: 50,
    height: 50,
    className: "squareOp50",
  },
  { x: 40, y: 700, width: 50, height: 50, className: "squareOp50" },
  { x: 250, y: 250, width: 30, height: 30, className: "squareBorder" },
  { x: 250, y: 750, width: 50, height: 50, className: "squareBorder" },
  { x: 450, y: 880, width: 50, height: 50, className: "squareBorder" },
  { x: 450, y: 500, width: 50, height: 50, className: "squareBorder" },
  { x: 150, y: 100, width: 50, height: 50, className: "squareBorder" },
  { x: 250, y: 650, width: 50, height: 50, className: "squareBorder" },
];

export const FloatingSquares: React.FC<FloatingSquareProps> = ({
  isLogin = false,
}) => {
  const squaresRef = useRef<HTMLDivElement[]>([]);

  return (
    <div>
      <div className={`${isLogin ? "hidden" : "flex"}`}>
        <div className="hidden 2xl:flex container">
          {squarePositions.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x,
                top: pos.y,
                width: pos.width,
                height: pos.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
        <div className="flex 2xl:hidden container">
          {squarePositions.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x * 0.65,
                top: pos.y * 0.7,
                width: pos.width * 0.65,
                height: pos.height * 0.65,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
      </div>
      <div className={`${isLogin ? "flex" : "hidden"}`}>
        <div className="hidden 2xl:flex container">
          {squarePositionsLogin.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x,
                top: pos.y,
                width: pos.width,
                height: pos.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
        <div className="flex 2xl:hidden container">
          {squarePositionsLogin.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x * 0.75,
                top: pos.y * 0.85,
                width: pos.width * 0.75,
                height: pos.height * 0.75,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
