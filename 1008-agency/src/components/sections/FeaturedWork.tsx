import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/projects';

const FeaturedWork: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="section-padding bg-ivory-100/50" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-burgundy-800" />
            <span className="eyebrow">Selected Work</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight">
            Recent launches.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden border border-ivory-200 mb-5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900">
                {project.name}
              </h3>
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal-400 mt-1">
                {project.category} &middot; {project.year}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
