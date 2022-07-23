import s from "./dropdown.module.sass"
import {motion, AnimatePresence} from "framer-motion"
import {forwardRef, useState} from "react"
import {variants} from "../../animations/dropdown"

interface DropdownProps {
    title: string,
    items: string[],
    className?: string
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>( ({title, items, className}: DropdownProps, ref) => {

    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(isActive => isActive = !isActive)
    }

    const setDisabled = () => {
        setIsActive(false)
    }

    const setActive = () => {
        setIsActive(true)
    }

    return (
        <div  ref={ref} onMouseLeave={setDisabled} onMouseEnter={setActive} onClick={toggleActive} className={`${s.dropdown} ${className}`}>
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
                            {items.map(text =>
                                <li key={text} className={s.dropdown__item}>
                                    {text}
                                </li>
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