type ITeamItem = {
  image: string;
  title: string;
  jobTitle: string;
  description: string;
  phoneNumber: string;
  email: string;
  reverse?: boolean;
};

const TeamManagementItem = (props: ITeamItem) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: '50px 0',
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    image: {
      background: `url(${props.image}) no-repeat`,
      backgroundSize: 'cover',
      width: '200px',
      height: '200px',
      position: 'relative' as 'relative',
      top: '-23px',
      left: props.reverse ? '-21px' : '22px',
      borderBottom: '5px solid white',
    },
    rectangleImage: {
      width: '200px',
      height: '188px',
      border: '6px solid #2C4DCA',
      position: 'absolute' as 'absolute',
    },
    imageContainer: {
      width: '200px',
      height: '200px',
    },
    contentContainer: {
      marginTop: '-11px',
      color: 'black',
    },
    titleContainer: {
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    iconBlue: {
      height: '50px',
      transform: props.reverse ? 'scaleX(-1)' : 'unset',
    },
    titleRow: {
      display: 'flex',
      color: 'black',
      fontSize: '20pt',
      fontWeight: '600',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: '-11px',
      marginLeft: props.reverse ? '0px' : '8px',
      marginRight: props.reverse ? '8px' : '0px',
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    icon: {
      border: '1px solid #A3A3A3',
      padding: '3px',
      width: '21px',
      margin: '0 10px',
    },
    jobTitle: {
      margin: '0 8px',
      color: '#2C4DCA',
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    description: {
      width: '430px',
      fontSize: '9pt',
      margin: '10px 0',
    },
    contactItem: {
      fontSize: '12pt',
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    span: {
      borderBottom: '3px solid blue',
      display: 'block',
      width: '200px',
      marginTop: '-35px',
    },
  };

  return (
    <>
      <div style={styles.container} className="teamManagementItem-container">
        <div
          style={styles.imageContainer}
          className="teamManagementItem-imageContainer"
        >
          <div style={styles.rectangleImage}></div>
          <div style={styles.image}></div>
        </div>
        <div style={styles.contentContainer}>
          <div className="flex" style={styles.titleContainer}>
            <div>
              <img
                src="/icons/icon-cornir-blue.svg"
                alt="icon"
                style={styles.iconBlue}
              />
            </div>
            <div>
              <div style={styles.titleRow}>
                {props.title}
                <div>
                  <img src="/icons/icon-in.svg" alt="in" style={styles.icon} />
                </div>
              </div>
              <div style={styles.jobTitle} className="flex">
                {props.jobTitle}
              </div>
            </div>
          </div>
          <div style={styles.description}>{props.description}</div>
          <div>
            <div className="flex items-center" style={styles.contactItem}>
              <div className="mr-1">
                <img
                  src="/icons/icon-phone.svg"
                  alt="phone"
                  style={styles.icon}
                />
              </div>
              {props.phoneNumber}
            </div>
            <div className="flex items-center" style={styles.contactItem}>
              <div className="mr-1">
                <img
                  src="/icons/icon-mail.svg"
                  alt="email"
                  style={styles.icon}
                />
              </div>
              {props.email}
            </div>
          </div>
        </div>
        <div className="flex items-center teamManagementItem-spanContainer">
          <span style={styles.span}></span>
        </div>
      </div>
    </>
  );
};

export { TeamManagementItem };
