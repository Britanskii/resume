export const variants = {
    initial: {
        opacity: 0,
        y: -100,
    },
    appearance: (custom: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * .15 + .5
            }
        }
    }
}