import React from 'react'
import s from "./app.module.sass"
import Main from "./interfaces/main/Main";
import Header from "./components/header/Header";
import Project from "./interfaces/project/Project";

const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Project/>
        </div>
    )
}

export default App;
