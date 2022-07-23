import s from "./link.module.sass"
import {motion} from "framer-motion"
import {variants} from "../../../animations/header"
import {MDropdown} from "../../dropdown/Dropdown"
import {LinkType} from "../../../types/types"

interface LinkProps {
    link: LinkType,
    delay: number
}

const Link = ({link, delay}: LinkProps) => {

    if (link.type === "div") {
        return <motion.div
            variants={variants}
            custom={delay}
            initial='initial'
            animate='appearance'
            className={s.header__link}>{link.text}
        </motion.div>
    } else if (link.type === "dropdown" && link.items !== undefined) {
        return <MDropdown
            title={link.text}
            items={link.items}
            variants={variants}
            custom={delay}
            initial='initial'
            animate='appearance'
            className={s.header__link}
        />
    } else {
        return <></>
    }
}

export default Link