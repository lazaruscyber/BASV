import { FC } from 'react';
import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import ServicesTeaser from '../components/sections/ServicesTeaser';
import FeaturedWork from '../components/sections/FeaturedWork';
import Approach from '../components/sections/Approach';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Products />
      <ServicesTeaser />
      <FeaturedWork />
      <Approach />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
