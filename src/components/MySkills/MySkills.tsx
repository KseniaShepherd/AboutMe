import  { FC, RefObject, useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
interface MySkillsProps {
  mySkillsRef: RefObject<HTMLDivElement>;
}
const items = [
  "JavaScript (ES6+)",
  "Typescript",
  "HTML5",
  "CSS (SASS, module)",
  "REACT (hooks)",
  "Redux (thunk)",
  "ReduxToolkit, RTK-query",
  "NextJs (SSR)",
  "Framer Motion",
  "Vite, npm && yarn", 
  "Webpack",
  "MUI , ANTD, ReactBootstrap",
  "Feature Sliced Design, ATOMIC-Design",
  "Figma",
  "I18next",
  "StoryBook",
  "Jest, React-testing-library, Cypress",
];

const MySkills: FC<MySkillsProps> = ({ mySkillsRef }) => {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  
  //   window.addEventListener("resize", handleResize);
  //   handleResize(); 
  
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (<div>
         <FontAwesomeIcon icon={faTerminal} className="h-6 w-6 " />
    <div className={`grid-flow-row gap-y-1.5`} ref={mySkillsRef}>
        <ul>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.li
          className={"text-s px-1.5 w-max inline-block bg-emerald-200 rounded-2xl m-1"}
            key={item}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul> 
      </div>
      </div>
  );
};

export default MySkills;
