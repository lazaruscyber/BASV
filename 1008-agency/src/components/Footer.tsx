import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-ivory-100">
      <div className="container-max px-6 py-16 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif text-lg font-medium text-ivory-100">1008</span>
              <span className="text-[10px] text-charcoal-500 uppercase tracking-[0.2em]">
                Agency
              </span>
            </div>
            <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
              Engineered to ship.
            </p>
            <div className="space-y-1">
              <a
                href="mailto:1008agency@gmail.com"
                className="block text-sm text-charcoal-500 hover:text-charcoal-300 transition-colors"
              >
                1008agency@gmail.com
              </a>
              <a
                href="mailto:1008helpcenter@gmail.com"
                className="block text-sm text-charcoal-500 hover:text-charcoal-300 transition-colors"
              >
                1008helpcenter@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-medium text-charcoal-400 uppercase tracking-[0.2em] mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium text-charcoal-400 uppercase tracking-[0.2em] mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2 text-charcoal-500 text-sm">
              <li>AI Integrations</li>
              <li>App Publishing</li>
              <li>Hosting</li>
              <li>Domains</li>
              <li>Databases</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium text-charcoal-400 uppercase tracking-[0.2em] mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-800">
          <p className="text-charcoal-600 text-xs">
            &copy; {currentYear} 1008 Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
