import { FC, RefObject, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  faArrowUpRightFromSquare,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface AboutMeProps {
  aboutMeRef: RefObject<HTMLDivElement>;
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

const AboutMe: FC<AboutMeProps> = ({ aboutMeRef }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const controls = useAnimation();
  const controlsForSkills = useAnimation(); // Дополнительное управление анимацией для навыков
  const [skillsVisible, setSkillsVisible] = useState(false); // Переменная для контроля видимости навыков

  const divRef = useRef<HTMLDivElement>(null);
  const mySkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const checkScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          controls.start({
            y: 50,
            transition: {
              duration: 0.5,
            },
          });

          // Показываем навыки и запускаем анимацию для навыков
          setSkillsVisible(true);
        } else {
          controls.start({
            y: 0,
            transition: {
              duration: 3,
            },
          });

          // Скрываем навыки
          setSkillsVisible(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div style={{ margin: "0 auto", padding: "0 5%" }} className="w-full h-full">
      <div className="mt-40 mb-8 flex flex-col md:mx-10 lg:mx-20 sm:mx-10">
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-4xl font-sans font-bold whitespace-normal">
          Pastukhova Ksenia
        </h1>
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-2lg font-sans whitespace-normal mb-20">
          React-developer
        </h2>
      </div>
      <div className="flex flex-col gap-3 md:mx-10 lg:mx-20 sm:mx-10">
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

      <h2 className="text-4xl font-bodoni mt-48">About Me</h2>

      <div className={`flex ${screenWidth <= 768 ? "flex-col items-center" : "flex-row"} gap-7 `} ref={aboutMeRef}>
        <div className={`${screenWidth <= 768 ? "w-3/4" : "w-full"} `}> 
          <motion.div ref={divRef} initial={{ y: 0, opacity: 1 }} animate={controls} className="flex flex-col">
            <div>
              Привет! Меня зовут Ксения, я начинающий frontend разработчик с
              фокусом на технологии React. Мой опыт включает в себя разработку
              интерфейсов с учетом принципов FSD, управление состоянием с помощью
              Redux (thunk) и Redux Toolkit. Имею опыт настройки продвинутой
              системы авторизации в веб-приложениях, работала с API для интеграции
              информации о погоде и картами в приложения, так же был опыт работы с
              библиотекой Framer Motion для создания анимаций и тестирование кода
              с использованием Jest и Cypress. Я горжусь своими достижениями в
              разработке и постоянно совершенствую свои навыки. В данный момент я
              нахожусь на стажировке, где продолжаю расширять свой опыт и внедрять
              передовые решения в разработке. Моя цель - продолжать расти как
              разработчик и создавать высококачественные интерфейсы для
              пользователей.
            </div>
          </motion.div>
        </div>
       
        <div className="w-1/4">
          <div>
            <div className={"flex gap-2 items-center"}>
              <FontAwesomeIcon icon={faTerminal} className="h-4 w-4 " />
              <p className="text-2xl">Skills</p>
            </div>
            <div className={`grid-flow-row gap-y-1.5`} ref={mySkillsRef}>
              <ul>
                <AnimatePresence>
                  {items.map((item, index) => (
                    <motion.li
                      className={"text-s px-1.5 w-max inline-block bg-emerald-200 rounded-2xl m-1"}
                      key={item}
                      initial={{ opacity: 0, y: 0 }}
                      animate={skillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: skillsVisible ? index * 0.1 : 0 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;