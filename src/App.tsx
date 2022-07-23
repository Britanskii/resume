import React from "react"
import s from "./app.module.sass"
import Main from "./interfaces/main/Main"
import Header from "./components/header/Header"
import About from "./interfaces/about/About"
import Layout from "./components/layout/Layout"
import Zerro from "./interfaces/zerro/Zerro"

const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Layout>
                <Main/>
                <About/>
                <Zerro/>
            </Layout>
        </div>
    )
}

export default App
