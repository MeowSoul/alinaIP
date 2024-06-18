import React from "react"
import styles from "./makeAnAppointment.module.css"
import ButtonWhite from "@/_pages/MainPage/UI/makeAnAppountment/UI/buttonWhite/ButtonWhite"

const backgroundImage = "/img/lines.png"

const MakeAnAppointment = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.main}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>ЗАПИШИСЬ В САЛОН “MENTOL beauty”</h2>
                <ButtonWhite text={"ЗАПИСАТЬСЯ ОНЛАЙН"} link={"https://vk.com/mentol_alina"} />
                <ButtonWhite text={"ЗАПИСАТЬСЯ ЧЕРЕЗ WHATSAPP"} link={"https://wa.me/+79871400031"} />
            </div>
        </div>
    )
}

export default MakeAnAppointment
