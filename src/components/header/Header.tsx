import s from "./header.module.sass"
import {motion} from "framer-motion";
import {MDropdown} from "../dropdown/Dropdown";

interface LinkType {
    text: string
    type: string
    items?: string[]
}

interface DataLinks extends Array<LinkType>{}

const Header = () => {

    const dataLinks: DataLinks = [
        {text: 'Britanskii', type: 'div'},
        {text: 'Главная', type: 'div'},
        {
            text: 'Проекты', type: 'dropdown', items: ['IGaming', 'Новелла', 'Лендинг']
        },
        {text: 'Музыка', type: 'div'},
    ]


    const variants = {
        initial: {
            opacity: 0,
            y: -100,
        },
        appearance: (custom: number) => {
            return {
                opacity: 1,
                y: 0,
                transition: {
                    delay: custom * .15 + .5
                }
            }
        }
    }

    const links = dataLinks.map((link, id) => {
        if (link.type === "div") {
            return <motion.div
                variants={variants}
                custom={id}
                initial='initial'
                animate='appearance'
                className={s.header__link}>{link.text}
            </motion.div>
        } else if (link.type === "dropdown" && link.items !== undefined) {
            return <MDropdown
                title={link.text}
                items={link.items}
                variants={variants}
                custom={id}
                initial='initial'
                animate='appearance'
                className={s.header__link}
            />
        }
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