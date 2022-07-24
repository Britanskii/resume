import s from "./banner.module.sass"
import {motion} from "framer-motion"
import {darkVariants, lightVariants, variants} from "../../../animations/zerro"
import cat_light from "../../../resources/projects/zerro/cat_light.png"
import cat_dark from "../../../resources/projects/zerro/cat_dark.png"
import background_cats from "../../../resources/projects/zerro/background_cats.png"

const Banner = () => {

    return (
        <motion.div
            variants={variants}
            initial='initial'
            animate='appearance'
            className={s.banner}>
            <motion.img src={cat_light}
                        variants={lightVariants}
                        initial="initial"
                        animate="appearance"
                        className={s.banner__image}
            />
            <motion.img src={cat_dark}
                        variants={darkVariants}
                        initial="initial"
                        animate="appearance"
                        className={s.banner__image}
            />
            <img src={background_cats}
                 className={s.banner__background}
            />
        </motion.div>
    )
}

export default Banner