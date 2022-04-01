import LogoCarousel from '../feature/LogoCarousel';
import { Section } from '../layout/Section';

const PartenersCarousel = () => {
  return (
    <>
      <Section
        title="Our Partners & Clients"
        image="/assets/images/symbol.svg"
        reverse="true"
      >
        <LogoCarousel />
      </Section>
    </>
  );
};

export default PartenersCarousel;
