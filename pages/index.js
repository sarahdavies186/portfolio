import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Work from "../components/Work";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah's Portfolio</title>
        <meta></meta>
      </Head>
      <main>
        <section>
          <HeroSection />
        </section>
        <section className="flex justify-center bg-white pt-32 pb-20">
          <AboutMe />
        </section>
        <section className="flex justify-center bg-white pt-20 pb-32">
          <Work />
        </section>
        <section className="flex justify-center bg-white pt-20 pb-12">
          <Footer />
        </section>
      </main>
    </div>
  );
}
