import { FC, RefObject } from "react";
import { motion } from "framer-motion";
import todo from "../../../public/todoapp.png";
import Project from "../Project/Project";
interface MyProjectsProps {
  myProjectsRef: RefObject<HTMLDivElement>;
}
const MyProjects: FC<MyProjectsProps> = ({ myProjectsRef }) => {
  return (
    <div className={"flex flex-col max-w-screen-xl w-full	 mx-auto"}>
      <h2 className="text-4xl font-sans mt-48">My Projects</h2>
      <div className="flex place-content-around mt-20" ref={myProjectsRef}>
        <div>
          <motion.div className="flex flex-row gap-10">
            <Project
              img={todo}
              title="TodoApp"
              technologies="TypeScript - React - RTK - MUI - Framer Motion - JSON Server"
              description="This is a simple Todo application built with React, Redux Toolkit, and Material-UI. It allows you to add, remove, and sort tasks (by completed, uncompleted, and ready-to-do)."
            />
            <Project
              img={todo}
              title="TodoApp"
              technologies="TypeScript - React - RTK - MUI - Framer Motion - JSON Server"
              description="This is a simple Todo application built with React, Redux Toolkit, and Material-UI. It allows you to add, remove, and sort tasks (by completed, uncompleted, and ready-to-do)."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
