import s from "./banner.module.sass"

import {motion} from "framer-motion"
import {darkVariants, lightVariants, variants} from "../../../../animations/zerro"

import logo from "../../../../resources/projects/zerro/logo.json"
import cat_light from "../../../../resources/projects/zerro/cat_light.png"
import cat_dark from "../../../../resources/projects/zerro/cat_dark.png"
import background_cats from "../../../../resources/projects/zerro/background_cats.png"
import Lottie from "lottie-react"

const Banner = () => {

    const lottieOptions = {
        animationData: logo,
        loop: true,
        autoplay: true,
    }

    // const View = useLottie(lottieOptions)

    return (
        <motion.div
            variants={variants}
            initial='initial'
            animate='appearance'
            className={s.banner}>
            <Lottie animationData={logo} className={s.banner__image}/>
            <img src={background_cats}
                 className={s.banner__background}
            />
        </motion.div>
    )
}

export default Banner