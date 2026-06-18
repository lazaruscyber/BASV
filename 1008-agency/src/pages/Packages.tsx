import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { packages } from '../data/packages';

const Packages: FC = () => {
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
              <span className="eyebrow">Packages</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal-950 leading-[1.1] tracking-tight mb-4">
              Transparent pricing, premium output.
            </h1>
            <p className="text-charcoal-500 text-lg max-w-xl leading-relaxed">
              Three starting points. Every project is quoted to scope after a free discovery call.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ivory-100/50 pt-0">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.tier} pkg={pkg} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-16 border-t border-ivory-200 pt-10"
          >
            <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-3">
              Need something different?
            </h3>
            <p className="text-sm text-charcoal-500 max-w-lg mx-auto leading-relaxed">
              Tell us what you are building and we will quote to scope.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ivory-50 text-center">
        <div className="container-max">
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

interface PackageCardProps {
  pkg: (typeof packages)[number];
  index: number;
}

const PackageCard: FC<PackageCardProps> = ({ pkg, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative p-8 ${
        pkg.popular
          ? 'border-2 border-burgundy-800'
          : 'border border-ivory-200'
      }`}
    >
      {pkg.popular && (
        <span className="absolute top-4 right-4 text-[9px] font-medium uppercase tracking-[0.15em] text-ivory-50 bg-burgundy-800 px-3 py-1">
          Most popular
        </span>
      )}

      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-400 mb-4">
        {pkg.tier}
      </p>

      <p className="font-serif text-4xl font-medium text-charcoal-950 mb-1">
        <span className="text-charcoal-400">{pkg.price.startsWith('$') ? '$' : ''}</span>
        {pkg.price.replace('$', '')}
      </p>
      <p className="text-sm text-charcoal-400 mb-8">{pkg.priceNote}</p>

      <div className="border-t border-ivory-200 pt-6 mb-8">
        <ul className="space-y-3">
          {pkg.features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-3">
              <Check size={14} className="text-burgundy-800 mt-0.5 shrink-0" />
              <span className="text-sm text-charcoal-600">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="mailto:1008agency@gmail.com?subject=Project%20Inquiry"
        className={`w-full justify-center ${
          pkg.popular ? 'btn-primary' : 'btn-secondary'
        }`}
      >
        Get started
        <ArrowRight size={14} />
      </a>
    </motion.div>
  );
};

export default Packages;
