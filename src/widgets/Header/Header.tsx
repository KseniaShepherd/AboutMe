import React, { FC, useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

interface HeaderProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  mySkillsRef: React.RefObject<HTMLDivElement>;
  myProjectsRef: React.RefObject<HTMLDivElement>;
}

const Header: FC<HeaderProps> = ({ scrollToRef, aboutMeRef , mySkillsRef, myProjectsRef}) => {
  const controls = useAnimation();
  const [scrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolling) {
      controls.start({
        y: -15,
        transition: { duration: 0.4, ease: "easeOut" },
      });
    } else {
      controls.start({
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      });
    }
  }, [scrolling, controls]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={controls}
      className="container px-9 h-20 py-6 z-50 flex flex-row place-content-between fixed bg-white bg-opacity-95"
    >
      <div className="bg-black text-white h-10 w-10 flex items-center justify-center border rounded-full">
        KS
      </div>
      {windowWidth > 600 ? (
        <nav>
          <ul className="uppercase flex flex-row gap-7">
            <li
              className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
              onClick={() => scrollToRef(aboutMeRef)}
            >
              About me
            </li>
            <li className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
            onClick={() => scrollToRef(mySkillsRef)}
            >
              My Skills
            </li>
            <li className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
            onClick={() => scrollToRef(myProjectsRef)}
            >
              My Projects
            </li>
            <li className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      ) : (
        <button
          className="text-3xl transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      )}
      <AnimatePresence>
        {menuOpen && windowWidth <= 600 && (
          <DropdownMenu
            scrollToRef={scrollToRef}
            aboutMeRef={aboutMeRef} 
            mySkillsRef ={mySkillsRef}
            myProjectsRef={myProjectsRef}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
