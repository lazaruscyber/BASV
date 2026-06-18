import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const ServicesTeaser: FC = () => {
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
            <span className="eyebrow">Services</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight">
            What we build.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border border-ivory-200 p-8"
              >
                <IconComponent size={36} className="text-charcoal-900 mb-5" />
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-burgundy-800 hover:text-burgundy-700 transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
