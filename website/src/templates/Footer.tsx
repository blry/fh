import { Background } from '../background/Background';

const styles = {
  footer: {
    height: '40px',
    color: 'white',
    fontSize: '10pt',
    display: 'flex',
    justifyContent: 'space-around',
  },
  footerElem: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 30px'
  },
  footerElemText: {
    marginLeft: '13px',
    whiteSpace: 'nowrap' as 'nowrap'
  },
}

const Footer = () => (
  <Background color="bg-app-color-400">
    <div
      className="container flex flex-col xl:flex-row py-5 justify-center items-center z-20 text-sm"
      style={{ color: '#eeeeee' }}
    >
      <div className="flex mr-8 items-center whitespace-nowrap text-white" style={{fontSize: '13pt'}}>
        <img
          src="/assets/images/logo-gray.png"
          style={{ height: '35px' }}
          alt="Finhub Software Solutions logo"
        />
        Scaling Solutions
      </div>

      <div style={styles.footer} className="modal-footer font-normal">
        <div style={styles.footerElem}>
          <img
            src='/icons/icon-phone.svg'
            alt="phone"
          />
          <p style={styles.footerElemText}>+43 1 4170133</p>
        </div>

        <div style={styles.footerElem}>
          <img src='/icons/icon-mail.svg' alt="phone" />
          <p style={styles.footerElemText}>info@finhubss.com</p>
        </div>

        <div style={styles.footerElem}>
          <img src='/icons/icon-in.svg' alt="phone" />
          <p style={styles.footerElemText}>FINHUB AC GmbH & Co KG</p>
        </div>

        <div style={styles.footerElem}>
          <img
            src='/icons/icon-place.svg'
            alt="phone"
          />
          <p style={styles.footerElemText}>
            Kärntner Ring 14, Top 11, 1010 Wien, Austria
          </p>
        </div>
      </div>
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
