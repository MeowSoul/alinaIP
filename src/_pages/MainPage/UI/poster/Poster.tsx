import React from "react"
import styles from "./poster.module.css"

const backgroundImage = "/img/poster.png"

const Poster = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.main}>
            <div className={styles.text}>
                <h1 className={styles.title}>TRIFONOVA ALINA</h1>
                <h2 className={styles.description}>
                    Владелец студий красоты “MENTOL beauty” Топ-мастер и инструктор по наращиванию ресниц, оформлению
                    бровей <br /> Мастер по перманентному макияжу
                </h2>
            </div>
        </div>
    )
}

export default Poster
