import { MainBannerText } from '../utils/motion/MainBannerText';
import { useState, useEffect } from 'react';

const styles = {
  backgroundImage: {
    background: "url('/assets/images/home-banner-opacity.jpg') no-repeat",
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
  const [transitionFast, setTransitionFast] = useState(false);
  const [repeat, setRepeat] = useState(0);

  useEffect(() => {

    setTransitionFast(false);
    setScale(true)
    setTimeout(() => {
      setStart(true);
      setTitle('Trusted partner for thriving businesses');
    }, 1000);

    setTimeout(() => {
      setStart(false);
      setOpacityStyle(true);
      setTransitionFast(true);
    }, 5000);

    setTimeout(() => {
      setTransitionFast(true);
    }, 5200);

    setTimeout(() => {
      setScale(false)
      setBackgroundImage(false);
    }, 5500);
  
    setTimeout(() => {
      setOpacityStyle(false);
      setStart(true);
      setLogo(true);
    }, 5900);

    setTimeout( () => {
      setStart(false);
      setOpacityStyle(true);
      setTransitionFast(true);
    }, 9900);

    setTimeout(() => {
      setTitle('');
      setBackgroundImage(true);
      setOpacityStyle(false);
      setLogo(false);
      setRepeat(repeat + 1);
    }, 10900);

},[repeat])

  return (
    <div
      style={
        backgroundImage ? styles.backgroundImage : styles.backgroundColor
      }
      className={`
        ${opacityStyle ? 'opacity-0' : 'opacity-100'} 
        ${scale ? 'scale-125' : ''} 
        ${transitionFast ? 'transition-2s' : 'transition-30s'}
      `}
    >
      <div className="container h-full flex flex-col justify-center items-center text-center text-white">
        <p
          className="text-3xl lg:text-6xl sm:my-8 transition"
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
