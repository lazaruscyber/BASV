import { FC, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden pt-24"
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
      </div>

      <div className="container-max relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="eyebrow mb-6"
        >
          1008 AGENCY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal-950 leading-[1.15] tracking-tight mb-4"
        >
          Engineered to ship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-charcoal-600 leading-relaxed mb-4 font-light"
        >
          Websites, web apps, and cross-platform products — built once, built right, built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="mailto:1008agency@gmail.com?subject=Project%20Inquiry"
            className="btn-primary"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            className="btn-secondary"
          >
            See our work
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
            <div className="font-serif text-2xl font-medium text-charcoal-600">5</div>
            <div className="text-[10px] uppercase tracking-[0.15em] mt-1">Products</div>
          </div>
          <div className="w-px h-8 bg-charcoal-200" />
          <div className="text-center">
            <div className="font-serif text-2xl font-medium text-charcoal-600">3</div>
            <div className="text-[10px] uppercase tracking-[0.15em] mt-1">Services</div>
          </div>
          <div className="w-px h-8 bg-charcoal-200" />
          <div className="text-center">
            <div className="font-serif text-2xl font-medium text-charcoal-600">4</div>
            <div className="text-[10px] uppercase tracking-[0.15em] mt-1">Phases</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
