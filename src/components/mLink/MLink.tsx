import {Link} from "react-router-dom"
import {forwardRef} from "react"
import {motion} from "framer-motion"

interface MLinkProps {
    children: React.ReactNode
    to: string,
    className?: string,
}

const MLink = forwardRef<HTMLAnchorElement, MLinkProps>(({to, children, className}, ref) => {

    return (
        <Link className = {className} ref={ref} to={to}>
            {children}
        </Link>
    )
})

MLink.displayName = "MLink"

MLink.defaultProps = {className: ""}

export default motion(MLink)