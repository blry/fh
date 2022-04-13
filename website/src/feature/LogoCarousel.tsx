import { useState } from 'react';

const logos = [
  { src: '/icons/icon-andys.svg' },
  { src: '/icons/icon-novello.svg' },
  { src: '/icons/icon-daac.svg' },
  { src: '/icons/icon-icd.svg' },
  { src: '/icons/icon-tecnogen.svg' },
  { src: '/icons/icon-vioinox.svg' },
  { src: '/icons/icon-healttheaty.svg' },
  { src: '/icons/icon-ekson.svg' },
  { src: '/icons/icon-greenlandscape.svg' },
];

const LogoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (operation: 'increment' | 'decrement') => {
    const changeIndex = 155;
    const visibleElement = 6;
    if (operation === 'increment') {
      if (activeIndex < (logos.length - visibleElement) * changeIndex) {
        setActiveIndex(activeIndex + changeIndex);
      }
    } else if (operation === 'decrement') {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - changeIndex);
      }
    }
  };

  return (
    <>
      <div className="flex items-center">
        <div
          onClick={() => updateIndex('decrement')}
          className="cursor-pointer w-5"
        >
          <img src="/icons/icon-left.svg" alt="left" />
        </div>
        <div className="flex items-center overflow-hidden mr-5">
          <div
            className="flex items-center"
            style={{
              transform: `translateX(-${activeIndex}px)`,
              transition: '0.5s',
            }}
          >
            <div className="flex ml-3 mr-3">
              {logos.map((logo) => (
                <div
                  key={logo.src}
                  style={{
                    margin: '0 15px',
                    background: `url(${logo.src}) no-repeat`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    width: '125px',
                    height: '92px',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div
          onClick={() => updateIndex('increment')}
          className="cursor-pointer w-5"
        >
          <img
            src="/icons/icon-right.svg"
            alt="right"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
