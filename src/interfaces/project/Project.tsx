import s from "./project.module.sass"
import {motion} from "framer-motion";
import cat_light from "../../resources/projects/zerro/cat_light.png"
import cat_dark from "../../resources/projects/zerro/cat_dark.png"
import background_cats from "../../resources/projects/zerro/background_cats.png"
import background from "../../resources/projects/zerro/background.webp"

const Project = () => {

    const delay = 1.2

    const variants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        appearance: {
            transition: {
                delay
            },
            opacity: 1,
            y: 0
        }
    }

    const lightVariants = {
        initial: {
            x: -200,
            opacity: 0,
        },
        appearance: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay + .4
            }
        }
    }

    const darkVariants = {
        initial: {
            x: 200,
            opacity: 0,
        },
        appearance: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay + .4
            }
        }
    }

    const titleVariants = {
        initial: {
            opacity: 0,
            x: -1000,
        },
        appearance: {
            transition: {
                delay: delay + .8
            },
            opacity: 1,
            x: 0
        }
    }

    return (
        <div className={s.project}>
            <motion.div className={s.project__title}
                        variants={titleVariants}
                        initial='initial'
                        animate='appearance'>
                О себе
            </motion.div>
            <motion.div
                variants={variants}
                initial='initial'
                animate='appearance'
                className={s.project__terms}>
                — Молодой frontend developer <br/>
                — Образование «Разработчик web и мультимедийных приложений» <br/>
                — В web разработке 5 лет
                <div className={s.project__text}>
                    Опыт работы с большим проектом получил ещё на 4 курсе обучения. Когда пришлось оформлять
                    индивидуальный график чтобы работать полный день и под конец года справляться с одновременным
                    написанием диплома и критического функционала для сайта с дедлайном в один день. Есть пару личных
                    проектов которые делаю исключительно для себя. Увлекаюсь музыкой
                </div>
            </motion.div>
        </div>
    )
}

export default Project