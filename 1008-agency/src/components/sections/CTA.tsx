import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-charcoal-950 py-24 md:py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-charcoal-600" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold-600">
              Let&rsquo;s Talk
            </span>
            <div className="w-12 h-px bg-charcoal-600" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-ivory-50 leading-tight mb-6">
            Ready to ship?
          </h2>

          <p className="text-base sm:text-lg text-charcoal-400 leading-relaxed mb-10">
            Tell us what you are building. We will come back within one business day.
          </p>

          <a
            href="mailto:1008agency@gmail.com?subject=Project%20Inquiry"
            className="btn-primary bg-ivory-50 text-charcoal-950 hover:bg-ivory-100"
          >
            Start a project
            <ArrowRight size={16} />
          </a>

          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal-500">
            Support:{' '}
            <a
              href="mailto:1008helpcenter@gmail.com"
              className="text-gold-700 underline underline-offset-2 hover:text-gold-600 transition-colors"
            >
              1008helpcenter@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
