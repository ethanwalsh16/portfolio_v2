import "../index.css";
import ProjectsHolder from "../components/ProjectsHolder"
import { projects } from '../data/content.json'
import "../index.css";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

function App() {


	return (
    <>
    <Navbar />
		<div className="pt-2 md:ml-16 ml-3 mr-2">
			
      <main className="">
	  <ProjectsHolder projects={projects} />
      </main>
      <div className="py-8"></div>
      <Contact />
      	<Footer />
	  </div>
    </>
  )
}

export default App;
