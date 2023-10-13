import { FC, RefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import todo from "../../../public/todoapp.png";
import weather from "../../../public/weather.png"
import Project from "../Project/Project";
interface MyProjectsProps {
  myProjectsRef: RefObject<HTMLDivElement>;
}
const MyProjects: FC<MyProjectsProps> = ({ myProjectsRef }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
   };     window.addEventListener("resize", handleResize);
   handleResize(); }, []);
  return (
    <div className={`flex flex-col max-w-screen-xl w-full	  mx-auto`}>
      <h2 className="text-4xl font-sans mt-28" ref={myProjectsRef}>My Projects</h2>
      <div className={`flex place-content-around mt-20 ${screenWidth <= 768 ? "flex-col items-center" : "flex-row"}`} ref={myProjectsRef}>
        <div>
          <motion.div className="flex flex-row gap-10">
            <Project
              img={todo}
              title="TodoApp"
              technologies="TypeScript - React - RTK - MUI - Framer Motion - JSON Server"
              description="This is a simple Todo application built with React, Redux Toolkit, and Material-UI. It allows you to add, remove, and sort tasks (by completed, uncompleted, and ready-to-do)."
           linkGitHub="https://github.com/KseniaShepherd/ToDoApp"
            linkProject="https://github.com/KseniaShepherd/ToDoApp"/> 
            <Project
              img={weather}
              title="WeatherApp"
              technologies="React - TypeScript - HTML/CSS - Redux Toolkit"
              description="This is a React-based web application that allows users to search for locations, view them on a map, and check the current weather conditions for those locations. It integrates with weather and map APIs to provide real-time data."
              linkGitHub="https://github.com/KseniaShepherd/WeatherMap"
              linkProject="https://github.com/KseniaShepherd/WeatherMap"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
