import React, { useState } from 'react';
import Home from './pages/Home';
import Media from './pages/Media';
import Projects from './pages/Project';
import Work from './pages/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Tech from './pages/Tech';

// Define a type for page identifiers
type Page = 'home' | 'work' | 'projects' | 'media' | 'tech';

const App: React.FC = () => {
  // Initialize state with 'home' as the default page
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Function to handle link clicks and update the current page
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  return (
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
                onClick={() => handlePageChange('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handlePageChange('work')}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handlePageChange('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handlePageChange('tech')}
              >
                Tech
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handlePageChange('media')}
              >
                Media
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <main className="">
        {currentPage === 'home' && <Home />}
        {currentPage === 'work' && <Work />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'tech' && <Tech />}
        {currentPage === 'media' && <Media />}
      </main>
      <div className="py-8"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
