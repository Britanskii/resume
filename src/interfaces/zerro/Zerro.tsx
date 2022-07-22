import s from "./zerro.module.sass"
import {motion} from "framer-motion";
import cat_light from "../../resources/zerros/zerro/cat_light.png"
import cat_dark from "../../resources/zerros/zerro/cat_dark.png"
import background_cats from "../../resources/zerros/zerro/background_cats.png"
import background from "../../resources/zerros/zerro/background.webp"

const Zerro = () => {

    const delay = 1.2

    const variants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        appearance: {
            transition: {
                delay
            },
            opacity: 1,
            y: 0
        }
    }

    const lightVariants = {
        initial: {
            x: -200,
            opacity: 0,
        },
        appearance: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay + .4
            }
        }
    }

    const darkVariants = {
        initial: {
            x: 200,
            opacity: 0,
        },
        appearance: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay + .4
            }
        }
    }

    const titleVariants = {
        initial: {
            opacity: 0,
            x: -1000,
        },
        appearance: {
            transition: {
                delay: delay + .8
            },
            opacity: 1,
            x: 0
        }
    }

    return (
        <div className={s.zerro}>
            <img src={background} className={s.zerro__background}/>
            <motion.div className={s.zerro__title}
                        variants={titleVariants}
                        initial='initial'
                        animate='appearance'>
                Zerro
            </motion.div>
            <motion.div
                variants={variants}
                initial='initial'
                animate='appearance'
                className={s.zerro__view}>
                <motion.img src={cat_light}
                            variants={lightVariants}
                            initial="initial"
                            animate="appearance"
                            className={s.zerro__img}
                />
                <motion.img src={cat_dark}
                            variants={darkVariants}
                            initial="initial"
                            animate="appearance"
                            className={s.zerro__img}
                />
                <img src={background_cats}
                    className={s.zerro__view_img}
                />
            </motion.div>
        </div>
    )
}

export default Zerro