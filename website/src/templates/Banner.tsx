import { motion } from 'framer-motion'
import { OpacityVariants } from '../utils/motion/OpacityVariants'

type IBannerProps = {
  title: string;
  description?: string;
};

const Banner = (props: IBannerProps) => {
  const styles = {
    bannerContainer: {
      background: "url('/assets/images/home-banner.jpg') no-repeat",
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
      filter: 'drop-shadow(2px 4px 6px black)'
    },
    span: {
      display: props.description ? 'block' : 'none',
      width: '1px',
      borderLeft: '1px solid #1d4ed8',
      margin: '0 60px',
    },
    description: {
      display: props.description ? 'block' : 'none',
      width: '50vw',
      fontSize: '8pt',
      marginTop: '10px',
      marginRight: '50px',
      filter: 'drop-shadow(2px 4px 6px black)'
    },
  };

  return (
    <>
      <motion.div 
        style={styles.bannerContainer} 
        className="teamBannerContainer"
        initial={OpacityVariants.hidden}
        variants={OpacityVariants}
        whileInView={OpacityVariants.visible}
        viewport={{ once: true }}
      >
        <div style={styles.bannerContent} className="teamBannerContent">
          <div style={styles.title} className="teamBannerTitle">
            {props.title}
          </div>
          <span style={styles.span}></span>
          <div style={styles.description} className="teamBannerText">
            {props.description}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { Banner };
