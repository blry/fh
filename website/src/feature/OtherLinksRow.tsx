/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";

import { motion } from 'framer-motion'
import { OpacityVariants } from '../utils/motion/OpacityVariants'
import { SendButton } from "../button/SendButton";

type IOtherLinksRowProps = {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

const OtherLinksRow = (props: IOtherLinksRowProps) => {
  const router = useRouter();
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
          <SendButton title="Read More" width={146} inputWidth={'87px'} />
        </div>
        <div className="w-full sm:col-span-5 pl-1 text-black mt-3">
          <div className="text-sm">{props.description}</div>
        </div>
      </div>
    </motion.div>
  );
};

export { OtherLinksRow };
