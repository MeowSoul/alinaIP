"use client"

import React, { useState } from "react"
import styles from "./headerMobile.module.css"
import Link from "next/link"

const HeaderMobile = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.main}>
            <div className={isActive ? styles.wrapper_active : styles.wrapper} onClick={() => setIsActive(!isActive)}>
                <Link href={"/"} className={styles.link}>
                    Портфолио
                </Link>
                <Link href={"education"} className={styles.link}>
                    Услуги
                </Link>
                <Link href={"education"} className={styles.link}>
                    Обучение
                </Link>
                <Link href={"/"} className={styles.link}>
                    Запись
                </Link>
            </div>
            <div
                className={isActive ? styles.button_active : styles.button}
                onClick={() => setIsActive((prevState) => !prevState)}
            >
                <div className={isActive ? styles.line_active : styles.line}></div>
                <div className={isActive ? styles.line_active : styles.line}></div>
                <div className={isActive ? styles.line_active : styles.line}></div>
            </div>
        </div>
    )
}

export default HeaderMobile
