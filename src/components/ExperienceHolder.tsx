import Experience from "./Experience"

interface ExperienceHolderProps {
	experiences: Array<{
		title: string;
		company: string;
		oneliner: string;
		link: string;
		colour: string;
		textcolour: string;
		stack: string;
	}>;
	
}

const ExperienceHolder: React.FC<ExperienceHolderProps> = ({ experiences }) => {
	return (
		<div>
			<h1 className="text-slate-900 text-2xl font-serif md:ml-4 ml-1">Work</h1>
			<div className="space-y-6">
				{experiences.map((experience, index) => (
					<Experience key={index} {...experience}/>
				))}
			</div>
		</div>
	);
  };
  
  export default ExperienceHolder;