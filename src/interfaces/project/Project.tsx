import s from "./project.module.sass"
import {motion} from "framer-motion";

const Project = () => {

    const variants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        appearance: {
            transition:{
                delay: 1.2
            },
            opacity: 1,
            y: 0
        }
    }

    return (
        <div className={s.project}>
            <motion.div
                variants={variants}
                initial='initial'
                animate='appearance'
                className={s.project__background}/>
            <img src="" alt=""/>
        </div>
    )
}

export default Project