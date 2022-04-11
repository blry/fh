import { useState } from 'react';

const HomeBanner = () => {
  const [title, setTitle] = useState('Finhub Scaling Solutions');
  const interval = setInterval(() => {
    setTitle('Trusted partner for thriving businesses');
    clearInterval(interval);
  }, 2000);

  return (
    <div
      style={{
        background: "url('/assets/images/home-banner.jpg') no-repeat",
        backgroundSize: 'cover',
        height: 'calc(100vh - 75px)',
      }}
    >
      <div className="container h-full max-w-screen-lg flex flex-col justify-center items-center text-center text-white">
        <p
          className="text-3xl lg:text-6xl my-8 transition"
          style={{
            filter: 'drop-shadow(2px 4px 6px black)',
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export { HomeBanner };
