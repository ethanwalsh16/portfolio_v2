import "../index.css";
import ProjectsHolder from "../components/ProjectsHolder"
import { projects } from '../data/content.json'

function App() {

	return (
		<ProjectsHolder projects={projects} />
  )
}

export default App;
