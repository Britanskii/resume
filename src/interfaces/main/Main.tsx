import s from "./main.module.sass"
import react from "../../resources/images/react.svg"
import {motion} from "framer-motion"
import {variants, variantsText} from "../../animations/main"

const Main = () => {

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