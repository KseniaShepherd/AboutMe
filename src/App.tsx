import { useRef } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./widgets/Header/Header";
import MySkills from "./components/MySkills/MySkills";
import MyProjects from "./components/MyProjects/MyProjects";
import Contact from "./components/Contact/Contact";
import './input.css'
function App() {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const mySkillsRef = useRef<HTMLDivElement>(null);
  const myProjectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex justify-center relative">
        <Header
          scrollToRef={scrollToRef}
          aboutMeRef={aboutMeRef}
          mySkillsRef={mySkillsRef}
          myProjectsRef={myProjectsRef}
          contactRef={contactRef}
        />
      </div>
      <AboutMe aboutMeRef={aboutMeRef} />
      <MySkills mySkillsRef={mySkillsRef} />
      <MyProjects myProjectsRef={myProjectsRef} />
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
