import Hero from "@/src/components/hero";
import Divider from "@/src/components/divider";
import About from "@/src/components/about";
import Projects from "@/src/components/projects";
import Skills from "@/src/components/skills";
import Experience from "@/src/components/experience";

export default function Home() {
   return (
      <main className="flex flex-col items-center px-4">
         <Hero />
         <Divider />
         <About />
         <Projects />
         <Skills />
         <Experience />
      </main>
   );
}
