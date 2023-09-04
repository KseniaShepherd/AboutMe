import React, { FC, RefObject, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import girl from "../../../public/girl-with-laptop-chair-freelance-studying-concept-illustration-vector_199064-194.jpeg";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";

interface AboutMeProps {
  aboutMeRef: RefObject<HTMLDivElement>;
}
const AboutMe: FC<AboutMeProps> = ({ aboutMeRef }) => {
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
  const controls = useAnimation();
  const divRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        controls.start({
          x: 0,
          transition: {
            duration: 0.5,
          },
        });
      } else {
        controls.start({
          x: 50,
          transition: {
            duration: 3,
          },
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <div className="m-20">
      <div className="mt-52 mb-16">
        <h1 className="text-7xl font-sans font-bold">Pastukhova Ksenia</h1>
        <h2 className="text-4xl font-sans">React-developer</h2>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-5 transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1">
          <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
          <a
            href="https://github.com/KseniaShepherd"
            target="_blank"
            rel="noopener noreferrer"
          >
            KShepherd
          </a>
        </div>

        <div className="flex items-center gap-5 transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1">
          <FontAwesomeIcon icon={faTelegram} className="h-8 w-8" />
          <a
            href="https://t.me/KsShepherd"
            target="_blank"
            rel="noopener noreferrer"
          >
            KShepherd
          </a>
        </div>
        <div className="flex items-center gap-5 transition-transform hover:scale-98 hover:-translate-y-1 hover:-translate-x-1">
          <FontAwesomeIcon icon={faAt} className="h-8 w-8" />
          <a href="mailto:kpastukhova.ge@gmail.com">kpastukhova.ge@gmail.com</a>
        </div>
      </div>
      <div className="flex place-content-around mt-48" ref={aboutMeRef}>
        <motion.img
          className="h-96 w-96"
          src={girl}
          alt="girl"
          {...levitateAnimation}
        />
        <motion.div
          ref={divRef}
          initial={{ x: 100, opacity: 1 }}
          animate={controls}
          className="flex flex-col gap-10"
        >
          <h2 className="text-4xl font-sans">About Me</h2>
          <div className="h-80 w-80 border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            ipsam modi ea eveniet consequatur debitis corporis nihil voluptas
            aperiam soluta, provident iste odit molestias, alias odio, enim
            tempore minus eaque.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
