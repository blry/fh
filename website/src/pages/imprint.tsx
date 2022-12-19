import { Banner } from '../templates/Banner';

const styles = {
  textContainer: {
    fontSize: '10pt',
    color: 'black',
  },
  span: {
    display: 'block',
    height: '25px',
    borderLeft: '3px solid #2C4DCA',
  },
};

const Imprint = () => {
  return (
    <>
      <Banner title="Imprint" />
      <div className="flex md:flex-row flex-col justify-center align-center md:justify-evenly mt-16 mb-32 lg:ml-12 xl:ml-32 pl-3">
        <div className="flex items-center md:mb-0">
          <img src="/icons/icon-f.svg" alt="logo" className="h-12" />
          <span style={styles.span} className="ml-12 mr-12"></span>
          <div style={styles.textContainer}>
            <div>Finhub AC GmbH &amp; C0 KG</div>
            <div className="mb-2 mt-2">
              <div>Company nr. FN 529227 a </div>
              <div>UID (VAT)-Number: ATU75318826</div>
            </div>
            <div>Address: Beatrixgasse 27-2-29, 1030 Wien, Austria</div>
          </div>
        </div>
        <div className="flex items-center w-full md:w-72 mt-12 md:mt-0">
          <img src="/icons/icon-person.svg" alt="person" className="h-10" />
          <span style={styles.span} className="ml-9 mr-11"></span>
          <div style={styles.textContainer}>
            <div>
              <div>Vitali Chebanu, </div>
              <div>Geschäftsführer</div>
            </div>
            <div className="mb-2 mt-2">E-mail: cob@finhubfund.com</div>
            <div>Phone: +43 1 4170133</div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Imprint;
