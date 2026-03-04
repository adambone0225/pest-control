import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone, Facebook, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', to: 'hero' },
    { name: '服務與害蟲', to: 'services' },
    { name: '施工流程', to: 'process' },
    { name: '價目表', to: 'pricing' },
    { name: '常見問題', to: 'faq' },
    { name: '客戶評價', to: 'testimonials' },
    { name: '關於我們', to: 'about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold text-primary">
              殺蟲特工隊
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-secondary hover:text-primary font-medium cursor-pointer transition-colors"
                activeClass="text-primary font-bold"
                spy={true}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4 border-l border-gray-200 pl-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a
                href="tel:+85212345678"
                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors"
              >
                <Phone size={16} />
                <span className="font-medium">立即致電</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-3 py-3 text-base font-medium text-secondary hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-4 px-3">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Instagram size={24} />
                </a>
              </div>
              <a
                href="tel:+85212345678"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-3 rounded-md hover:bg-red-800 transition-colors"
              >
                <Phone size={20} />
                <span className="font-medium">立即致電</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
