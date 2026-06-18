import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Process from './pages/Process';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="min-h-screen bg-cream-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/process" element={<Process />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
