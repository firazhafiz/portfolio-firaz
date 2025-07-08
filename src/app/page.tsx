import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import { WorkTimeline } from "@/components/Timeline";
import { ThreeDCardDemo } from "@/components/Project";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "About", link: "#about" },
            { name: "Experience", link: "#experience" },
            { name: "Projects", link: "#projects" },
            { name: "Certifications", link: "#certifications" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
          <TechStack />
        </div>
        <div id="experience">
          <WorkTimeline />
        </div>
        <div id="projects">
          <ThreeDCardDemo />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}
