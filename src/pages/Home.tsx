import "../index.css";
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useNavigate } from 'react-router-dom';

function App() {

	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<>
			<div className="md:pt-16 pt-2 md:ml-16 ml-3 mr-2">
      		<div className="flex md:space-x-16 sm:space-x-6 space-x-4">
        	<h1 className="md:pt-4 pt-1 font-serif text-slate-900 md:text-2xl text-md md:pb-8 pb-4">
          ethanwalsh.ca
        </h1>
        <nav className="md:ml-4 ml-1 md:pt-6 pt-[0.35rem] font-serif text-slate-900 text-sm md:pb-8 pb-4 mr-2">
          <ul className="flex space-x-4">
            <li>
              <button
                className="hover:underline"
                onClick={() => handleNavigate('/')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handleNavigate('/work')}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handleNavigate('/projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handleNavigate('/tech')}
              >
                Tech
              </button>
            </li>
            <li>
              <button
                className="hover:underline pr-2"
                onClick={() => handleNavigate('/media')}
              >
                Media
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <main className="">
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
