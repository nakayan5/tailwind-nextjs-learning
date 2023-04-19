import { CheckBox } from "@/components/parts/CheckBox"
import { Tab } from "@/components/parts/Tab"

export const TopContainer = () => {
    return (
        <>
            <Tab />
            <CheckBox isActive={true} onChange={() => {}} />
            <div role='heading' aria-level={1}>haeding7です</div>
        </>
    )
}