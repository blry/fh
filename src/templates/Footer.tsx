import { Background } from '../background/Background';

const Footer = () => (
  <Background color="bg-neutral-600">
    <div
      className="container flex flex-col lg:flex-row py-5 justify-between items-center z-20 text-sm"
      style={{ color: '#eeeeee' }}
    >
      <img
        src="/assets/images/logo-gray.png"
        style={{ height: '40px' }}
        alt="finhubss logo"
      />

      <p>+4312675393</p>
      <a href="mail:info@finhubss.com">info@finhubss.com</a>
      <p>Finhub Software Solutions</p>
      <p>Beatrixgasse 27, 1030 Wien, Austria</p>
    </div>

    <div
      className="flex flex-col items-center text-center text-sm py-2"
      style={{ borderTop: '1px solid #666666', color: '#a3a3a3' }}
    >
      <p>© 2020 - 2021 FinHub | Software Solutions</p>
    </div>
  </Background>
);

export { Footer };
