
//styles
declare module '*.sass'

//images
declare module '*.svg'
declare module '*.png'

declare namespace JSX {
    interface ExtendedDiv
        extends React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
            > {
        customAttribute?: string;
    }
}