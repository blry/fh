type IBannerProps = {
  title: string;
  description: string;
};

const styles = {
  bannerContainer: {
    background: "url('/assets/images/team-banner.png') no-repeat",
    borderBottom: '3px solid #2C4DCA',
    backgroundSize: 'cover',
    height: '270px',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  bannerContent: {
    width: '1150px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '18pt',
    marginTop: '10px',
  },
  span: {
    height: '119px',
    width: '1px',
    borderLeft: '1px solid white',
  },
  description: {
    width: '70%',
    fontSize: '8pt',
    marginTop: '10px',
  },
};

const Banner = (props: IBannerProps) => {
  return (
    <>
      <div style={styles.bannerContainer}>
        <div style={styles.bannerContent}>
          <div style={styles.title}>{props.title}</div>
          <span style={styles.span}></span>
          <div style={styles.description}>{props.description}</div>
        </div>
      </div>
    </>
  );
};

export { Banner };
