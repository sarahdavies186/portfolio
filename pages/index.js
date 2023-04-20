import Head from "next/head";
import HeroSection from "../components/HeroSection";

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
        <section className="flex bg-nude">
          <h1>hello</h1>
        </section>
      </main>
    </div>
  );
}
