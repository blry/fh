import { Background } from '../background/Background';

const Footer = () => (
  <Background color="bg-neutral-600">
    <div
      className="container flex flex-col lg:flex-row py-5 justify-between items-center z-20 text-sm"
      style={{ color: '#eeeeee' }}
    >
      <div className="flex items-center text-white" style={{fontSize: '13pt'}}>
        <img
          src="/assets/images/logo-gray.png"
          style={{ height: '35px' }}
          alt="Finhub Software Solutions logo"
        />
        Scaling Solutions
      </div>

      <p className="pt-1">+4312675393</p>
      <a className="pt-1" href="mail:info@finhubss.com">
        info@finhubss.com
      </a>
      <p className="pt-1">FINHUB AC GmbH & Co KG</p>
      <p className="pt-1">Beatrixgasse 27, 1030 Wien, Austria</p>
    </div>

    <div
      className="flex flex-col items-center text-center text-sm py-2"
      style={{ borderTop: '1px solid #666666', color: '#a3a3a3' }}
    >
      <p>© 2020 - {new Date().getFullYear()} FinHub | Software Solutions</p>
    </div>
  </Background>
);

export { Footer };
