import React from "react"
import styles from "./buttonShadows.module.css"
import Link from "next/link"

interface ButtonShadowsProps {
    text: string
    link: string
}

const ButtonShadows: React.FC<ButtonShadowsProps> = ({ text, link }) => {
    return (
        <Link href={link} className={styles.main}>
            <p className={styles.text}>{text}</p>
        </Link>
    )
}

export default ButtonShadows
