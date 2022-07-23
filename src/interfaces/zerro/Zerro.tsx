import s from "./zerro.module.sass"
import {motion} from "framer-motion"
import cat_light from "../../resources/projects/zerro/cat_light.png"
import cat_dark from "../../resources/projects/zerro/cat_dark.png"
import background_cats from "../../resources/projects/zerro/background_cats.png"
import background from "../../resources/projects/zerro/background.webp"
import {darkVariants, lightVariants, titleVariants, variants} from "../../animations/zerro"

const Zerro = () => {

    return (
        <div className={s.zerro}>
            {/*<img src={background} className={s.zerro__background}/>*/}
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