import { FC, HTMLAttributes } from "react"


type T = HTMLAttributes<HTMLButtonElement>

type TProps = {
    //
} & HTMLAttributes<HTMLButtonElement>

export const Button: FC<TProps> = ({...rest}) => {
    return (
        <button type='button' aria-label={rest["aria-label"]}>Button</button>
    )
}