import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';

const PLACEHOLDER_PDF = 'https://example.com/nasv-sample.pdf';

interface VolumeEntry {
  volume: string;
  title: string;
  subtitle: string;
  description: string;
}

const volumes: VolumeEntry[] = [
  {
    volume: 'I',
    title: 'Dīgha Nikāya',
    subtitle: 'Long Discourses',
    description: '34 extended suttas addressing doctrine, contemplative practice, and the renunciative life. Presented in parallel Pāli–English format.',
  },
  {
    volume: 'II–III',
    title: 'Majjhima Nikāya',
    subtitle: 'Middle-Length Discourses',
    description: '152 suttas of intermediate length, constituting the central doctrinal and dialogic corpus of the Sutta Piṭaka.',
  },
  {
    volume: 'IV–V',
    title: 'Saṃyutta Nikāya',
    subtitle: 'Connected Discourses',
    description: 'Thematically grouped collection organized by subject—khandha, āyatana, magga—across 56 saṃyuttas.',
  },
  {
    volume: 'VI–VII',
    title: 'Aṅguttara Nikāya',
    subtitle: 'Numbered Discourses',
    description: 'Numerically arranged collection, organized in ascending sets from ones (eka) through elevens (ekādasa).',
  },
];

const Volumes: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="volumes" className="section-padding bg-ivory-50" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-burgundy-800" />
            <span className="text-xs text-burgundy-800 uppercase tracking-[0.2em]">
              Publication
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight mb-4">
            Volume Index
          </h2>
          <p className="text-charcoal-500 text-base max-w-3xl leading-relaxed">
            Seven volumes, printed in parallel dual-column format (Burmese Pāli | NASV English)
            on 27–35 GSM paper. The standard 40-volume Burmese edition is condensed
            without abridgement.
          </p>
        </motion.div>

        {/* Table layout for desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="hidden md:block"
        >
          <div className="border-t border-charcoal-200">
            <div className="grid grid-cols-12 gap-4 py-3 border-b border-charcoal-200 text-xs text-charcoal-500 uppercase tracking-wider">
              <div className="col-span-1">Vol.</div>
              <div className="col-span-3">Title</div>
              <div className="col-span-2">Subtitle</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-2" />
            </div>
            {volumes.map((vol, index) => (
              <motion.div
                key={vol.volume}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.08 }}
                className="grid grid-cols-12 gap-4 py-5 border-b border-ivory-200 hover:bg-ivory-100/50 transition-colors duration-200 items-center"
              >
                <div className="col-span-1 font-serif text-sm text-burgundy-800 font-medium pt-0.5">
                  {vol.volume}
                </div>
                <div className="col-span-3">
                  <span className="font-serif text-lg text-charcoal-900">{vol.title}</span>
                </div>
                <div className="col-span-2 text-sm text-charcoal-500 italic pt-0.5">
                  {vol.subtitle}
                </div>
                <div className="col-span-4 text-sm text-charcoal-600 leading-relaxed">
                  {vol.description}
                </div>
                <div className="col-span-2 flex justify-end">
                  <a href={PLACEHOLDER_PDF} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <Download size={13} />
                    Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Card layout for mobile */}
        <div className="md:hidden space-y-4">
          {volumes.map((vol, index) => (
            <motion.article
              key={vol.volume}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-ivory-200 p-5"
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-serif text-lg text-charcoal-900">{vol.title}</span>
                <span className="text-xs text-burgundy-800 font-medium">{vol.volume}</span>
              </div>
              <p className="text-xs text-charcoal-500 italic mb-3">{vol.subtitle}</p>
              <p className="text-sm text-charcoal-600 leading-relaxed mb-4">{vol.description}</p>
              <a href={PLACEHOLDER_PDF} target="_blank" rel="noopener noreferrer" className="btn-download">
                <Download size={13} />
                Download PDF
              </a>
            </motion.article>
          ))}
        </div>

        {/* Material specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 border border-charcoal-200 p-6"
        >
          <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-6">
            Material Specification
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="border-l border-charcoal-200 pl-4">
              <span className="text-charcoal-500 text-xs uppercase tracking-wider block mb-1">Paper</span>
              <span className="text-charcoal-700">27–35 GSM lightweight opaque</span>
            </div>
            <div className="border-l border-charcoal-200 pl-4">
              <span className="text-charcoal-500 text-xs uppercase tracking-wider block mb-1">Typography</span>
              <span className="text-charcoal-700">8.5–9pt body (Brill / Gentium Plus)</span>
            </div>
            <div className="border-l border-charcoal-200 pl-4">
              <span className="text-charcoal-500 text-xs uppercase tracking-wider block mb-1">Binding</span>
              <span className="text-charcoal-700">Smyth-sewn case binding</span>
            </div>
            <div className="border-l border-charcoal-200 pl-4">
              <span className="text-charcoal-500 text-xs uppercase tracking-wider block mb-1">Cover</span>
              <span className="text-charcoal-700">Buckram cloth, gold foil stamp</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 border border-charcoal-200 p-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-lg text-charcoal-800 mb-1">
                Vinaya Piṭaka & Abhidhamma Piṭaka
              </p>
              <p className="text-sm text-charcoal-500">
                Subsequent volumes are in preparation, extending the edition
                to encompass the complete Tipiṭaka.
              </p>
            </div>
            <span className="text-xs text-charcoal-400 uppercase tracking-wider whitespace-nowrap">
              Forthcoming
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volumes;
