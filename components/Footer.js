import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="flex flex-col ">
      <div className="text-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="font-syne-medium text-xl text-center hover:text-pink ease-in-out duration-300 cursor-pointer"
        >
          Back to top
        </Link>
        <p className="font-sen pt-2">
          Website designed and created by me, using Next.js and hosted on Netlify
        </p>
      </div>
    </div>
  );
}
