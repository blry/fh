import { motion } from 'framer-motion'
import { useState } from 'react';
import { OpacityVariants } from '../utils/motion/OpacityVariants'

type ITeamItem = {
  image: string;
  title: string;
  link?: string;
  jobTitle: string;
  description: string;
  phoneNumber: string;
  email: string;
  reverse?: boolean;
};

const TeamManagementItem = (props: ITeamItem) => {
  const [titleMouseEnter, setTitleMouseEnter] = useState(false)

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: '70px 0 50px 0',
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    image: {
      background: `url(${props.image}) no-repeat`,
      backgroundSize: 'cover',
      width: '220px',
      height: '220px',
      position: 'relative' as 'relative',
      top: '-23px',
      left: props.reverse ? '-21px' : '22px',
      borderBottom: '5px solid white',
      borderLeft: '5px solid white',
      borderRight: '5px solid white',
    },
    rectangleImage: {
      width: '220px',
      height: '208px',
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
      marginLeft: '19px'
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
      margin: props.reverse ? '0 0 0 10px' : '0 10px 0 0',
    },
    iconIn: {
      border: titleMouseEnter ? '1px solid #2C4DCA' : '1px solid #A3A3A3',
      padding: '3px',
      width: '21px',
      margin: props.reverse ? '0 10px 0 0' : '0 0 0 10px',
    },
    jobTitle: {
      margin: '0 8px',
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
      <motion.div 
        style={styles.container} 
        className="teamManagementItem-container"
        initial={OpacityVariants.hidden}
        variants={OpacityVariants}
        whileInView={OpacityVariants.visible}
        viewport={{ once: true }}
      >
        <div
          style={styles.imageContainer}
          className="teamManagementItem-imageContainer"
        >
          <div style={styles.rectangleImage}></div>
          <div style={styles.image}></div>
        </div>
        <div style={styles.contentContainer}>
          <div 
            className="flex" 
            style={styles.titleContainer}
            onMouseEnter={() => setTitleMouseEnter(true)}
            onMouseLeave={() => setTitleMouseEnter(false)}
          >
            <div>
              <img
                src="/icons/icon-cornir-blue.svg"
                alt="icon"
                style={styles.iconBlue}
              />
            </div>
            <div>
              <a href={props.link} target="_blank">
                <div 
                  style={styles.titleRow} 
                  className={`${props.link ? 'cursor-pointer' : ''}`}
                >
                  {props.title}
                  <div>
                    <img
                      src={`
                        ${titleMouseEnter ? '/icons/icon-in-blue.svg' : '/icons/icon-in.svg'}
                      `}
                      alt="in"
                      style={styles.iconIn}
                    />
                  </div>
                </div>
              </a>
              <div 
                style={styles.jobTitle} 
                className={`
                  flex text-[16pt] 
                  ${titleMouseEnter ? 'text-app-color-300' : 'text-app-color-600'}
                `}
              >
                {props.jobTitle}
              </div>
            </div>
          </div>
          <div style={styles.description} className="team-management-text">
            {props.description}
          </div>
          <div>
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
      </motion.div>
    </>
  );
};

export { TeamManagementItem };
