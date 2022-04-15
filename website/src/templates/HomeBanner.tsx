import { MainBannerText } from '../framer/MainBannerText';
import { useState, useEffect } from 'react';

const styles = {
  backgroundImage: {
    background: "url('/assets/images/home-banner.jpg') no-repeat",
    backgroundSize: 'cover',
    height: 'calc(100vh - 75px)',
  },
  backgroundColor: {
    backgroundColor: 'white' as 'white',
    height: 'calc(100vh - 75px)',
    transition: '1s'
  }
}

const HomeBanner = () => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(true);
  const [opacityStyle, setOpacityStyle] = useState(false);
  const [logo, setLogo] = useState(false);
  const [scale, setScale] = useState(false);
  const [transition, setTransition] = useState(false);

  useEffect(() => {

    setScale(true)
    const firstInterval = setInterval(() => {
      setStart(true);
      setTitle('Trusted partner for thriving businesses');
      clearInterval(firstInterval);
    }, 2000);

    const endFirstInt = setInterval(() => {
      setStart(false);
      setOpacityStyle(true);
      setTransition(true);
      clearInterval(endFirstInt);
    }, 5500);

    const transitionInt = setInterval(() => {
      setTransition(true);
      clearInterval(transitionInt);
    }, 6000);

    const opacityInt = setInterval(() => {
      setScale(false)
      setBackgroundImage(false);
      clearInterval(opacityInt);
    }, 6500);
  
    const startSecondInt = setInterval(() => {
      setOpacityStyle(false);
      setStart(true);
      setLogo(true);
      clearInterval(startSecondInt);
    }, 6900);

    return(() => {
        clearInterval(firstInterval)
        clearInterval(opacityInt)
        clearInterval(transitionInt)
        clearInterval(endFirstInt)
        clearInterval(startSecondInt)
    })
},[])

  


  return (
    <div
      style={
        backgroundImage ? styles.backgroundImage : styles.backgroundColor
      }
      className={`
        ${opacityStyle ? 'opacity-0' : ''} 
        ${scale ? 'scale-125' : ''} 
        ${transition ? 'transition-2s' : 'transition-30s'}
      `}
    >
      <div className="container h-full flex flex-col justify-center items-center text-center text-white">
        <p
          className="text-3xl lg:text-6xl my-8 transition"
          style={{
            filter: `${ logo ? '' : 'drop-shadow(2px 4px 6px black)'}`
          }}
        >
          <MainBannerText title={title} start={start} logo={logo} />
        </p>
      </div>
    </div>
  );
};

export { HomeBanner };
