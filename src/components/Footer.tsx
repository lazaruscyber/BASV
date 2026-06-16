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
              Nissaya Aligned Standard Version. A curation and print initiative
              based on the epitaka.org Nissaya-aligned digital translation.
            </p>
            <p className="text-charcoal-600 text-xs">
              In service of the Theravāda Pāriyatti tradition.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-charcoal-400 uppercase tracking-[0.15em] mb-4">Contents</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vision" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Rationale
                </a>
              </li>
              <li>
                <a href="#pipeline" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#volumes" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Volume Index
                </a>
              </li>
              <li>
                <a href="#quality" className="text-charcoal-500 text-sm hover:text-charcoal-300 transition-colors">
                  Editorial Standards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-charcoal-400 uppercase tracking-[0.15em] mb-4">Reference</h4>
            <ul className="space-y-2 text-charcoal-500 text-sm">
              <li><a href="https://epitaka.org" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal-300 transition-colors">epitaka.org</a></li>
              <li>Chaṭṭhasaṅgīti Recension</li>
              <li>Burmese Nissaya Method</li>
              <li>Theravāda Pāriyatti</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800">
          <p className="text-charcoal-600 text-xs">
            © {currentYear} Nissaya Aligned Standard Version. Prepared in Myanmar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
