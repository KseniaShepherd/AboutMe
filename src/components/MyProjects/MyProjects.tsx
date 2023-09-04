import { FC, RefObject } from "react";
import { motion } from "framer-motion";
import girl from "../../../public/girl-with-laptop-chair-freelance-studying-concept-illustration-vector_199064-194.jpeg";
interface MyProjectsProps {
  myProjectsRef: RefObject<HTMLDivElement>;
}
const MyProjects: FC<MyProjectsProps> = ({ myProjectsRef }) => {
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
  return (
    <div className="flex place-content-around mt-48" ref={myProjectsRef}>
      <motion.img
        className="h-96 w-96"
        src={girl}
        alt="girl"
        {...levitateAnimation}
      />
      <motion.div className="flex flex-col gap-10">
        <h2 className="text-4xl font-sans">My Projects</h2>
        <div className="h-80 w-80 border">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          ipsam modi ea eveniet consequatur debitis corporis nihil voluptas
          aperiam soluta, provident iste odit molestias, alias odio, enim
          tempore minus eaque.
        </div>
      </motion.div>
    </div>
  );
};

export default MyProjects;
