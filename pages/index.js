import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Work from "../components/Work";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah Davies</title>
        <meta></meta>
      </Head>
      <main>
        <HeroSection />
        <section className="flex justify-center bg-white pt-12 pb-24">
          <AboutMe />
        </section>
        <section className="flex justify-center bg-white pt-8 pb-12">
          <Work />
        </section>
        <section className="flex justify-center bg-white pt-8">
          <Contact />
        </section>
        <section className="flex justify-center bg-white pt-20 pb-12">
          <Footer />
        </section>
      </main>
    </div>
  );
}
