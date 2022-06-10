/* eslint-disable unused-imports/no-unused-vars */
import React, { MutableRefObject, useRef, useState } from 'react';
import { SendButton } from '../button/SendButton';

const ContactFormUs = () => {
  const [submit, setSubmit] = useState(false);
  const nameInput = useRef() as MutableRefObject<HTMLInputElement>;

  const styles = {
    container: {
      width: '520px',
      margin: '20px auto',
    },
    firstLineInputsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    input: {
      fontSize: '12pt',
      height: '35px',
      width: '250px',
      padding: '0 7px',
      margin: '10px 0',
    },
    inputLarge: {
      border: '1px solid #A3A3A3',
      fontSize: '12pt',
      height: '35px',
      width: '100%',
      padding: '0 7px',
      margin: '10px 0',
    },
    textarea: {
      border: '1px solid #A3A3A3',
      fontSize: '12pt',
      height: '97px',
      width: '100%',
      padding: '0 7px',
      margin: '10px 0',
      resize: 'none' as 'none',
    },
    resultMessageContainer: {
      display: 'flex',
      height: '24px',
      justifyContent: 'center',
      marginTop: '10px',
    },
    rezultMessageText: {
      display: submit ? 'block' : 'none',
      color: '#2C4DCA',
      fontSize: '12pt',
    },
  };

  const sendEmail = (name: string, sender: string, message: string) => {
    const formData  = new FormData();
    formData.append('name', name)
    formData.append('sender', sender)
    formData.append('message', message)

    fetch('https://api.' + window.location.host, {
      method: 'POST',
      body: formData
    });
  }

  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            name: { value: string };
            company: { value: string };
            email: { value: string };
            message: { value: string };
          };
          const name = target.name?.value || target.company?.value;
          const email = target.email?.value;
          const message = target.message?.value;

          if (name && email && message) {
            sendEmail(name, email, message);
            setSubmit(true);
          } else {
            nameInput.current.focus();
            nameInput.current.classList.add('input-error')
          }
        }}
      >
        <div style={styles.container} className="modal-form-inputs-cont">
          <div
            style={styles.firstLineInputsContainer}
            className="firstlineInput-modal"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              ref={nameInput}
              style={styles.input}
              className="modal-contactus-input first-line-modal-input font-thin border-app-color-300 border-[1px]"
            />
            <input
              type="text"
              placeholder="Company"
              name="company"
              style={styles.input}
              className="modal-contactus-input first-line-modal-input font-thin border-app-color-300 border-[1px]"
            />
          </div>
          <div className='md:mb-6'>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              required
              style={styles.inputLarge}
              className="modal-contactus-input font-thin"
            />
            <textarea
              placeholder="Message"
              style={styles.textarea}
              name="message"
              required
              className="modal-contactus-input font-thin"
            ></textarea>
          </div>
          <SendButton title="Send Message" width={153}/>
          <div style={styles.resultMessageContainer}>
            <p style={styles.rezultMessageText}>Your message has been sent</p>
          </div>
        </div>
      </form>
    </>
  );
};

export { ContactFormUs };
