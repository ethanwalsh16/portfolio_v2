interface ProjectProps {
	title: string;
	description: string;
	link: string;
	stack: string;
	github: string;
}

const Experience: React.FC<ProjectProps> = ({ title, description, link, stack, github }) => {

	return (
		<>
		<div className="col-span-1 md:ml-4 ml-1 pt-3">
			<a href={link}><p className="text-slate-900 pt-2 text-xl font-serif">{ title }</p></a>
		</div>
		<div className="col-span-2 space-y-4 md:ml-4 ml-1">
			<p className="text-slate-900 font-serif text-sm">{ description }</p>
			<p className="text-slate-900 font-serif text-sm">Used: { stack }</p>
		</div>
		<div className="col-span-1 md:ml-4 ml-1 pb-1">
			<a href={github}><p className="text-slate-900-pt-2 text-sm font-serif"><i>GitHub</i></p></a>
		</div>
		</>
	);
  };
  
  export default Experience;