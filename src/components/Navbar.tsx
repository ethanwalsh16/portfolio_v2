import "../index.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
	const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
    <>
    <div className="md:pt-16 pt-2 md:ml-16 ml-3 mr-2">
        <div className="flex justify-between sm:justify-start md:space-x-16 sm:space-x-6 space-x-4">
            <h1 className="md:pt-4 pt-1 font-serif text-slate-900 md:text-2xl text-md md:pb-8 pb-4">
                ethanwalsh.ca
            </h1>
            {/* Hamburger Menu Button */}
            <button 
                className="sm:hidden p-2 mr-2" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden sm:block md:ml-4 md:pt-6 pt-[0.3rem] font-serif text-slate-900 text-sm md:pb-8 pb-4 mr-2">
                <ul className="flex md:space-x-4 sm:space-x-2">
                    {['/', '/work', '/projects', '/tech', '/media'].map((path, index) => (
                        <li key={index}>
                            <button className="hover:underline" onClick={() => handleNavigate(path)}>
                                {path.replace("/", "") || "home"}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
            <div className="sm:hidden absolute top-16 right-0 w-[20%] bg-[#fefbf1] shadow-md p-4">
                <ul className="flex flex-col space-y-2">
                    {['/', '/work', '/projects', '/tech', '/media'].map((path, index) => (
                        <li key={index}>
                            <button className="w-full font-serif text-right py-2 hover:underline mr-2" onClick={() => handleNavigate(path)}>
                                {path.replace("/", "") || "home"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
</>
  )
}

export default App;
