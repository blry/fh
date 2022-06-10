import { motion } from 'framer-motion'
import { useState } from 'react'

type IProps = {
    title: string;
    width?: number;
    top?: string;
    inputWidth? : string;
    link?: string;
    onClick?: CallableFunction;
    disabled?: boolean;
}

const SendButton = (props: IProps) => {
    const [arrow, setArrow] = useState(false)
    const styles = {
        input: {
            width: props.inputWidth ? props.inputWidth : '98px',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
    }

    return(
        <>
            <div 
                style={styles.buttonContainer}
                onMouseEnter={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                onClick={() => props.onClick && props.onClick()}
            >
                <motion.div 
                    whileTap={{ scale: 0.95 }}
                >
                    <label
                        htmlFor="submit_form"
                        style={{width: `${props.width}px`}}
                        className="float-right cursor-pointer transition relative text-gray-800 w-32 flex text-sm font-bold border-2 p-1.5 mr-4 mt-4 border-l-8 border-gray-800 modal-contactus-send-button"
                    >
                        <input 
                            id="submit_form" 
                            className='bg-white cursor-pointer font-bold hover:text-app-color-600 z-10 whitespace-nowrap'
                            style={styles.input}
                            type="submit" 
                            value={props.title} 
                            disabled={props.disabled || false }
                        />
                        <img
                            src={`/icons/${arrow ? 'Blue Arrow.svg' : 'gray-arrow.svg'}`}
                            alt=""
                            className="h-4 mt-0.5 ml-1 text-gray-900 absolute right-2 mb-2"
                            style={{
                                top: props.top ? props.top : '7px'
                            }}
                        />
                    </label>
                </motion.div>
            </div>
            
        </>
    )
}

export {SendButton}