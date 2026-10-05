import type { HTMLAttributes } from "react";
import { SpaceEnum } from "@/utils/enums";
import "./columns.scss"

type ColumnsProps = {
    columnNumber?: 2 | 3 | 4;
    gap?: SpaceEnum;
    columnGap?: SpaceEnum;
    rowGap?: SpaceEnum;
} & HTMLAttributes<HTMLButtonElement>;

const Columns = ({columnNumber = 2, gap = SpaceEnum.base, columnGap, rowGap,  className = "", children, ...props}: ColumnsProps) => {
    return <div className={`columns-${columnNumber} ${className ?? ''}`}></div>
}

export default Columns