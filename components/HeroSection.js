export default function HeroSection() {
  return (
    <div className="hero-section bg-[url('../public/background.png')] bg-cover bg-center">
      <nav>
        <ul className="flex justify-end space-x-12 font-sportinggrotesqueregular text-white p-6">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#design">Design</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col pt-48 md:pt-42 pl-5 md:pl-28 container">
        <h1 className="text-white font-tangerine text-8xl md:text-9xl">
          Sarah Davies
        </h1>
        <h2 className="text-white font-syne-medium text-5xl pb-10">
          Software developer and designer
          <br />
          based in the UK
        </h2>
        <a className="text-white font-sportinggrotesqueregular text-1xl pt-1">
          Scroll down ↓
        </a>
      </div>
    </div>
  );
}
