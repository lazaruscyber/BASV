import { FC, useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials, clientWordmarks } from '../../data/testimonials';

const LogoMarquee: FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let pos = 0;

    const animate = () => {
      if (!isPaused) {
        pos += 0.5;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.style.transform = `translateX(-${pos}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const doubled = [...clientWordmarks, ...clientWordmarks];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={scrollRef} className="flex items-center gap-16 whitespace-nowrap">
        {doubled.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="font-serif text-xl text-charcoal-300 tracking-wider shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Testimonials: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-ivory-100/50" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-burgundy-800" />
            <span className="eyebrow">Clients</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight">
            Trusted by teams shipping ambitious work.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-14"
        >
          <LogoMarquee />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.1 }}
              className="relative border border-ivory-200 p-8"
            >
              <span className="absolute top-3 left-5 font-serif text-[6rem] leading-none text-burgundy-800/[0.06] select-none pointer-events-none">
                &ldquo;
              </span>
              <p className="relative font-serif text-lg text-charcoal-900 italic leading-relaxed mb-8 pt-4">
                {testimonial.quote}
              </p>
              <p className="relative text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal-400">
                &mdash; {testimonial.name}, {testimonial.role}, {testimonial.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
