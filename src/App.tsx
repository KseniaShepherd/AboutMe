import { useRef } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./widgets/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
import Contact from "./components/Contact/Contact";
import './input.css'
import Experience from "./components/Experience/Experience";
function App() {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>, headerHeight: number) => {
    if (ref.current) { // Проверьте, что ref.current существует
      const yOffset = ref.current.getBoundingClientRect().top - headerHeight;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const myExperienceRef = useRef<HTMLDivElement>(null);
  const myProjectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex justify-center relative">
      <Header
  scrollToRef={(ref) => scrollToRef(ref, 20)} // Здесь headerHeight - высота хедера
  aboutMeRef={aboutMeRef}
  myExperienceRef={myExperienceRef}
  myProjectsRef={myProjectsRef}
  contactRef={contactRef}
/>
      </div>
      <AboutMe aboutMeRef={aboutMeRef} />
      <MyProjects myProjectsRef={myProjectsRef} />
      <Experience myExperienceRef={myExperienceRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
