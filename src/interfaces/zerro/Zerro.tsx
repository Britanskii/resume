import s from "./zerro.module.sass"
import {motion} from "framer-motion"
import {titleVariants} from "../../animations/zerro"
import Banner from "./banner/Banner"
import About from "./about/About"

const Zerro = () => {

    return (
        <div className={s.zerro}>
            <div className={s.zerro__about}>
                <motion.div className={s.zerro__title}
                            variants={titleVariants}
                            initial='initial'
                            animate='appearance'>
                    Zerro
                </motion.div>
                <About/>
            </div>
            <Banner/>
        </div>
    )
}

export default Zerro