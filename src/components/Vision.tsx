import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Vision: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="section-padding bg-ivory-100/50" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-burgundy-800" />
            <span className="text-xs text-burgundy-800 uppercase tracking-[0.2em]">
              Statement of Intent
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight mb-10">
            Rationale
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-4 uppercase tracking-wide text-sm">
              The Digital Foundation
            </h3>

            <p className="text-charcoal-600 leading-relaxed mb-6">
              The <a href="https://epitaka.org" target="_blank" rel="noopener noreferrer" className="text-burgundy-800 underline underline-offset-2 decoration-charcoal-300">epitaka.org</a> project 
              has produced a comprehensive English translation of the Pāli Canon using computational 
              models trained directly on traditional Burmese Nissaya methodologies—word-for-word 
              grammatical parsing as practiced by Myanmar Pāli scholars.
            </p>

            <p className="text-charcoal-600 leading-relaxed mb-6">
              This Nissaya-aligned approach yields a translation with structural fidelity 
              to the source Pāli text that surpasses dynamic Western translations, which 
              frequently prioritize readability over grammatical precision.
            </p>

            <p className="text-charcoal-600 leading-relaxed">
              The digital corpus provides a technically sound baseline suitable for 
              scholarly curation and print publication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="border-l border-charcoal-300 pl-6 mb-8">
              <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-4 uppercase tracking-wide text-sm">
                The NASV Mandate
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The NASV is a formal curation and print initiative. The Nissaya-aligned 
                digital text is subjected to editorial verification by qualified Myanmar 
                Pāli scholars, cross-referenced against the Commentaries (Aṭṭhakathā) and 
                Sub-commentaries (Ṭīkā).
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                The verified text is compiled into a definitive 7-volume parallel-text 
                print edition—Burmese Pāli and English in dual-column format—for use 
                as a reference standard.
              </p>
            </div>

            <div className="border-t border-ivory-300 pt-6">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-ivory-200">
                    <td className="py-3 pr-4 text-charcoal-500 font-medium">Digital Source</td>
                    <td className="py-3 text-charcoal-700">epitaka.org Nissaya-aligned translation</td>
                  </tr>
                  <tr className="border-b border-ivory-200">
                    <td className="py-3 pr-4 text-charcoal-500 font-medium">Pāli Recension</td>
                    <td className="py-3 text-charcoal-700">Chaṭṭhasaṅgīti (Sixth Council, 1956)</td>
                  </tr>
                  <tr className="border-b border-ivory-200">
                    <td className="py-3 pr-4 text-charcoal-500 font-medium">Verification</td>
                    <td className="py-3 text-charcoal-700">Myanmar Pāli scholars (editorial review)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-charcoal-500 font-medium">Output</td>
                    <td className="py-3 text-charcoal-700">7-volume parallel-text print edition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
