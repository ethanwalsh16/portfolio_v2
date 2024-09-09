import Project from "./Project"

interface ProjectsHolderProps {
	projects: Array<{
		title: string;
		description: string;
		link: string;
		colour: string;
		textcolour: string;
		stack: string;
	}>;
}

const ExperienceHolder: React.FC<ProjectsHolderProps> = ({ projects }) => {
	return (
		<div>
			<h1 className="text-slate-900 text-2xl font-serif md:ml-4 ml-1">Projects</h1>
			<div className="space-y-6">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</div>
	);
  };
  
  export default ExperienceHolder;