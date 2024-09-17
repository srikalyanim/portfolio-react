import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Leftsider from "./Leftsider";
import Projects from "./Projects";
import Intro from "./intro";
const Home = () => {
  

  return (
    <div>
      <Header />
      
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Footer />
          <Leftsider />
        </div>
      
    </div>
  );
};
export default Home;
