import React, { CSSProperties, FC } from "react"
import classes from "./pointsCourseItem.module.css"

interface PointsCourseItemProps {
    number: string
    text: string
    styles?: CSSProperties
}

const PointsCourseItem: FC<PointsCourseItemProps> = ({ number, text, styles }) => {
    return (
        <div className={classes.main} style={styles}>
            <p className={classes.number}>{number}</p>
            <p className={classes.text}>{text}</p>
        </div>
    )
}

export default PointsCourseItem
