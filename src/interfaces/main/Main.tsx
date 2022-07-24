import constants from "../../styles/wrapper.module.sass"
import s from "./main.module.sass"

import Appearance from "./appearance/Appearance"
import About from "./about/About"
import Zerro from "./zerro/Zerro"
import Novel from "./novel/Novel"

const Main = () => {

    return (
        <>
            <Appearance/>
            <div className={`${constants.wrapper} ${s.main}`}>
                <About/>
                <Zerro/>
                <Novel/>
            </div>
        </>
    )
}

export default Main