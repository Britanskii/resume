import s from "./main.module.sass"
import react from "../../resources/images/react.svg"
import {motion} from "framer-motion";

const Main = () => {


    const variantsText = {
        initial: {
            opacity: 0,
            x: -100,
        },
        appearance:  (custom: number) => {
            return {
                opacity: 1,
                x: 0,
                transition: {
                    delay: custom * .15
                }
            }
        }
    }

    const variants = {
        appearance: {
            x: "85%",
        },
        rotate: {
            opacity: 1,
            rotate: 360,
            transition: {
                duration: 7,
                repeat: Infinity,
                ease: "linear"
            }
        }
    }

    return (
        <div className={s.main}>
            <div className={s.main__text}>
                <motion.div
                    initial="initial"
                    animate="appearance"
                    custom={1}
                    variants={variantsText}
                    className={s.main__title}>
                    Охинковский Роман
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="appearance"
                    custom={2}
                    variants={variantsText}
                    className={s.main__subtitle}>
                    Frontend developer
                </motion.div>
            </div>
            <motion.img
                className={s.main__logo}
                src={react}
                        initial="appearance"
                        variants={variants}
                        animate="rotate"
            />
        </div>
    )
}

export default Main