import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'Built once.',
    description: 'A single codebase. No fragmented teams, no divergent platforms.',
  },
  {
    number: '02',
    title: 'Built right.',
    description: 'Premium defaults: accessible, performant, type-safe from day one.',
  },
  {
    number: '03',
    title: 'Built to last.',
    description: 'Tested, documented, and ready for the team that inherits it.',
  },
];

const Approach: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-ivory-50" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-burgundy-800" />
            <span className="eyebrow">Approach</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight mb-4">
            Quietly opinionated.
          </h2>
          <p className="text-charcoal-500 text-base max-w-2xl leading-relaxed">
            We do not ship generic. Every line of code, every pixel, every line of copy earns its place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-ivory-200">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`py-8 px-0 md:px-8 border-b border-ivory-200 ${
                index > 0 ? 'md:border-l md:border-ivory-200' : ''
              }`}
            >
              <span className="font-serif text-3xl font-medium text-charcoal-200 block mb-3">
                {principle.number}
              </span>
              <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-3">
                {principle.title}
              </h3>
              <p className="text-sm text-charcoal-500 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
