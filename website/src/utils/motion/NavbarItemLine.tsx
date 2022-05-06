import { motion } from "framer-motion"

type INavbarItemLineProps = {
  bottom?: boolean;
  top?: boolean;
}

const NavbarItemLine = (props: INavbarItemLineProps) => {
  const styles = {
    container: {
      backgroundColor: '#2C4DCA',
      bottom: props.bottom ? '-7px' : '',
      top: props.top ? '-9px': ''
    }
  }

  return (
    <motion.div 
      style={styles.container}
      className="w-full h-[2px] absolute"
      initial={{width: '0px'}}
      animate={{width: '100%'}}
      exit={{width: '0px'}}
      transition={{ ease: "easeOut"}}
    >
    </motion.div>
  )
}

export {NavbarItemLine}