import { FC, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const glowX = useTransform(springX, [0, 1], ['0%', '100%']);
  const glowY = useTransform(springY, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          left: glowX,
          top: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(171, 31, 72, 0.08) 0%, rgba(228, 173, 16, 0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-burgundy-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl" />

        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-[0.03]"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="50" y="50" width="700" height="500" stroke="currentColor" strokeWidth="1" />
          <rect x="70" y="70" width="660" height="460" stroke="currentColor" strokeWidth="0.5" />
          <line x1="400" y1="50" x2="400" y2="550" stroke="currentColor" strokeWidth="0.5" />
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1="70" y1={90 + i * 22} x2="390" y2={90 + i * 22} stroke="currentColor" strokeWidth="0.3" />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i + 20} x1="410" y1={90 + i * 22} x2="730" y2={90 + i * 22} stroke="currentColor" strokeWidth="0.3" />
          ))}
        </svg>
      </div>

      <div className="container-max relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal-950 leading-[1.15] tracking-tight mb-4"
        >
          The Nissaya Aligned
          <br />
          <span className="text-burgundy-900">Standard Version</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
          className="font-serif text-lg md:text-xl text-charcoal-400 italic mb-8"
        >
          NASV
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-charcoal-600 leading-relaxed mb-4 font-light"
        >
          The Global Foundation for Pariyatti & Missionary Mission for the Theravāda Sasana.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.45, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-base text-charcoal-500 leading-relaxed mb-12 font-light"
        >
          The digital text is subjected to editorial verification by Myanmar Pāli scholars
          and compiled into a definitive 7-volume parallel-text print edition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pipeline"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-burgundy-900 text-ivory-50 text-sm font-medium rounded-sm hover:bg-burgundy-800 transition-colors duration-200"
          >
            Translation Methodology
            <ArrowRight size={16} />
          </a>
          <a
            href="#volumes"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-charcoal-700 text-sm font-medium rounded-sm border border-charcoal-300 hover:border-charcoal-400 transition-colors duration-200"
          >
            <BookOpen size={16} />
            Print Specification
          </a>
        </motion.div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={statsInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-20 flex items-center justify-center gap-10 text-charcoal-400"
        >
          <div className="text-center">
            <div className="font-serif text-2xl font-medium text-charcoal-600">VII</div>
            <div className="text-[10px] uppercase tracking-[0.15em] mt-1">Volumes</div>
          </div>
          <div className="w-px h-8 bg-charcoal-200" />
          <div className="text-center">
            <div className="font-serif text-2xl font-medium text-charcoal-600">IV</div>
            <div className="text-[10px] uppercase tracking-[0.15em] mt-1">Nikāyas</div>
          </div>
          <div className="w-px h-8 bg-charcoal-200" />
          <div className="text-center">
            <div className="font-serif text-2xl font-medium text-charcoal-600">VI</div>
            <div className="text-[10px] uppercase tracking-[0.15em] mt-1">Council</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
