import { motion } from "framer-motion"

const variants = {
	start: {
		y: [-50, 0],
		opacity: [0, 1],
		transition: {
			ease: 'easeOut',
			duration: .7
		}
	},
	stop: {
		y: [0, 50],
		opacity: [1, 0],
		transition: {
			ease: 'easeOut',
			duration: .7
		}
	}
}

type Props = {
	title: string;
	start: boolean;
}


export const MainBannerText = (props: Props) => {
	return(
		<motion.div
			variants={variants}
			animate={props.start ? variants.start : variants.stop}
		>
			{props.title}
		</motion.div>
	)

}