import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Search, Pen, Shield, LucideIcon } from 'lucide-react';

interface PipelineStep {
  stage: string;
  title: string;
  paliTitle: string;
  description: string;
  icon: string;
}

const pipelineSteps: PipelineStep[] = [
  {
    stage: 'I',
    title: 'Vihara Donation',
    paliTitle: '-',
    description: 'Handeling donations to various Viharas and Pagodas in Myanmar (Burma).',
    icon: 'book',
  },
  {
    stage: 'II',
    title: 'App Development',
    paliTitle: '-',
    description: 'Developing Buddhist apps for the ease of use of followers.',
    icon: 'search',
  },
  {
    stage: 'III',
    title: 'Pariyatti Publication',
    paliTitle: '-',
    description: 'Publishing Buddhist books and literature for the benefit of the Sasana.',
    icon: 'pen',
  },
  {
    stage: 'IV',
    title: 'Global Missionary',
    paliTitle: '-',
    description: 'Bringing the light of the Dhamma to the world through missionary work and Theravada outreach programs.',
    icon: 'shield',
  },
];

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  search: Search,
  pen: Pen,
  shield: Shield,
};

const Pipeline: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pipeline" className="section-padding bg-charcoal-950 text-ivory-50" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-charcoal-600" />
            <span className="text-xs text-charcoal-400 uppercase tracking-[0.2em]">
              What We Do
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            Our Missions
          </h2>
          <p className="text-charcoal-400 text-base max-w-2xl leading-relaxed">
            A quick glance at the four aspects of our everlasting mission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipelineSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || BookOpen;
            return (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="border border-charcoal-800 p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center border border-charcoal-700">
                      <IconComponent size={16} className="text-charcoal-400" />
                    </div>
                    <span className="text-xs text-charcoal-600 tracking-wider uppercase">
                      Stage {step.stage}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-serif text-lg font-medium text-ivory-100 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-charcoal-500 italic tracking-wide">
                      {step.paliTitle}
                    </p>
                  </div>

                  <p className="text-charcoal-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
