import { useState } from 'react';

function Navbar({ scrollToSection }) {
  // State to track if mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to handle mobile clicks (scrolls, then closes menu)
  const handleMobileClick = (section) => {
    scrollToSection(section);
    setIsOpen(false); 
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo and Branding Section */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo2.png" 
              alt="MPSC Professor Logo" 
              className="h-10 w-10 object-contain" 
            />
            <div>
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">MPSC Professor</h1>
              <p className="text-xs text-slate-500 font-medium">Exam Intelligence & Analysis</p>
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-2 items-center">
            <button className="text-slate-600 hover:text-blue-600 hover:bg-slate-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" onClick={() => scrollToSection('hero')}>
              Home
            </button>
            <button className="text-slate-600 hover:text-blue-600 hover:bg-slate-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" onClick={() => scrollToSection('videos')}>
              Channel Videos
            </button>
            <button className="text-slate-600 hover:text-blue-600 hover:bg-slate-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" onClick={() => scrollToSection('notes')}>
              Lecture Notes
            </button>
            <button className="text-slate-600 hover:text-blue-600 hover:bg-slate-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" onClick={() => scrollToSection('about')}>
              About Us
            </button>
            <button className="text-slate-600 hover:text-blue-600 hover:bg-slate-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" onClick={() => scrollToSection('contact')}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-blue-600 hover:bg-slate-200 p-2 rounded-md text-2xl transition-all duration-200"
            >
              {/* Changes icon to an 'X' when open */}
              {isOpen ? '✕' : '≡'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Only renders if isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleMobileClick('videos')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100">
              Channel Videos
            </button>
            <button onClick={() => handleMobileClick('notes')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100">
              Lecture Notes
            </button>
            <button onClick={() => handleMobileClick('about')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100">
              About Us
            </button>
            <button onClick={() => handleMobileClick('contact')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;