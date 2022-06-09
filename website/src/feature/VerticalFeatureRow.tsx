import className from 'classnames';
import { useRouter } from 'next/router';
import { useRef, MutableRefObject } from 'react'
import { motion } from 'framer-motion'
import { OpacityVariants } from '../utils/motion/OpacityVariants'
import { SendButton } from '../button/SendButton';

type IVerticalFeatureRowProps = {
  title?: string;
  description: string;
  descriptionWidth?: string;
  listItems?: string[];
  image: string;
  imageFilter?: boolean;
  imageSize?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt: string;
  reverse?: boolean;
  icon?: boolean;
  line?: boolean;
  link?: string;
  fullRow?: boolean;
  hoverShadow?: boolean;
  marginTop?: string;
  marginBottom?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className('mt-10', 'mb-12', 'md:mx-8', 'mr-4', 'flex', {
    'flex-row-reverse': props.reverse,
  });

  const imageRef = useRef() as MutableRefObject<HTMLImageElement>;
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const router = useRouter();

  const styles = {
    img: {
      display: props.icon ? '' : 'none',
    },
    title: {
      display: props.title ? '' : 'none',
    },
    subContainer: {
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    span: {
      display: props.line ? 'block' : 'none',
      width: '76px',
      borderTop: '3px solid #2C4DCA',
      marginBottom: '18px',
    },
    button: {
      display: props.link ? 'flex' : 'none',
      margin: '15px 0',
    },
    buttonLink: {
      borderColor: '#707070',
      width: '165px',
    },
    div: {
      border: props.imageFilter ? '1px solid #EEEEEE' : '',
      paddingBottom: '25px',
      paddingLeft: '25px'
    }
  };

  const imageColorHandler = () => {
    if(props.imageFilter){
      imageRef.current.classList.remove('image-gray-filter');
    }
  }

  const imageColorLeaveHandler = () => {
    if(props.imageFilter){
      imageRef.current.classList.add('image-gray-filter');
    }
  }

  return (
    <motion.div 
      className={`
        ${verticalFeatureClass} vertical-feature-class 
        ${props.hoverShadow ? 'hover:shadow-[0_0px_20px_4px_rgba(0,0,0,0.1)]' : ''
      }`} 
      onMouseOver={imageColorHandler} 
      onMouseLeave={imageColorLeaveHandler}
      ref={containerRef}
      style={styles.div}
      initial={OpacityVariants.hidden}
      variants={OpacityVariants}
      whileInView={OpacityVariants.visible}
      viewport={{ once: true }}
    >
      <div 
        className="flex flex-col"
        style={{
          marginTop: props.marginTop ? props.marginTop : '',
          marginBottom: props.marginBottom ? props.marginBottom : ''
        }}
      >
        {/* only mobile resolution */}
        <div className="mobTitle flex-col">
          <div
            className={`flex items-center ${
              props.icon ? 'ml-0 mr-0 marginLeft' : ''
            }`}
          >
            <div
              className={`${
                props.icon ? 'w-5 sm:w-8' : ''
              }`}
            >
              <img
                src="/assets/images/symbol.svg"
                alt="icon"
                style={styles.img}
              />
            </div>
            <h3
              className={`text-xl sm:text-2xl text-gray-900 font-semibold ${
                props.icon ? 'ml-2 mr-2 sm:ml-3 sm:mr-3' : ''
              }`}
              style={styles.title}
            >
              {props.title}
            </h3>
          </div>
          <span style={styles.span}></span>
          <div className="p-3 md:w-64 lg:w-80 lg:max-h-56 flex items-center justify-center">
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ maxWidth: '85%' }}
              className="mb-3 sm:mb-0"
            />
          </div>
        </div>
        {/* -------------------------- */}
        <div
          className={`flex flex-col-reverse items-center verticalFeatureRow-text ${
            props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <div 
            className={
              `mt-6 md:mt-0 flex flex-col ml-[16px] 
              ${props.fullRow ? 'md:w-4/5' : 'md:w-1/2'} 
              text-sm text-black leading-4`
            }>
            {/* -------desktop version--------- */}
            <div className="desktopTitle flex-col">
              <div
                className={`flex items-center ${
                  props.reverse
                    ? 'flex-row-reverse justify-between'
                    : props.icon && ''
                } ${props.icon ? 'ml-0 mr-0' : ''} ${
                  props.reverse ? props.icon && 'marginRight' : ''
                }`}
              >
                <div
                  className={`${
                    props.icon ? 'w-5 sm:w-8 marginLeft' : 'md:h-14'
                  } verticalFutureRow-imgCont `}
                >
                  <img
                    src="/assets/images/symbol.svg"
                    alt="icon"
                    style={{
                      display: props.icon ? '' : 'none',
                      marginLeft: props.reverse ? '-21px' : '-21px' 
                    }}
                  />
                </div>
                <h3
                  className={`text-xl sm:text-2xl text-gray-900 font-semibold ${
                    props.icon ? 'ml-1 mr-1 sm:ml-3 sm:mr-3' : ''
                  } ${props.reverse ? 'ml-0 sm:ml-0' : ''}`}
                  style={styles.title}
                >
                  {props.title}
                </h3>
              </div>
              <span style={styles.span}></span>
            </div>
            {/* ---------------------------------------------- */}
            <div style={{
              width: props.descriptionWidth ? props.descriptionWidth : '100%'
            }}>
              {props.description}
            </div>
            {props.listItems?.map((item: string) => (
              <div 
                className="flex items-start mt-1 ml-[2px]" 
                style={{
                  width: props.descriptionWidth ? props.descriptionWidth : '100%'
                }}
                key={item}
              >
                <img
                  src={`${router.basePath}/assets/images/ul_elem.svg`}
                  style={{ marginTop: '5px' }}
                  alt="ul"
                />
                <p className="ml-3">{item}</p>
              </div>
            ))}
            <div style={styles.button}>
                <SendButton 
                  title='Read More' 
                  width={146} inputWidth={'87px'} 
                  top={'5px'} 
                  link={props.link ? props.link : ''}
                />
            </div>
          </div>
          <div className="p-3 md:mt-12 md:ml-auto md:mr-auto lg:max-h-56 flex items-center justify-center desktopTitle">
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ 
                maxWidth: props.imageSize ? props.imageSize : '100%',
                width: props.imageWidth ? props.imageWidth : '',
                height: props.imageHeight ? props.imageHeight : ''
              }}
              className={`mb-3 sm:mb-0 ${ props.imageFilter ? 'image-gray-filter' : ''}`}
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { VerticalFeatureRow };
