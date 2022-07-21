import s from "./project.module.sass"
import {motion} from "framer-motion";
import cat_light from "../../resources/projects/zerro/cat_light.png"
import cat_dark from "../../resources/projects/zerro/cat_dark.png"

const Project = () => {

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
        <div className={s.project}>
            <motion.div className={s.project__title}
                        variants={titleVariants}
                        initial='initial'
                        animate='appearance'>
                Zerro
            </motion.div>
            <motion.div
                variants={variants}
                initial='initial'
                animate='appearance'
                className={s.project__background}>
                <motion.img src={cat_light}
                            variants={lightVariants}
                            initial="initial"
                            animate="appearance"
                            className={s.project__img}
                />
                <motion.img src={cat_dark}
                            variants={darkVariants}
                            initial="initial"
                            animate="appearance"
                            className={s.project__img}
                />
            </motion.div>
        </div>
    )
}

export default Project