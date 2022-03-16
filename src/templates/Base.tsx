import { Meta } from '../layout/Meta';
import Navbar from '../layout/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { AboutUs } from './AboutUs';
import { Footer } from './Footer';
import { HomeBanner } from './HomeBanner';
import { OtherLinks } from './OtherLinks';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <HomeBanner />
    <AboutUs />
    <OtherLinks />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
