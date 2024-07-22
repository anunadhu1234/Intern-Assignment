
import Application from "./Components/Application";
import Dev from "./Components/Dev";
import Discuss from "./Components/Discuss";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import LogoBar from "./Components/LogoBar";
import Main from "./Components/Main";
import Project from "./Components/Project";
import Projects from "./Components/Projects";
import Team from "./Components/Team";

export default function Home() {
  return (
    <div >
      <Main/>
      <LogoBar/>
      <Dev/>
      <Projects/>
      <Project/>
      <Discuss/>
      <Application/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
