import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
interface DropdownMenuProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  mySkillsRef: React.RefObject<HTMLDivElement>;
  myProjectsRef: React.RefObject<HTMLDivElement>;
  toggleMenu: () => void;
  menuOpen: boolean;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  scrollToRef,
  aboutMeRef,
  mySkillsRef,
  myProjectsRef,
  toggleMenu,
  menuOpen,
}) => {
  const variants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "100%" },
  };
  return (
    <motion.nav
      initial="closed"
      animate={menuOpen ? "open" : "closed"}
      exit="closed"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="absolute top-0 right-0 w-60 h-96 bg-slate-50 z-50 text-right pr-10"
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="h-4 w-4 pt-7 pb-10 hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer"
        onClick={toggleMenu}
      />
      <ul className="uppercase flex flex-col gap-7">
        <li
          className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
          onClick={() => {
            scrollToRef(aboutMeRef);
            toggleMenu();
          }}
        >
          About me
        </li>
        <li
          className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
          onClick={() => {
            scrollToRef(mySkillsRef);
            toggleMenu();
          }}
        >
          My Skills
        </li>
        <li
          className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
          onClick={() => {
            scrollToRef(myProjectsRef);
            toggleMenu();
          }}
        >
          My Projects
        </li>
        <li className=" transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer">
          Contact
        </li>
      </ul>{" "}
    </motion.nav>
  );
};

export default DropdownMenu;
