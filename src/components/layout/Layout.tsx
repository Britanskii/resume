import s from "./layout.module.sass"
import React, {ReactNode} from "react"
import Header from "../header/Header"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return (
       <>
           <Header/>
           <div className={s.layout}>
               {children}
           </div>
       </>
    )
}

export default Layout