type IBannerProps = {
  title: string;
  description?: string;
};

const Banner = (props: IBannerProps) => {
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
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 20px',
    },
    title: {
      fontSize: '18pt',
      marginTop: '10px',
    },
    span: {
      display: props.description ? 'block' : 'none',
      width: '1px',
      borderLeft: '1px solid white',
      margin: '0 60px',
    },
    description: {
      display: props.description ? 'block' : 'none',
      width: '50vw',
      fontSize: '8pt',
      marginTop: '10px',
      marginRight: '50px',
    },
  };

  return (
    <>
      <div style={styles.bannerContainer} className="teamBannerContainer">
        <div style={styles.bannerContent} className="teamBannerContent">
          <div style={styles.title} className="teamBannerTitle">
            {props.title}
          </div>
          <span style={styles.span}></span>
          <div style={styles.description} className="teamBannerText">
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
};

export { Banner };
