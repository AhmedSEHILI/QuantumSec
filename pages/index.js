import Contact from "@/Comps/Sections/ContactUs/Contact";
import Hero from "@/Comps/Sections/Hero/Hero";
import Questions from "@/Comps/Sections/Questions/Questions";
import Services from "@/Comps/Sections/Services/Services";
import Team from "@/Comps/Sections/Team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Questions />
      <Team />
      <Contact />
    </>
  )
}
