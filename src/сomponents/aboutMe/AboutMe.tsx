import React from "react"
import styles from "./aboutMe.module.css"

const AboutMe = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Обо мне</h2>
            <div className={styles.subtitlesBlock}>
                <h3 className={styles.subtitle}>Владелец студий “MENTOL beauty”</h3>
                <h3 className={styles.subtitle}>
                    Мастер и преподаватель по наращиванию ресниц и оформлению бровей. <br /> Мастер по перманентному
                    макияжу.
                </h3>
            </div>
            <div className={styles.listBlock}>
                <div className={styles.listItem}>
                    <p className={styles.listNumber}>1</p>
                    <p className={styles.listText}>Более 20 сертификатов о повышении квалификации в России</p>
                </div>
                <div className={styles.listItem}>
                    <p className={styles.listNumber}>2</p>
                    <p className={styles.listText}>Опыт в бьюти-сфере более 6 лет</p>
                </div>
                <div className={styles.listItem}>
                    <p className={styles.listNumber}>3</p>
                    <p className={styles.listText}>Вложила в свои знания более 500 000 руб.</p>
                </div>
            </div>
            <div>
                <img src="./img/about.jpg" alt="" className={styles.img} />
            </div>
        </div>
    )
}

export default AboutMe
