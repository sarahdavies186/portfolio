import Image from "next/image";
import image1 from "../public/image1.png";
import image2 from "../public/image2.png";
import image3 from "../public/image3.png";
import image4 from "../public/image4.png";
import yoga from "../public/yoga.png";
import webDesign from "../public/web-design.png";

export default function Work() {
  return (
    <div>
      <h2 className="font-syne-medium text-2xl pb-10">
        01. Software Development Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="bg-gray-100 p-4">
          <Image src={image1} alt="Image 1" width={550} height={550} />
          <h3 className="font-syne-medium text-xl pt-3">Acebook</h3>
          <p className="font-sen">
            A social media platform created with the MERN stack
          </p>
          <button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">
            Github
          </button>
        </div>
        <div className="bg-gray-100 p-4">
          <Image src={image2} alt="Image 2" width={550} height={450} />
          <h3 className="font-syne-medium text-xl pt-3">Makers bnb</h3>
          <p className="font-sen">
            A web app for users to list and rent spaces, created with Ruby and
            PostgreSQL
          </p>
          <button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">
            Github
          </button>
        </div>
        <div className="bg-gray-100 p-4">
          <Image src={image3} alt="Image 2" width={550} height={300} />
          <h3 className="font-syne-medium text-xl pt-3">News App</h3>
          <p className="font-sen">
            The latest news headlines straight from the Guardian API
          </p>
          <button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">
            Github
          </button>
        </div>
        <div className="bg-gray-100 p-4">
          <Image src={image4} alt="Image 2" width={550} height={300} />
          <h3 className="font-syne-medium text-xl pt-3">Landing Page</h3>
          <p className="font-sen">
            A creative agency landing page, designed with HTML and Bootstrap CSS
          </p>
          <button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">
            Github
          </button>
        </div>
      </div>

      {/* <h2 className="font-syne-medium text-2xl pb-10 pt-28">02. Design Projects</h2>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="bg-gray-100 p-4">
          <Image src={yoga} alt="Image 1" width={400} height={550} />
          <h3 className="font-syne-medium text-xl pt-3">Yoga is for everybody</h3>
          <p className="font-sen">
            Social media campaign
          </p>
        </div>
         <div className="bg-gray-100 p-4">
          <Image src={webDesign} alt="Image 1" width={550} height={600} />
          <h3 className="font-syne-medium text-xl pt-3">Website Design</h3>
          <p className="font-sen">
            Web design created with Adobe XD
          </p>
        </div> */}
        
      {/* </div> */}
    </div>
  );
}
