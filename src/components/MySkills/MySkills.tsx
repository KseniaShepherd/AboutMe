import  { FC, RefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import girl from "../../../public/girl-with-laptop-chair-freelance-studying-concept-illustration-vector_199064-194.jpeg";
interface MySkillsProps {
  mySkillsRef: RefObject<HTMLDivElement>;
}
const MySkills: FC<MySkillsProps> = ({ mySkillsRef }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const levitateAnimation = {
    animate: {
      y: ["0%", "2%", "0%"],
    },
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
    handleResize(); 
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`flex ${screenWidth <= 768 ? 'flex-col items-center' : 'flex-row'} place-content-around mt-48`} ref={mySkillsRef}>
    <motion.div className="flex flex-col gap-10">
        <h2 className="text-4xl font-sans">My Skills</h2>
        <div className="h-80 w-80 border">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          ipsam modi ea eveniet consequatur debitis corporis nihil voluptas
          aperiam soluta, provident iste odit molestias, alias odio, enim
          tempore minus eaque.
        </div>
      </motion.div>
      <motion.img
        className="h-96 w-96"
        src={girl}
        alt="girl"
        {...levitateAnimation}
      />
    </div>
  );
};

export default MySkills;
