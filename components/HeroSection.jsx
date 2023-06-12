import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="hero-section bg-[url('../public/background.png')] bg-cover bg-center"
    >
      <nav>
        <ul className="flex justify-end space-x-12 font-sportinggrotesqueregular text-white p-6">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black ease-in-out duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black ease-in-out duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black ease-in-out duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col pt-48 md:pt-36 pl-5 md:pl-28 container">
        <h1 className="text-white font-tangerine text-8xl md:text-9xl">
          Sarah Davies
        </h1>
        <h2 className="text-white font-syne-medium text-5xl pb-10">
          Software developer based in the UK
        </h2>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="text-white hover:text-black font-sportinggrotesqueregular text-1xl pt-1 ease-in-out duration-300 cursor-pointer"
        >
          Scroll down ↓
        </Link>
      </div>
    </div>
  );
}
