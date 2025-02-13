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
	  <div className="space-y-4 md:ml-4 py-3">
			<p className="font-serif text-slate-900 text-2xl">Seeing:</p>

				<p className="font-serif text-slate-900 ml-2">Art of Kazuo Nakamura</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">Nakamura's work with regards to number patterns is particularly interesting, and was on display at the AGO this past summer where I first encountered it. <a href="https://www.gallery.ca/collection/artist/kazuo-nakamura" className="hover:underline" target="_blank"><i>more</i></a></p>

				<p className="font-serif text-slate-900 ml-2">Architecture of Frank Lloyd Wright</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">Although a common choice, designs such as Fallingwater remain among my favourites.</p>

				<p className="font-serif text-slate-900 ml-2">Golf Course Design of Tom Doak</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">Doak's minimalist style of building the course into the landscape has generated some of (what I believe) the best golf courses on earth. Tara Iti in New Zealand ranks highest on my list. <a href="https://www.top100golfcourses.com/golf-course/tara-iti" className="hover:underline" target="_blank"><i>more</i></a></p>
				{/* Maybe Erik Anders Lang too */} 
			<p className="font-serif text-slate-900 text-2xl">Hearing:</p>

				<p className="font-serif text-slate-900 ml-2">Emmet's Place</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">Rotating cast of some of the best living jazz musicians play in jazz pianist Emmet Cohen's apartment. Every session features incredible talent and an unmatched atmosphere. <a href="https://www.youtube.com/channel/UCuKBb--0F0qT_deSpMLsFRA" className="hover:underline" target="_blank"><i>more</i></a></p>

				<p className="font-serif text-slate-900 ml-2">Patrick Bartley</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">Often featured on Emmet's Place, Bartley is one of the greatest living jazz saxophonists, if not the greatest. Each solo brings energy, variety, and immense technical skill. Recommended solos to watch come on After You've Gone, Yes or No, and Tea For Two. <a href="https://www.youtube.com/watch?v=984ksjle4YA&ab_channel=EmmetCohen" className="hover:underline" target="_blank"><i>After You've Gone</i></a></p>

				<p className="font-serif text-slate-900 ml-2">Soundtracks of Michael Giacchino</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">A lot of nostalgia comes from Giacchino's work, as he scored many childhood favourites: The Incredibles, Up, Ratatouille, Inside Out, as well as recent accomplishments like The Batman. <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO2xeZDW?si=b7d31ec453b64ac8" className="hover:underline" target="_blank"><i>more</i></a></p>

			<p className="font-serif text-slate-900 text-2xl">Reading:</p>

				<p className="font-serif text-slate-900 ml-2">Digital Minimalism by Cal Newport</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">An important read from a Georgetown computer science professor. Stories and strategies to maintain tech as a tool and control it. Highly recommend to anyone pursuing a career in software (as I am).</p>

				<p className="font-serif text-slate-900 ml-2">Thinking Fast and Slow by Daniel Kahneman</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">Although reading is still in progress, the work of Kahneman and his collaborator Amos Tversky on intuition and system 1 vs. system 2 in the mind is captivating, and I look forward to learning more.</p>

				<p className="font-serif text-slate-900 ml-2">Conversations by Steve Reich</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">One of the greatest musicians in the field of minimalism, Reich speaks with various other musical giants. A great deal of important knowledge and history on 20th century music.</p>
				
				<p className="font-serif text-slate-900 ml-2">Range by David Epstein</p>

					<p className="font-serif text-slate-900 ml-4 text-sm">The extended version of this book's title explains it well - 'why generalists triumph in a specialized world'.</p>
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


