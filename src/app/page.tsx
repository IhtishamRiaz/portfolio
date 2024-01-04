import Hero from "@/src/components/hero";
import Divider from "@/src/components/divider";
import About from "@/src/components/about";
import Projects from "@/src/components/projects";

export default function Home() {
   return (
      <main className="flex flex-col items-center px-4">
         <Hero />
         <Divider />
         <About />
         <Projects />
      </main>
   );
}
