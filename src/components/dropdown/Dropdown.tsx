import s from "./dropdown.module.sass"
import {motion, AnimatePresence} from "framer-motion"
import {forwardRef, useState} from "react"
import {variants} from "../../animations/dropdown"
import {toggle} from "../../functions/functions"
import {DropdownLink} from "../../types/types"
import {Link} from "react-router-dom"

interface DropdownProps {
    title: string,
    items: DropdownLink[],
    className?: string
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>( ({title, items, className}: DropdownProps, ref) => {

    const [isActive, setIsActive] = useState(false)

    const onToggle = () => toggle(setIsActive)

    const setDisabled = () => {
        setIsActive(false)
    }

    const setActive = () => {
        setIsActive(true)
    }

    return (
        <div  ref={ref} onMouseLeave={setDisabled} onMouseEnter={setActive} onClick={onToggle} className={`${s.dropdown} ${className}`}>
            {title}
            <AnimatePresence>
                {
                    isActive &&
                    <motion.div
                        initial='close'
                        animate='open'
                        exit='close'
                        variants={variants}
                        className={s.dropdown__container}>
                        <ul className={s.dropdown__list}>
                            {items.map(link =>
                                <Link to={link.to} key={link.text} className={s.dropdown__item}>
                                    {link.text}
                                </Link>
                            )}
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
})

Dropdown.displayName = "Dropdown"

Dropdown.defaultProps = {className: ""}

export const MDropdown = motion(Dropdown)