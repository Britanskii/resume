import s from "./novel.module.sass"

import Lottie from "lottie-react"

import background from "../../../resources/projects/novel/background.jpg"
import logo from "../../../resources/projects/novel/logo.json"

const Novel = () => {

    return (
        <div className={s.novel}>
            <div className={s.novel__title}>Новелла</div>
            <div className={s.novel__info}>
                <div className={s.novel__block}>
                    <Lottie className={s.novel__logo} animationData={logo}/>
                    <img className={s.novel__background} src={background} alt=""/>
                </div>
                <div className={s.novel__about}>
                    — Полноценная веб-новелла в браузере
                </div>
            </div>
        </div>
    )
}

export default Novel