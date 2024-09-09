import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Media from './pages/Media'
import Projects from './pages/Project'
import Work from './pages/Work'
import Footer from './components/Footer'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="md:ml-[10%] ml-[10%] md:pt-32 pt-8">
      <div className="flex space-x-16">
	      <h1 className="md:ml-4 ml-1 md:pt-4 pt-1 font-serif text-slate-900 md:text-2xl text-md md:pb-8 pb-4">ethanwalsh.tech</h1>
        <Navbar />
      </div>
      <main className="md:ml-4 ml-1">
        <Routes>
          <Route path="/" element={<Home />} />
		      <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </main>
    <div className="py-12"></div>
    <Contact />
    <Footer />
    </div>
  );
};

export default App;
