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
      className="p-5 text-black border-2 border-app-color-200 relative pb-9 hover:shadow-[0_0px_20px_4px_rgba(0,0,0,0.1)] transition" 
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
      <div className="flex md:justify-end justify-center mt-5">
        <Link href={encodeURIComponent(props.link!)} passHref={true}>
          <div className="w-24 hover:pl-2" style={{transition: '.5s'}}>
            <a className="float-right relative whitespace-nowrap text-app-color-600 w-full flex text-sm font-bold cursor-pointer">
              <div className='bg-white z-10 w-[72px] whitespace-nowrap'>Read More</div>
              <img
                src="/icons/Blue Arrow.svg"
                alt=""
                className="h-4 mt-0.5 ml-1 absolute right-0"
              />
            </a>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export { AboutUsItem };
