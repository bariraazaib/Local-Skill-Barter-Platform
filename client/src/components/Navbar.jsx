import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-skill-green"></div>
            <span className="text-2xl font-bold tracking-tight">SkillBarter</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">How it works</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Browse Skills</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Trust & Safety</a>
            <button className="bg-skill-green text-white px-6 py-2 rounded-full font-medium hover:bg-skill-green/90 transition-all shadow-lg shadow-skill-green/20">
              Join Free
            </button>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-700 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
