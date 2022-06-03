import { motion } from 'framer-motion'
import { OpacityVariants } from '../utils/motion/OpacityVariants'

type ITeamITProps = {
  image: string;
  title: string;
  jobTitle: string;
  description: string;
  phoneNumber: string;
  email: string;
};

const TeamIT = (props: ITeamITProps) => {
  const styles = {
    container: {
      width: '200px',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
    },
    image: {
      background: `url(${props.image}) no-repeat`,
      backgroundSize: 'cover',
      width: '198px',
      height: '200px',
    },
    span: {
      width: '75px',
      display: 'block',
      borderBottom: '5px solid #1d4ed8',
      margin: '5px 0 0 0',
    },
    titleRow: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12pt',
      fontWeight: '500',
      textAlign: 'center' as 'center',
      lineHeight: 'normal',
    },
    content: {
      color: 'black',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      border: '1px solid #EEEEEE',
      padding: '5px',
    },
    icon: {
      border: '1px solid #A3A3A3',
      padding: '3px',
      width: '21px',
      margin: '0 10px 0 0',
    },
    jobTitle: {
      fontSize: '11pt',
      color: '#1d4ed8',
      textAlign: 'center' as 'center',
    },
    description: {
      fontSize: '8pt',
      textAlign: 'center' as 'center',
    },
    contact: {
      fontSize: '11pt',
      fontWeight: '300',
    },
  };

  return (
    <>
      <motion.div 
        style={styles.container} 
        className="teamIT-container"
        initial={OpacityVariants.hidden}
        variants={OpacityVariants}
        whileInView={OpacityVariants.visible}
        viewport={{ once: true }}
      >
        <div style={styles.imageContainer}>
          <div style={styles.image} className="teamIT-imageContainer"></div>
          <span style={styles.span}></span>
        </div>
        <div style={styles.content}>
          <div className='mb-1 mt-2' style={styles.titleRow}>
            <div>
              <img src="/icons/icon-in.svg" alt="in" style={styles.icon} />
            </div>
            {props.title}
          </div>
          <div className='my-2' style={styles.jobTitle}>{props.jobTitle}</div>
          <div style={styles.description}>{props.description}</div>
          <div style={styles.contact}>{props.phoneNumber}</div>
          <div className='mb-3' style={styles.contact}>{props.email}</div>
        </div>
      </motion.div>
    </>
  );
};

export { TeamIT };
