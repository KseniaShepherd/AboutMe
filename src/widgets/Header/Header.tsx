import React, { FC, useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

interface HeaderProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  myExperienceRef: React.RefObject<HTMLDivElement>;
  myProjectsRef: React.RefObject<HTMLDivElement>;
  contactRef:React.RefObject<HTMLDivElement>;
}

const Header: FC<HeaderProps> = ({ scrollToRef, aboutMeRef, myExperienceRef, myProjectsRef, contactRef }) => {
  const controls = useAnimation();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About me", ref: aboutMeRef },
    { name: "My Projects", ref: myProjectsRef },
    { name: "Experience", ref: myExperienceRef },
    { name: "Contact", ref: contactRef },
  ];
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
      className="container px-9 h-20 py-6 z-50 flex flex-row place-content-between fixed bg-white bg-opacity-95 w-full"
    >
      <div className="bg-black text-white h-10 w-10 flex items-center justify-center border rounded-full">
        KS
      </div>

      <nav className="hidden lg:flex">
      <ul className="uppercase flex flex-row gap-7">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
            onClick={() => item.ref ? scrollToRef(item.ref) : null}
          >
            {item.name}
          </li>
        ))}
      </ul>
      </nav>

      <button className="text-3xl lg:hidden" onClick={toggleMenu}>
        ☰
      </button>

      <AnimatePresence>
        {menuOpen && (
          <DropdownMenu
            scrollToRef={scrollToRef}
            aboutMeRef={aboutMeRef}
            myProjectsRef={myProjectsRef} 
            myExperienceRef={myExperienceRef}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;