import Image from "next/image";
import image1 from "../public/image1.png";
import image2 from "../public/image2.png";
import image3 from "../public/image3.png";
import image4 from "../public/image4.png";
import { Button } from "react-bootstrap";

export default function Work() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="bg-gray-100 p-4">
        <Image src={image1} alt="Image 1" width={550} height={550} />
        <h3 className="font-sportinggrotesqueregular pt-3">Acebook</h3>
        <p className="font-sen">A social media platform created with the MERN stack</p>
        <Button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">Github</Button>
      </div>
      <div className="bg-gray-100 p-4">
        <Image src={image2} alt="Image 2" width={550} height={450} />
        <h3 className="font-sportinggrotesqueregular pt-3">Makers bnb</h3>
        <p className="font-sen">A web app for users to list and rent spaces, created with Ruby and PostgreSQL</p>
        <Button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">Github</Button>
      </div>
      <div className="bg-gray-100 p-4">
        <Image src={image3} alt="Image 2" width={550} height={300} />
        <h3 className="font-sportinggrotesqueregular pt-3">News App</h3>
        <p className="font-sen">The latest news headlines straight from the Guardian API</p>
        <Button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">Github</Button>
      </div>
      <div className="bg-gray-100 p-4">
        <Image src={image4} alt="Image 2" width={550} height={300} />
        <h3 className="font-sportinggrotesqueregular pt-3">Landing Page</h3>
        <p className="font-sen">A creative agency landing page, designed with HTML and Bootstrap CSS</p>
        <Button className="font-sportinggrotesqueregular bg-transparent py-2 px-4 border border-blue-500 mt-2">Github</Button>
      </div>
    </div>
  );
}
