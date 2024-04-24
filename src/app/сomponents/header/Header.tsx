import React from "react"
import styles from "./header.module.css"

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.menu}>
                <p className={styles.menuItem}>Портфолио</p>
                <p className={styles.menuItem}>Услуги</p>
                <p className={styles.menuItem}>Обучение</p>
                <p className={styles.menuItem}>Запись</p>
            </div>
        </div>
    )
}

export default Header
