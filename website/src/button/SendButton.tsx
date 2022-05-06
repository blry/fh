import { motion } from 'framer-motion'

const styles = {
	buttonLink: {
		width: '165px',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
}

const SendButton = ({title}: {title: string}) => {
    return(
        <>
            <div style={styles.buttonContainer}>
                <motion.div 
                    whileTap={{ scale: 0.95 }}
                >
                    <label
                        htmlFor="submit_form"
                        style={styles.buttonLink}
                        className=" text-gray-800 border-app-color-400 flex text-sm font-bold border-2 p-1.5 border-l-8 modal-contactus-send-button"
                    >
                        <input id="submit_form" type="submit" value={title} />
                        <img
                            src="/icons/gray-arrow.svg"
                            alt=""
                            className="h-4 mt-0.5 ml-1 text-gray-900"
                        />
                    </label>
                </motion.div>
            </div>
            
        </>
    )
}

export {SendButton}