import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/process';

const Process: FC = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

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
              <span className="eyebrow">Process</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal-950 leading-[1.1] tracking-tight mb-4">
              How we work.
            </h1>
            <p className="text-charcoal-500 text-lg max-w-xl leading-relaxed">
              Four phases. Predictable, transparent, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ivory-100/50 pt-0" ref={timelineRef}>
        <div className="container-max">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-ivory-300 -translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0 }}
                  animate={timelineInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.12 }}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                    index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-burgundy-800 bg-ivory-100 items-center justify-center z-10">
                    <span className="font-serif text-sm font-medium text-charcoal-900">
                      {step.number}
                    </span>
                  </div>

                  <div
                    className={`${
                      index % 2 === 0
                        ? 'md:text-right md:pr-16'
                        : 'md:text-left md:pl-16'
                    }`}
                  >
                    <span className="md:hidden font-serif text-3xl font-medium text-burgundy-200 block mb-2">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-950 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-500 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-px bg-burgundy-800" />
                      <span className="eyebrow">Deliverables</span>
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-3 py-1.5 bg-ivory-50 border border-ivory-200 text-charcoal-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory-50 text-center">
        <div className="container-max">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-950 leading-tight mb-6">
            Start with a conversation.
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

export default Process;
