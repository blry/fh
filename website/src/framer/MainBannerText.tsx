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
	logo: boolean;
}


export const MainBannerText = (props: Props) => {
	return(
		<motion.div
			variants={variants}
			animate={props.start ? variants.start : variants.stop}
		>
			{
				props.logo ? 
				(
					<div className="text-4xl flex items-center text-black">
						<img
							src="/assets/images/logo.png"
							style={{ height: '72px' }}
							alt="Finhub Software Solutions logo"
						/>
						Scaling Solutions
				  	</div>
				) : props.title
			}
		</motion.div>
	)

}