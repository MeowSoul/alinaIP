import React from "react"
import styles from "./prosCourseItem.module.css"

interface ProsCourseProps {
    numberPros: string
    text: string
}

const ProsCourseItem: React.FC<ProsCourseProps> = ({ numberPros, text }) => {
    return (
        <div className={styles.main}>
            <p className={styles.number}>{numberPros}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default ProsCourseItem
