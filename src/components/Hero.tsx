import "../index.css"

const Hero = () => {
	return (
		<div className="justify-center pt-4 md:pb-16 pb-8 md:ml-4 ml-1">
			<div className="md:col-span-2 col-span-1">
					<p className="font-serif text-slate-900 pb-2"><i>Currently:</i></p>
					<ul className="font-serif text-slate-900 text-md space-y-1">
						<li>Studying software engineering at McMaster University</li>
						<li>Working to grow the reach of McMaster's Artificial Intelligence community</li>
						<li>Making music with the engineering jazz band</li>
						<li>Learning about digital ethics, how to get off your phone, and the return to physical media</li>
					</ul>
			</div>
		</div>
	);
};

export default Hero;