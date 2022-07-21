import s from "./header.module.sass"
import {motion} from "framer-motion";

const Header = () => {


    const variants = {
        initial: {
            opacity: 0,
            y: -100,
        },
        appearance:  (custom: number) => {
            return {
                opacity: 1,
                y: 0,
                transition: {
                    delay: custom * .15 + .5
                }
            }
        }
    }

    const links = ['Britanskii', 'Главная', 'Проекты', 'Музыка'].map((text, id) => {
        return <motion.div
            variants={variants}
            custom={id}
            initial='initial'
            animate='appearance'
            className={s.header__link}>{text}</motion.div>
    })

    return (
        <header className={s.header}
        >
            {links[0]}
            <nav className={s.header__nav}>
                {links.slice(1)}
            </nav>
        </header>
    )
}

export default Header