import "../index.css";
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

function App() {

	return (
    <>
    <Navbar />
    <div className="pt-2 md:ml-16 ml-3 mr-2">
    
    <main>
        <Hero />
    </main>
    <div className="py-8"></div>
    <Contact />
    <Footer />
    </div>
  </>
  )
}

export default App;
