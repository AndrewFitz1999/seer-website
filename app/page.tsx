import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import DigitalTwin from "@/components/DigitalTwin";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <DigitalTwin />
        <Mission />
        <Team />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
