import React from "react"
// import s from "./app.module.sass"
import {Route, Routes} from "react-router-dom"
import Main from "./interfaces/main/Main"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    )
}

export default App
