const delay = 1.2

export const variants = {
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

export const lightVariants = {
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

export const darkVariants = {
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

export const titleVariants = {
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
