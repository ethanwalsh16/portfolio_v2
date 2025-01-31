import "../index.css";
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
			<div className="md:pt-16 pt-2 md:ml-16 ml-2">
      		<div className="flex md:space-x-16 space-x-8">
        	<h1 className="md:pt-4 pt-1 font-serif text-slate-900 md:text-2xl text-md md:pb-8 pb-4">
          ethanwalsh.tech
        </h1>
        <nav className="md:ml-4 ml-1 md:pt-5 pt-1 font-serif text-slate-900 text-sm md:pb-8 pb-4">
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
                className="hover:underline"
                onClick={() => handleNavigate('/media')}
              >
                Media
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <main className="">
	  <div className="md:pb-16 pb-8 md:ml-4 ml-1">
			<p className="font-serif text-slate-900 pb-2"><i>The stack:</i></p>
			<ul className="font-serif text-slate-900 text-md space-y-1">
				<li>Languages: Java, Python, C/C++, SQL, JavaScript, HTML/CSS, MATLAB</li>
				<li>Frameworks & Libraries: React.js, Next.js, Node.js, FastAPI, MongoDB, OpenCV, JUnit</li>
				<li>Tools: Git, Unix/Linux, Figma, Docker, Firebase, Sonarqube</li>
			</ul>
		</div>
      </main>
      <div className="py-8"></div>
      <Contact />
      	<Footer />
    	</div>
	</>
  )
}

export default App;