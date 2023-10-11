import React from "react";
import { motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ProjectProps {
  img: string;
  title: string;
  technologies: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  img,
  title,
  technologies,
  description,
}) => {
  return (
    <div className={"w-6/12 flex flex-col gap-3"}>
      <motion.div
        initial={{ y: 0, x: 0, rotate: 0 }}
        whileHover={{
          x: -2,
          y: -4,
          scale: 1.1,
          rotate: 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <img src={img} alt={title}></img>
      </motion.div>
      <div className={"flex justify-between"}>
        <h4 className={"text-2xl font-bold"}>{title}</h4>
        <div className={"flex gap-4 content-center"}>
          <a
            href="https://github.com/KseniaShepherd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-4 w-4"
            />
          </a>
        </div>
      </div>
      <p className={"text-emerald-400"}>{technologies}</p>
      <div>
        <p>{description}</p>
        <p className={"text-emerald-400 flex items-center"}>
         
          Больше <FontAwesomeIcon
            icon={faChevronRight}
            className="h-3 w-3"
          />
        </p>
      </div>
    </div>
  );
};

export default Project;
