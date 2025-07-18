interface ExperienceProps {
	title: string;
	company: string;
	oneliner: string;
	link: string;
	colour: string;
	textcolour: string;
	stack: string;
}

const Experience: React.FC<ExperienceProps> = ({ title, company, oneliner, stack, link }) => {

	return (
		<div className="md:ml-4 ml-1">
			<div className="col-span-1 py-3">
				<a href={link}><p className="text-slate-900 pt-2 text-xl font-serif">{ title }</p></a>
				<a href={link}><p className="text-slate-900 font-serif italic text-sm">{ company }</p></a>
			</div>
			<div className="col-span-2 py-3 grid place-content-start space-y-4">
				<p className="text-slate-900 text-sm font-serif">{ oneliner }</p>
				<p className="text-slate-900 text-sm font-serif">Used: { stack }</p>
			</div>		
		</div>
	);
  };
  
  export default Experience;
