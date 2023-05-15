import Image from "next/image";
import Sarah from "../public/Sarah.jpeg";
import { Link } from 'react-scroll';

export default function AboutMe() {
  return (
    <div id="about" className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:pt-20 container">
      <div className="flex justify-center items-center lg:pl-40">
        <Image src={Sarah} alt="Image 1" width={450} height={450} className="p-2" />
      </div>
      <div className="p-4 lg:pr-40">
        <h3 className="font-syne-medium text-2xl pt-2 pb-2 text-center lg:text-left">Welcome!</h3>
        <p className="font-sen pt-2 mb-8 text-center lg:text-left">
          My name is Sarah and I am a full stack developer looking for a new role.
          With a keen eye for design and a love of creating beautiful, intuitive
          user interfaces, I am eager to contribute my skills to a dynamic and
          innovative team. I have a solid foundation in various programming
          languages, including Ruby, JavaScript, and SQL. I have also honed my
          skills in frontend technologies such as React, HTML, and CSS. I am
          based in London and open to opportunites worldwide.
        </p>
        <div className="flex justify-center items-center lg:items-start lg:justify-start">
        <a
          className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border hover:text-green ease-in-out duration-200"
          href="https://github.com/sarahdavies186"
        >
          Github
        </a>
        <a className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border ml-2 hover:text-green ease-in-out duration-200"
         href="https://github.com/sarahdavies186/CV">
          CV
        </a>
        <Link
          className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border ml-2 hover:text-green ease-in-out duration-200 cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
             
      
        >
          Contact me
        </Link>
        </div>
      </div>
    </div>
  );
}
