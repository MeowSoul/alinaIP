import { FC } from "react"
import styles from "./prosCourseItem.module.css"

interface IProsCourseProps {
    numberPros: string
    text: string
}

const ProsCourseItem: FC<IProsCourseProps> = ({ numberPros, text }) => {
    return (
        <div className={styles.main}>
            <p className={styles.number}>{numberPros}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default ProsCourseItem
