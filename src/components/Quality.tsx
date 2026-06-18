import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';


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
              Reach Out To Us
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight mb-4">
            Pathan Tayar in Myanmar
          </h2>
          <p className="text-charcoal-500 text-base max-w-2xl leading-relaxed">
            We currently operate globally, with our main efforts focused nation-wide in Myanmar. Our products are centered towards the local Burmese population, and foreigners who are interested in the Theravāda Sasana. We are actively expanding our global reach, and looking for volunteers and contributors to help us with our global mission.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Quality;
