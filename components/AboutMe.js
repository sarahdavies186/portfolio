import Image from "next/image";
import Sarah from "../public/Sarah.jpeg";

export default function AboutMe() {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:pt-20 pb-10">
      <div className="flex items-center md:pl-40">
        <Image src={Sarah} alt="Image 1" width={450} height={450} className="p-2" />
      </div>
      <div className="p-4 md:pr-40">
        <h3 className="font-syne-medium text-2xl pt-2 pb-2 text-center md:text-left">Welcome!</h3>
        <p className="font-sen pt-2 mb-8 text-center md:text-left">
          My name is Sarah and I am a frontend developer looking for a new role.
          With a keen eye for design and a love of creating beautiful, intuitive
          user interfaces, I am eager to contribute my skills to a dynamic and
          innovative team. I have a solid foundation in various programming
          languages, including Ruby, JavaScript, and SQL. I have also honed my
          skills in frontend technologies such as React, HTML, and CSS. I am
          based in London and open to opportunites worldwide.
        </p>
        <div className="ml-4 md:ml-0">
        <a
          className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border mt-2"
          href="https://github.com/sarahdavies186"
        >
          Github
        </a>
        <a className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border ml-2">
          CV
        </a>
        <a
          className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border m-2"
          href="mailto:sarahdavies186@gmail.com"
        >
          Contact me
        </a>
        </div>
      </div>
    </div>
  );
}
