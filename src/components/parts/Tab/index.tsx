import { FC } from "react";

export const Tab: FC = () => {
    return (
        <ul role='tablist' className="flex text-3xl font-bold underline">
            <li role='none presentation'>
                <button role='tab' aria-selected='true'>Tab 1</button>
            </li>
            <li role='none presentation'>
                <button role='tab' aria-selected='true'>Tab 2</button>
            </li>
            <li role='none presentation'>
                <button role='tab' aria-selected='true'>Tab 3</button>
            </li>
        </ul>
    )
}