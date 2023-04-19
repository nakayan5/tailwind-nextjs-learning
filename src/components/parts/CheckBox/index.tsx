import { FC, HTMLAttributes } from "react"

type TProps = {
    isActive: boolean
} & HTMLAttributes<HTMLInputElement>

export const CheckBox: FC<TProps> = ({ isActive, onChange, ...rest }) => {
    return (
        <input type='checkbox' checked={isActive} onChange={onChange} />
    )
}