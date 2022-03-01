const HomeBanner = () => (
  <div
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'bottom right',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url('/assets/images/home-banner.jpg')",
      filter: 'grayscale(70%)',
    }}
  >
    <div className="container h-screen max-w-screen-lg flex flex-col justify-center items-center text-center text-white">
      <p className="text-3xl lg:text-6xl my-8">LOREM IPSUM</p>
      <p className="text-xl lg:text-3xl font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
);

export { HomeBanner };
