import {DataLinks} from "../../../types/types"

export const dataLinks: DataLinks = [
    {text: "Britanskii", type: "div", to: "/"},
    {text: "Главная", type: "div", to: "/"},
    {
        text: "Проекты", type: "dropdown", items: [
            {text: "Zerro", to:"projects/zerro"},
            {text: "Новелла", to:"projects/novel"},
            {text: "Карточки", to:"projects/englishcards"}
        ], to: "/projects"
    },
    {text: "Музыка", type: "div", to: "/music"},
]