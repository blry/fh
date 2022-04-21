/* eslint-disable prettier/prettier */
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from 'framer-motion'
import { OpacityVariants } from '../utils/motion/OpacityVariants'

type IAboutUsItemProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

const styles = {
  imgContainer: {
    height: "185px",
    display: "flex",
    alignItems: "flex-end"
  }
}

const AboutUsItem = (props: IAboutUsItemProps) => {
  const router = useRouter();

  return (
    <motion.div 
      className="p-3 border-2 relative pb-9 boxshadow-animation" 
      initial={OpacityVariants.hidden}
      variants={OpacityVariants}
      whileInView={OpacityVariants.visible}
      viewport={{ once: true }}
    >
      <div style={styles.imgContainer} className="mb-3">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          style={{ margin: "0 auto" }}
        />
      </div>
      <div className="">
        <h4 className="text-2xl text-gray-900 font-semibold">{props.title}</h4>
        <div className="mt-3 text-sm">{props.description}</div>
      </div>
      <div className="flex md:absolute md:right-3 md:bottom-2 justify-center mt-5">
        <Link href={encodeURIComponent(props.link!)} passHref={true}>
          <motion.div whileHover={{scale: 1.1}}>
            <a className="float-right text-primary-500 flex text-sm font-bold" style={{color:"rgb(59 130 246)"}}>
              Read More
              <img
                src="/icons/Blue Arrow.svg"
                alt=""
                className="h-4 mt-0.5 ml-1"
              />
            </a>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export { AboutUsItem };
