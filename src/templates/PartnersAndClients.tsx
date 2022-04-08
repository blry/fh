/* eslint-disable prettier/prettier */
import { Carousel } from '@trendyol-js/react-carousel';

import { PartnersAndClientsItem } from '../feature/PartnersAndClientsItem';
import useWindowDimensions from '../feature/UseWindowDimensions';
import { Section } from '../layout/Section';


const PartnersAndClients = () => {
  const { width } = useWindowDimensions();
  const showNrSlide = width != null && width <= 950 ? 3 : 5;

  return(
    <Section
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
    >
      <Carousel show={showNrSlide} slide={2} transition={0.5} swiping={true}  useArrowKeys={false} className="carousel-container">
        <PartnersAndClientsItem 
          image="/assets/images/our partners/Andy's.svg"
          imageAlt=""
        />

        <PartnersAndClientsItem 
          image="/assets/images/our partners/DAAC Hermes.svg"
          imageAlt=""
        />
              
        <PartnersAndClientsItem 
          image="/assets/images/our partners/EKSON.svg"
          imageAlt=""
        />

        <PartnersAndClientsItem 
          image="/assets/images/our partners/GREEN LANDSCAPE.svg"
          imageAlt=""
        />

        <PartnersAndClientsItem 
          image="/assets/images/our partners/Healthity.svg"
          imageAlt=""
        />
              
        <PartnersAndClientsItem 
          image="/assets/images/our partners/ICOD.svg"
          imageAlt=""
        />

        <PartnersAndClientsItem 
          image="/assets/images/our partners/Novello.svg"
          imageAlt=""
        />

        <PartnersAndClientsItem 
          image="/assets/images/our partners/Tecnogen.svg"
          imageAlt=""
        />
              
        <PartnersAndClientsItem 
          image="/assets/images/our partners/Vioinox.svg"
          imageAlt=""
        />
      </Carousel>
    </Section>
  );
};

export { PartnersAndClients };
