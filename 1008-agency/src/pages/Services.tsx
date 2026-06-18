import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';

const Services: FC = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

  return (
    <>
      <section className="section-padding pt-32 md:pt-40 pb-16 md:pb-24" ref={heroRef}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-burgundy-800" />
              <span className="eyebrow">Services</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal-950 leading-[1.1] tracking-tight mb-4">
              Built to your spec, not ours.
            </h1>
            <p className="text-charcoal-500 text-lg max-w-xl leading-relaxed">
              Three core practices. Engaged end-to-end or surgically — whichever fits.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceRow key={service.title} service={service} index={index} />
      ))}

      <section className="section-padding bg-ivory-100/50 text-center">
        <div className="container-max">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-950 leading-tight mb-6">
            Have a project in mind?
          </h2>
          <a
            href="mailto:1008agency@gmail.com?subject=Project%20Inquiry"
            className="btn-primary"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
};

interface ServiceRowProps {
  service: (typeof services)[number];
  index: number;
}

const ServiceRow: FC<ServiceRowProps> = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 === 1;
  const IconComponent = service.icon;

  return (
    <section
      className={`section-padding ${index % 2 === 0 ? 'bg-ivory-50' : 'bg-ivory-100/50'}`}
      ref={ref}
    >
      <div className="container-max">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isReversed ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full aspect-[16/10] object-cover border border-ivory-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <IconComponent size={36} className="text-charcoal-900 mb-4" />
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-950 leading-tight mb-6">
              {service.title}
            </h2>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              {service.longDescription}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-burgundy-800" />
              <span className="eyebrow">Deliverables</span>
            </div>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-burgundy-800 mt-0.5 shrink-0" />
                  <span className="text-sm text-charcoal-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
