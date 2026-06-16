import { FC } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Pipeline from './components/Pipeline';
import Volumes from './components/Volumes';
import Quality from './components/Quality';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Pipeline />
        <Volumes />
        <Quality />
      </main>
      <Footer />
    </div>
  );
};

export default App;
