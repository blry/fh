import React from 'react';

import { useRouter } from 'next/router';

import { ContactFormUs } from './ContactUsForm';

const ModalContactUs = (props: any) => {
  const router = useRouter();

  const styles = {
    modalContainer: {
      display: props.modal ? 'flex' : 'none',
      position: 'absolute' as 'absolute',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgb(66 65 65 / 70%)',
      left: '0',
      top: '0',
    },
    modalContent: {
      width: '980px',
      height: '560px',
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
      width: '30px',
      transition: '.5s'
    },
    footer: {
      height: '40px',
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
      <div className="flex text-app-color-500" style={styles.modalContainer}>
        <div className="flex modal-content" style={styles.modalContent}>
          <div style={styles.closeRow}>
            <div
              style={styles.closeContainer}
              className="close-button-modal"
              onClick={props.closeModalCallback}
            >
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
          <div style={styles.footer} className="modal-footer bg-app-color-400">
            <div style={styles.footerElem}>
              <img
                src={`${router.basePath}/icons/icon-phone.svg`}
                alt="phone"
              />
              <p style={styles.footerElemText}>+43 1 4170133</p>
            </div>

            <div style={styles.footerElem}>
              <img src={`${router.basePath}/icons/icon-mail.svg`} alt="phone" />
              <p style={styles.footerElemText}>info@finhubss.com</p>
            </div>

            <div style={styles.footerElem}>
              <img src={`${router.basePath}/icons/icon-in.svg`} alt="phone" />
              <p style={styles.footerElemText}>FINHUB AC GmbH & Co KG</p>
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
