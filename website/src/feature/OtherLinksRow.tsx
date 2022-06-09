/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";
import { motion } from 'framer-motion'
import { OpacityVariants } from '../utils/motion/OpacityVariants'
import {useState} from 'react'

type IOtherLinksRowProps = {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
  link?: string;
};

const OtherLinksRow = (props: IOtherLinksRowProps) => {
  const router = useRouter();
  const [arrow, setArrow] = useState(false)

  const styles = {
    span: {
      display: props.title ? 'block' : 'none',
      height: '50px',
      borderLeft: '4px solid #2C4DCA',
      margin: '0 8px'
    }
  }

  return (
    <motion.div 
      className="mb-8 p-3"
      initial={OpacityVariants.hidden}
      variants={OpacityVariants}
      whileInView={OpacityVariants.visible}
      viewport={{ once: true }}
    >
      <div className="mb-2 flex items-center">
        <div className="col-span-1 pr-2 pl-1">
          <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ margin: "0 auto" }}
            />
        </div>
        <span style={styles.span}></span>
        <div className="col-span-5 pl-1 border-l-slate-900">
          <div className="text-xl lg:text-3xl font-light text-gray-900">{props.title}</div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:grid-container sm:grid-cols-6 mb-2">
        <div className="w-36 sm:col-span-1">
          <a href={props.link} target="_blank">
          <div 
                className="flex justify-center"
                onMouseEnter={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
            >
                <motion.div 
                    whileTap={{ scale: 0.95 }}
                >
                    <div
                        style={{width: `138px`}}
                        className="float-right cursor-pointer transition relative text-gray-800 w-32 flex text-sm font-bold border-2 p-1.5 mr-4 mt-4 border-l-8 border-gray-800 modal-contactus-send-button"
                    >
                        <p
                            className='bg-white w-[77px] cursor-pointer font-bold hover:text-app-color-600 z-10 whitespace-nowrap'
                           
                        >Read More</p>
                        <img
                            src={`/icons/${arrow ? 'Blue Arrow.svg' : 'gray-arrow.svg'}`}
                            alt=""
                            className="h-4 t-[7px] mt-0.5 ml-1 text-gray-900 absolute right-2 mb-2"
                            
                        />
                    </div>
                </motion.div>
            </div>
          </a>
        </div>
        <div className="w-full sm:col-span-5 pl-1 text-black mt-3">
          <div className="text-sm">{props.description}</div>
        </div>
      </div>
    </motion.div>
  );
};

export { OtherLinksRow };
