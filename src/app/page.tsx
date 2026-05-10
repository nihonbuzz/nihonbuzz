import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Programs } from "@/components/sections/programs";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Services />
      <Team />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
