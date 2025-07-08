import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import { WorkTimeline } from "@/components/Timeline";
import { ThreeDCardDemo } from "@/components/Project";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <About />
        <TechStack />
        <WorkTimeline />
        <ThreeDCardDemo />
      </div>
    </main>
  );
}
