import React from "react"
import styles from "./header.module.css"
import Link from "next/link"

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.menu}>
                <p className={styles.menuItem}>Портфолио</p>
                <Link href={"/EducationPage"} className={styles.menuItem}>
                    Услуги
                </Link>
                <p className={styles.menuItem}>Обучение</p>
                <p className={styles.menuItem}>Запись</p>
            </div>
        </div>
    )
}

export default Header
