import React from 'react';
import Home from './pages/Home';
import Media from './pages/Media';
import Projects from './pages/Project';
import Work from './pages/Work';
import Tech from './pages/Tech';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/media" element={<Media />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
