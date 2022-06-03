import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import { OpacityVariants } from '../utils/motion/OpacityVariants'

type ISectionProps = {
  image?: string;
  titleBlack?: string;
  titleBlue?: string;
  description?: string;
  yPadding?: string;
  reverse?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const router = useRouter();

  const style = {
    sectionContainer: {
      marginLeft: props.reverse ? '0' : '3.2rem',
      marginRight: props.reverse ? '3.2rem' : '0',
    },
    content: {
      width: '100%',
      flexDirection: props.reverse ? 'row-reverse' : 'row',
    },
    logoImg: {
      height: '65px',
      width: '36px',
      margin: '0 auto',
    },
    title: {
      margin: '0 6px',
      backgroundColor: 'white',
      borderBottom: '1px solid #2C4DCA',
      lineHeight: '0',
      padding: '0',
      width: '100%',
      textAlign: props.reverse ? 'end' : 'start',
    },
    titleSpan1: {
      color: props.reverse ? '#2C4DCA' : '#1F1F1F'
    },
    titleSpan2: {
      color: props.reverse ? '#1F1F1F' : '#2C4DCA'
    },
  } as const;

  return (
    <div
      className={` ${
        props.yPadding ? props.yPadding : 'py-6'
      }`}
    >
      {(props.titleBlack || props.description) && (
        <motion.div
          className={`xl:justify-center mb-12 ${props.reverse ? 'ml-0 mr-3' : 'mr-0 ml-3'} text-left flex items-center flex-start`}
          initial={OpacityVariants.hidden}
          variants={OpacityVariants}
          whileInView={OpacityVariants.visible}
          viewport={{ once: true }}
        >
          <div className=" flex xl:max-w-[1400px] items-center" style={style.content}>
            {props.image && (
              <img
                src={`${router.basePath}${props.image}`}
                alt={props.titleBlack}
                style={style.logoImg}
              />
            )}
            {props.titleBlack && (
              <h2
                className="text-2xl text-gray-900 font-bold margin"
                style={style.title}
              >
                <span style={style.titleSpan1} className='bg-white pl-6'>{props.titleBlack}</span>
                <span style={style.titleSpan2} className='bg-white px-[15px]'>{props.titleBlue}</span>
              </h2>
            )}
          </div>

          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </motion.div>
      )}
      <div className='max-w-screen-xl mx-auto'>
        {props.children}
      </div>
      
    </div>
  );
};

export { Section };
