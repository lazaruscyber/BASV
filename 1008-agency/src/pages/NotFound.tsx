import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <p className="font-serif text-[8rem] sm:text-[12rem] font-medium text-charcoal-100 leading-none">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-950 mb-4">
          Page not found.
        </h1>
        <p className="text-charcoal-500 mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
