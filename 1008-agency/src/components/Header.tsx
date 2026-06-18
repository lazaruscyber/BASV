import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Process', href: '/process' },
];

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-ivory-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-medium text-burgundy-900 tracking-tight">
            1008
          </span>
          <span className="hidden sm:inline text-[10px] text-charcoal-400 uppercase tracking-[0.2em]">
            Agency
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm transition-colors duration-200 tracking-wide ${
                location.pathname === link.href
                  ? 'text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="mailto:1008agency@gmail.com?subject=Project%20Inquiry"
            className="btn-primary"
          >
            Start a project
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-charcoal-700"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-ivory-50/98 backdrop-blur-md border-b border-ivory-200"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-charcoal-700 hover:text-charcoal-900 py-2"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-charcoal-700 hover:text-charcoal-900 py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:1008agency@gmail.com?subject=Project%20Inquiry"
              className="btn-primary mt-4 w-full justify-center"
            >
              Start a project
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
