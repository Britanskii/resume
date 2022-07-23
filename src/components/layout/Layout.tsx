import s from "./layout.module.sass"
import {ReactNode} from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return (
        <div className={s.layout}>
            {children}
        </div>
    )
}

export default Layout