
import Layout from "../../components/layout/Layout"
import Appearance from "./appearance/Appearance"
import About from "./about/About"
import Zerro from "./zerro/Zerro"
import React from "react"

const Main = () => {

    return (
        <Layout>
            <Appearance/>
            <About/>
            <Zerro/>
        </Layout>
    )
}

export default Main