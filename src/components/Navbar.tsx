import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="md:ml-4 ml-1 md:pt-5 pt-2 font-serif text-slate-900 text-sm md:pb-8 pb-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/work" className="hover:underline">Work</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:underline">Projects</Link>
        </li>
        <li>
          <Link to="/media" className="hover:underline">Media</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;