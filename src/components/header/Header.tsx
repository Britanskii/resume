import s from "./header.module.sass"
import constants from "../../styles/wrapper.module.sass"

import {dataLinks} from "./data/links"

import {useEffect, useState} from "react"
import Link from "./link/Link"
import useScroll from "../../hooks/useScroll"

const Header = () => {

    const [scroll] = useScroll()
    const [clazz, setClazz] = useState("")

    useEffect(() => {
        if (scroll >= 775) {
            setClazz(s.header_black)
        } else {
            setClazz("")
        }
    }, [scroll])

    const links = dataLinks.map((link, id) => <Link key={id} link={link} delay={id}/>)

    return (
        <header className={`${constants.wrapper} ${s.header} ${clazz}`}>
            {links[0]}
            <nav className={s.header__nav}>
                {links.slice(1)}
            </nav>
        </header>
    )
}

export default Header