/* eslint-disable prettier/prettier */
import { Carousel } from '@trendyol-js/react-carousel';

import { PartnersAndClientsItem } from '../feature/PartnersAndClientsItem';
import useWindowDimensions from '../feature/UseWindowDimensions';
import { Section } from '../layout/Section';

const PartnersAndClients = () => {
  const { width } = useWindowDimensions();
  const showNrSlide = width != null && width <= 950 ? 3 : 5;

  return (
    <div className='mb-12'>
      <Section
        titleBlack="Our"
        titleBlue='Partners & Clients'
        image="/assets/images/symbol.svg"
        reverse="true"
        >
        <Carousel 
          show={showNrSlide} 
          slide={2} 
          transition={0.5} 
          swiping={true}  
          useArrowKeys={false} 
          className="carousel-container"
          rightArrow={<RightArrow />}
          leftArrow={<LeftArrow />}
        >
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
    </div>
  );
};

const RightArrow = () => {
  return (
    <div className='flex h-full items-center justify-center mr-[-20px] ml-10 cursor-pointer'>
      <img src='/icons/icon-right.svg' alt='right' className='rotate-180' />
    </div>
  )
}

const LeftArrow = () => {
  return (
    <div className='flex h-full items-center justify-center ml-[-20px] mr-10 cursor-pointer'>
      <img src='/icons/icon-left.svg' alt='left' />
    </div>
  )
}

export { PartnersAndClients };
