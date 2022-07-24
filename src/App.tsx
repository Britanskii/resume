import React from "react"
// import s from "./app.module.sass"
import {Route, Routes} from "react-router-dom"
import Main from "./interfaces/main/Main"
import Layout from "./components/layout/Layout"

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/projects" element={<div>Проекты</div>} />
            </Routes>
        </Layout>
    )
}

export default App
