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
  },
  buttonLink: {
    borderColor: '#707070',
    width: '165px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const ContactFormUs = () => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.firstLineInputsContainer}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="text" placeholder="Company" style={styles.input} />
        </div>
        <div>
          <input type="email" placeholder="E-mail" style={styles.inputLarge} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>
        </div>
        <div>
          <a
            href="#"
            style={styles.buttonLink}
            className=" text-gray-800 flex text-sm font-bold border-2 p-1.5 border-l-8 "
          >
            Send Message
            <img
              src="/icons/gray-arrow.svg"
              alt=""
              className="h-4 mt-0.5 ml-1 text-gray-900"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export { ContactFormUs };
