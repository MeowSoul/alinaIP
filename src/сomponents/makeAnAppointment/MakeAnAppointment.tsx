import React from "react"
import styles from "./makeAnAppointment.module.css"
import ButtonWhite from "@/сomponents/makeAnAppointment/UI/buttonWhite/ButtonWhite"

const backgroundImage = "/img/lines.png"

const MakeAnAppointment = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.main}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>ЗАПИШИСЬ В САЛОН “MENTOL beauty”</h2>
                <ButtonWhite text={"ЗАПИСАТЬСЯ ОНЛАЙН"} />
                <ButtonWhite text={"ЗАПИСАТЬСЯ ЧЕРЕЗ WHATSAPP"} />
            </div>
        </div>
    )
}

export default MakeAnAppointment
