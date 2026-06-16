import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Columns, BookMarked, LucideIcon } from 'lucide-react';

interface QualityStandard {
  title: string;
  description: string;
  icon: string;
}

const qualityStandards: QualityStandard[] = [
  {
    title: 'Contributor Documentation',
    description: 'Each volume records the names, monastic lineages (upāsampadā paramparā), and institutional affiliations of all participating Sayadaws and Pāli scholars.',
    icon: 'eye',
  },
  {
    title: 'Parallel-Text Verification',
    description: 'The Pāli source text is printed in dual-column alignment with the English translation, enabling direct cross-referencing by external scholars and reviewers.',
    icon: 'columns',
  },
  {
    title: 'Controlled Terminology',
    description: 'A maintained glossary enforces consistent rendering of all technical terms in accordance with the Theravāda Pāriyatti framework. No term is translated ad hoc.',
    icon: 'bookMarked',
  },
];

const iconMap: Record<string, LucideIcon> = {
  eye: Eye,
  columns: Columns,
  bookMarked: BookMarked,
};

const Quality: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="quality" className="section-padding bg-ivory-100/50" ref={ref}>
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
              Editorial Standards
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight mb-4">
            Quality Assurance
          </h2>
          <p className="text-charcoal-500 text-base max-w-2xl leading-relaxed">
            The following protocols are maintained throughout the edition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {qualityStandards.map((standard, index) => {
            const IconComponent = iconMap[standard.icon] || Eye;
            return (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border border-ivory-200 p-6"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-charcoal-200 mb-5">
                  <IconComponent size={16} className="text-charcoal-500" />
                </div>

                <h3 className="font-serif text-base font-medium text-charcoal-900 mb-3">
                  {standard.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {standard.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 border-t border-charcoal-200 pt-8"
        >
          <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-4">
            Editorial Principles
          </h3>
          <p className="text-charcoal-500 leading-relaxed mb-8 max-w-3xl">
            All translation decisions are documented and subject to peer review.
            Terminology, formatting, and editorial conventions are maintained in a
            public register accompanying each volume.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="border-l border-charcoal-200 pl-4">
              <span className="text-sm text-charcoal-700 font-medium block mb-1">Reviewed</span>
              <p className="text-xs text-charcoal-500">
                Passages examined by multiple qualified Pāli scholars prior to publication.
              </p>
            </div>
            <div className="border-l border-charcoal-200 pl-4">
              <span className="text-sm text-charcoal-700 font-medium block mb-1">Documented</span>
              <p className="text-xs text-charcoal-500">
                Translation decisions recorded with supporting textual references.
              </p>
            </div>
            <div className="border-l border-charcoal-200 pl-4">
              <span className="text-sm text-charcoal-700 font-medium block mb-1">Verifiable</span>
              <p className="text-xs text-charcoal-500">
                Pāli–English parallel layout permits direct source comparison.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quality;
