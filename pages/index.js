import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Work from "../components/Work";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah Davies</title>
        <meta></meta>
      </Head>
      <main>
        <HeroSection />
        <AboutMe />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
