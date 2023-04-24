import Image from "next/image";
import Sarah from "../public/sarah.jpeg";

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex items-center md:pl-40 md:pr-40">
        <Image src={Sarah} alt="Image 1" width={450} height={450} />

        <div className="ml-12">
          <h3 className="font-syne-medium text-2xl pt-3">Welcome!</h3>
          <p className="font-sen pt-2 pb-2">
            My name is Sarah and I am a frontend developer looking for a new
            role. With a keen eye for design and a love of creating beautiful,
            intuitive user interfaces, I am eager to contribute my skills to a
            dynamic and innovative team. I have a solid foundation in various
            programming languages, including Ruby, JavaScript, and SQL. I have
            also honed my skills in frontend technologies such as React, HTML,
            and CSS. I am based in London and open to opportunites worldwide.
          </p>
          <button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border mt-2">Github</button>
          <button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border ml-2">CV</button>
          <button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border m-2">Contact me</button>
        </div>
      </div>
    </div>
  );
}
