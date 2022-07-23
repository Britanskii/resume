import s from "./about.module.sass"
import {motion} from "framer-motion"


const About = () => {

    const delay = 1.2

    const variants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        appearance: {
            transition: {
                delay: delay + .2
            },
            opacity: 1,
            y: 0
        }
    }

    const titleVariants = {
        initial: {
            opacity: 0,
            x: -1000,
        },
        appearance: {
            transition: {
                delay
            },
            opacity: 1,
            x: 0
        }
    }

    return (
        <div className={s.about}>
            <motion.div
                variants={variants}
                initial='initial'
                animate='appearance'
                className={s.about__terms}>
                — Молодой frontend developer <br/>
                — Образование «Разработчик web и мультимедийных приложений» <br/>
                — В web разработке 5 лет
                <div className={s.about__text}>
                    Опыт работы с большим проектом получил ещё на 4 курсе обучения. Когда пришлось оформлять
                    индивидуальный график чтобы работать полный день и под конец года справляться с одновременным
                    написанием диплома и критического функционала для сайта с дедлайном в один день. Есть пару личных
                    проектов которые делаю исключительно для себя. Увлекаюсь музыкой
                </div>
            </motion.div>
            <motion.div className={s.about__title}
                        variants={titleVariants}
                        initial='initial'
                        animate='appearance'>
                О себе
            </motion.div>
        </div>
    )
}

export default About