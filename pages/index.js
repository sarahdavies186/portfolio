import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Work from "../components/Work";

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
        <section className="flex justify-center bg-white pt-20">
          <Work />
        </section>
      </main>
    </div>
  );
}
