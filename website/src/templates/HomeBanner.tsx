import { MainBannerText } from '../framer/MainBannerText';
import { useState, useEffect } from 'react';

const HomeBanner = () => {
  const [title, setTitle] = useState('Trusted partner for thriving businesses');
  const [start, setStart] = useState(true);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setStart(false);
      clearInterval(interval2);
    }, 2700);
  
    const interval = setInterval(() => {
      setStart(true);
      setTitle('Finhub Scaling Solutions');
      clearInterval(interval);
    }, 3000);
    return(() => {
        clearInterval(interval)
        clearInterval(interval2)
    })
},[])

  


  return (
    <div
      style={{
        background: "url('/assets/images/home-banner.jpg') no-repeat",
        backgroundSize: 'cover',
        height: 'calc(100vh - 75px)',
      }}
    >
      <div className="container h-full flex flex-col justify-center items-center text-center text-white">
        <p
          className="text-3xl lg:text-6xl my-8 transition"
          style={{
            filter: 'drop-shadow(2px 4px 6px black)'
          }}
        >
          <MainBannerText title={title} start={start} />
        </p>
      </div>
    </div>
  );
};

export { HomeBanner };
