import { Meta } from '../layout/Meta';
import Navbar from '../layout/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { HomeBanner } from './HomeBanner';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <HomeBanner />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
