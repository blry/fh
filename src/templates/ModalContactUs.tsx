import React from 'react';

import { useRouter } from 'next/router';

import { ContactFormUs } from './ContactUsForm';

// type IModalProps = {
//   modal: React.Dispatch<React.SetStateAction<boolean>>;
//   setModal: React.Dispatch<React.SetStateAction<any>>;
// };

const ModalContactUs = () => {
  const router = useRouter();
  const modal = true;

  const styles = {
    modalContainer: {
      display: modal ? 'flex' : 'none',
      position: 'absolute' as 'absolute',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgb(66 65 65 / 70%)',
      left: '0',
      top: '0',
    },
    modalContent: {
      width: '870px',
      height: '440px',
      margin: 'auto',
      backgroundColor: 'white',
      flexDirection: 'column' as 'column',
      justifyContent: 'space-between',
    },
    closeRow: {
      display: 'flex',
      justifyContent: 'end',
    },
    closeContainer: {
      padding: '7px',
      backgroundColor: '#2C4DCA',
      width: '27px',
    },
    footer: {
      height: '40px',
      backgroundColor: '#707070',
      position: 'relative' as 'relative',
      color: 'white',
      fontSize: '10pt',
      display: 'flex',
      justifyContent: 'space-around',
    },
    footerElem: {
      display: 'flex',
      alignItems: 'center',
    },
    footerElemText: {
      marginLeft: '13px',
    },
    contentTitle: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
    },
    contentTitleText: {
      fontSize: '21pt',
    },
    span: {
      width: '21px',
      display: 'block',
      borderTop: '2px solid #2761D0',
    },
  };

  return (
    <>
      <div className="flex" style={styles.modalContainer}>
        <div className="flex" style={styles.modalContent}>
          <div style={styles.closeRow}>
            <div style={styles.closeContainer}>
              <img
                src={`${router.basePath}/icons/icon-close-white.svg`}
                alt="close"
              />
            </div>
          </div>
          <div>
            <div style={styles.contentTitle}>
              <p style={styles.contentTitleText}>Contact Us</p>
              <span style={styles.span}></span>
            </div>
            <ContactFormUs />
          </div>
          <div style={styles.footer}>
            <div style={styles.footerElem}>
              <img
                src={`${router.basePath}/icons/icon-phone.svg`}
                alt="phone"
              />
              <p style={styles.footerElemText}>+4312675393</p>
            </div>

            <div style={styles.footerElem}>
              <img src={`${router.basePath}/icons/icon-mail.svg`} alt="phone" />
              <p style={styles.footerElemText}>info@finhubss.com</p>
            </div>

            <div style={styles.footerElem}>
              <img src={`${router.basePath}/icons/icon-in.svg`} alt="phone" />
              <p style={styles.footerElemText}>Finhub Software Solution</p>
            </div>

            <div style={styles.footerElem}>
              <img
                src={`${router.basePath}/icons/icon-place.svg`}
                alt="phone"
              />
              <p style={styles.footerElemText}>
                Beatrixgasse 27, 1030 Wien, Austria
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ModalContactUs };
