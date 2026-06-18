import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-ivory-100">
      <div className="container-max px-6 py-12 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-lg font-medium text-ivory-100">NASV</span>
              <span className="text-[10px] text-charcoal-500 uppercase tracking-[0.2em]">Tipiṭaka</span>
            </div>
            <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
              The Global Foundation for Pariyatti & Missionary Mission for the Theravāda Sasana.
            </p>
            <p className="text-charcoal-600 text-xs">
              We are in Myanmar, the United Kingdom, and Ireland.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-charcoal-400 uppercase tracking-[0.15em] mb-4">Contents</h4>
            <ul className="space-y-2">
              <li>
                <a href="#pipeline" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Our Missions
                </a>
              </li>
              <li>
                <a href="#volumes" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  View Volumes
                </a>
              </li>
              <li>
                <a href="#quality" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  In Myanmar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-charcoal-400 uppercase tracking-[0.15em] mb-4">Reference</h4>
            <ul className="space-y-2 text-charcoal-500 text-sm">
              <li><a href="https://epitaka.org" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal-300 transition-colors">Epitaka.org</a></li>
              <li><a href="https://base1008.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal-300 transition-colors">Pathan Tayar Mobile App</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800">
          <p className="text-charcoal-600 text-xs">
            © {currentYear} Pathan Tayar Foundation. Made with metta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
