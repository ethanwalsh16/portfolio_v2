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
	  <div className="md:pb-16 pb-8 md:ml-4 ml-1">
			<p className="font-serif text-slate-900 pb-2"><i>The stack:</i></p>
			<ul className="font-serif text-slate-900 text-md space-y-1">
				<li>Languages: Java, Python, TypeScript, JavaScript, SQL, C, HTML, CSS</li>
				<li>Frameworks & Libraries: Spring Boot, React.js, Next.js, Node.js, FastAPI, Flask, JUnit, Mockito, Cucumber</li>
				<li>Tools: Docker, Kubernetes, Camunda, Sonarqube, Google Cloud Platform, OpenShift Cloud Platform, PostgreSQL,
MongoDB, Git, GitHub Actions, Linux, Jira, Figma, Firebase</li>
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