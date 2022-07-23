export const variantsText = {
    initial: {
        opacity: 0,
        x: -100,
    },
    appearance:  (custom: number) => {
        return {
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * .15
            }
        }
    }
}

export const variants = {
    appearance: {
    },
    rotate: {
        rotate: 180,
        transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "linear"
        }
    }
}