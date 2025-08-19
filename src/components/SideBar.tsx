import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { TbHomeFilled, TbMapRoute } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import LogoCQ from "./LogoCQ";
import type { NavItem } from "../interfaces/interfaces";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path?: string) => location.pathname === path;

  const section1: NavItem[] = [
    { icon: <LogoCQ size={50} />, label: "CodingQuest", to: "/home" },
  ];
  const section1small: NavItem[] = [
    { icon: <LogoCQ size={40} />, label: "CodingQuest", to: "/home" },
  ];

  const section2: NavItem[] = [
    { icon: <TbHomeFilled />, label: "Tela inicial", to: "/home" },
    { icon: <LuCalendarDays />, label: "Desafio diário", to: "/diarychal" },
    { icon: <TbMapRoute />, label: "Modo campanha", to: "/campaign" },
  ];

  const section3: NavItem[] = [
    { icon: <FaCog />, label: "Configurações" },
    { icon: <FaSignOutAlt />, label: "Sair" },
  ];

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`absolute z-100 top-0 left-[1.5%] py-10 h-full bg-[#1a1a1a80] text-white transition-all duration-200 border-r-1 border-[#ffffff20] flex flex-col justify-between ${
        isExpanded ? "w-[11%] 2xl:w-[11%]" : "w-[3%]"
      }`}
    >
      {/* Top Section */}
      <div>
        <div
          className={`flex flex-col items-start gap-4 relative ${
            isExpanded ? "-left-[5%]" : "-left-[30%]"
          }`}
        >
          {section1.map((item, index) => (
            <Link
              to={item.to || "/"}
              key={index}
              className="hidden 2xl:flex items-center gap-2 cursor-pointer rounded-md w-full"
            >
              <span>{item.icon}</span>
              {isExpanded && (
                <span className="text-white text-xs 2xl:text-base ibm uppercase">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>

        <div
          className={`flex 2xl:hidden flex-col items-start gap-4 relative ${
            isExpanded ? "-left-[5%]" : "-left-[32%]"
          }`}
        >
          {section1small.map((item, index) => (
            <Link
              to={item.to || "/"}
              key={index}
              className="flex 2xl:hidden items-center gap-2 cursor-pointer rounded-md w-full"
            >
              <span>{item.icon}</span>
              {isExpanded && (
                <span className="text-white text-xs 2xl:text-base ibm uppercase">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-start gap-10 h-[60%]">
        {section2.map((item, index) => (
          <Link
            to={item.to || "/"}
            key={index}
            className={`flex items-center gap-2 2xl:gap-4 cursor-pointer rounded-md w-full ${
              isActive(item.to)
                ? "text-[#2ea98c] opacity-100 font-semibold"
                : "opacity-50 hover:text-[#2ea98c] hover:scale-110"
            } transition-all duration-200`}
          >
            <span className="text-lg 2xl:text-2xl witheColor">{item.icon}</span>
            {isExpanded && (
              <span className="text-[10px] 2xl:text-xs witheColor w-50">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-start gap-7">
        {section3.map((item, index) => (
          <Link
            to={item.to || "/"}
            key={index}
            className={`flex items-center gap-2 2xl:gap-4 cursor-pointer rounded-md w-full ${
              isActive(item.to)
                ? "text-[#2ea98c] opacity-100 font-semibold"
                : "opacity-50 hover:text-[#2ea98c] hover:scale-110"
            } transition-all duration-200`}
          >
            <span className="text-base 2xl:text-xl witheColor">
              {item.icon}
            </span>
            {isExpanded && (
              <span className="text-[10px] 2xl:text-xs witheColor">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
