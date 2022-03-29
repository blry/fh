/* eslint-disable unused-imports/no-unused-vars */
import React, { useState } from 'react';

const ContactFormUs = () => {
  const [submit, setSubmit] = useState(false);

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
      border: '1px solid #A3A3A3',
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
    buttonLink: {
      borderColor: '#707070',
      width: '165px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
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
          const name = target.name?.value;
          const company = target.company?.value;
          const email = target.email?.value;
          const message = target.message?.value;
          console.log(name, company, email, message);
          setSubmit(true);
        }}
      >
        <div style={styles.container}>
          <div style={styles.firstLineInputsContainer}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              style={styles.input}
              className="modal-contactus-input"
            />
            <input
              type="text"
              placeholder="Company"
              name="company"
              style={styles.input}
              className="modal-contactus-input"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              style={styles.inputLarge}
              className="modal-contactus-input"
            />
            <textarea
              placeholder="Message"
              style={styles.textarea}
              name="message"
              className="modal-contactus-input"
            ></textarea>
          </div>
          <div style={styles.buttonContainer}>
            <label
              htmlFor="submit_form"
              style={styles.buttonLink}
              className=" text-gray-800 flex text-sm font-bold border-2 p-1.5 border-l-8 modal-contactus-send-button"
            >
              <input id="submit_form" type="submit" value="Send Message" />
              <img
                src="/icons/gray-arrow.svg"
                alt=""
                className="h-4 mt-0.5 ml-1 text-gray-900"
              />
            </label>
          </div>
          <div style={styles.resultMessageContainer}>
            <p style={styles.rezultMessageText}>Your message has been sent</p>
          </div>
        </div>
      </form>
    </>
  );
};

export { ContactFormUs };
