import s from "./link.module.sass"
import {variants} from "../../../animations/header"
import {MDropdown} from "../../dropdown/Dropdown"
import {LinkType} from "../../../types/types"
import MLink from "../../mLink/MLink"

interface LinkProps {
    link: LinkType,
    delay: number
}

const Link = ({link, delay}: LinkProps) => {

    if (link.type === "div") {
        return <MLink
            to={link.to}
            variants={variants}
            custom={delay}
            initial='initial'
            animate='appearance'
            className={s.link}>
            {link.text}
        </MLink>
    } else if (link.type === "dropdown" && link.items !== undefined) {
        return <MDropdown
            title={link.text}
            items={link.items}
            variants={variants}
            custom={delay}
            initial='initial'
            animate='appearance'
            className={s.link}
        />
    } else {
        return <></>
    }
}

export default Link