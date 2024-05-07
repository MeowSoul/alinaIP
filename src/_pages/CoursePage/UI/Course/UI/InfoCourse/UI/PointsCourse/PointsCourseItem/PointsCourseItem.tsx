import React, { FC } from "react"
import styles from "./pointsCourseItem.module.css"

interface PointsCourseItemProps {
    number: string
    text: string
}

const PointsCourseItem: FC<PointsCourseItemProps> = ({ number, text }) => {
    return (
        <div className={styles.main}>
            <p className={styles.number}>{number}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default PointsCourseItem
