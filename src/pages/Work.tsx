import "../index.css";
import ExperienceHolder from "../components/ExperienceHolder"
import { experiences } from '../data/content.json'

function App() {

	return (
		<ExperienceHolder experiences={experiences} />
  )
}

export default App;
