import Hero from "@/Comps/Sections/Hero/Hero";
import Questions from "@/Comps/Sections/Questions/Questions";
import Services from "@/Comps/Sections/Services/Services";
import Team from "@/Comps/Sections/Team/Team";
import NavBar from "@/Comps/Shared/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Services />
      <Questions />
      <Team />
    </div>
  )
}
