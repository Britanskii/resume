import s from "./appearance.module.sass"

import {motion} from "framer-motion"
import {variants, variantsText} from "../../../animations/main"

import react from "../../../resources/images/react.svg"

const Appearance = () => {

    return (
        <div className={s.appearance}>
            <div className={s.appearance__text}>
                <motion.div
                    initial="initial"
                    animate="appearance"
                    custom={1}
                    variants={variantsText}
                    className={s.appearance__title}>
                    Охинковский Роман
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="appearance"
                    custom={2}
                    variants={variantsText}
                    className={s.appearance__subtitle}>
                    Frontend developer
                </motion.div>
            </div>
            <motion.img
                className={s.appearance__logo}
                src={react}
                        initial="appearance"
                        variants={variants}
                        animate="rotate"
            />
        </div>
    )
}

export default Appearance