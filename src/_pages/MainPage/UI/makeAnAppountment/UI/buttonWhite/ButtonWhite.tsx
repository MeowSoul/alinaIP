import { FC } from "react"
import styles from "./buttonWhite.module.css"
import Link from "next/link"

interface ButtonWhiteProps {
    text: string
    link: string
}

const ButtonWhite: FC<ButtonWhiteProps> = ({ text, link }) => {
    return (
        <Link href={link} className={styles.main}>
            <p>{text}</p>
            <span className={styles.cycrle}></span>
            <span className={styles.cycrle}></span>
            <span className={styles.cycrle}></span>
            <span className={styles.cycrle}></span>
        </Link>
    )
}

export default ButtonWhite
