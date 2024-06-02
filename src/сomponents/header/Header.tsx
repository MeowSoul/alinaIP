import React from "react"
import styles from "./header.module.css"
import Link from "next/link"

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.menu}>
                <Link href={"/"} className={styles.menuItem}>
                    Портфолио
                </Link>
                <Link href={"education"} className={styles.menuItem}>
                    Услуги
                </Link>
                <Link href={"education"} className={styles.menuItem}>
                    Обучение
                </Link>
                <Link href={"/"} className={styles.menuItem}>
                    Запись
                </Link>
            </div>
        </div>
    )
}

export default Header
