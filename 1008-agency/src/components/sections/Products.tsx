import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { products } from '../../data/products';

const Products: FC = () => {
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
            <span className="eyebrow">Products</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-950 leading-tight mb-4">
            Products, not just projects.
          </h2>
          <p className="text-charcoal-500 text-base max-w-3xl leading-relaxed">
            Beyond custom builds, we ship the things you need to launch — distribution,
            infrastructure, intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="border border-ivory-200 p-6"
              >
                <IconComponent size={24} className="text-burgundy-800 mb-4" />
                <h3 className="font-serif text-base font-medium text-charcoal-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
