import {Dispatch, SetStateAction} from "react"

export const toggle = (setter: Dispatch<SetStateAction<boolean>>) => {
    setter(isBoolean => isBoolean = !isBoolean)
}