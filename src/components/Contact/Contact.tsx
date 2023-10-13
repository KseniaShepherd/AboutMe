import  { FC, RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
interface ContactProps {
    contactRef: RefObject<HTMLDivElement>;
  }
const Contact: FC <ContactProps> = ({contactRef}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-16">
      <h1 className="text-4xl uppercase" ref={contactRef}>Contact me</h1>
      <div className="flex gap-10">
        <a
          href="https://github.com/KseniaShepherd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={"h-10 w-10 hover:scale-98 hover:-translate-y-1 hover:-translate-x-1"} />
        </a>
        <a
          href="https://t.me/KsShepherd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} className={"h-10 w-10 hover:scale-98 hover:-translate-y-1 hover:-translate-x-1"} />
        </a>
        <a href="mailto:kpastukhova.ge@gmail.com">
          <FontAwesomeIcon icon={faAt} className={"h-10 w-10 hover:scale-98 hover:-translate-y-1 hover:-translate-x-1"} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
