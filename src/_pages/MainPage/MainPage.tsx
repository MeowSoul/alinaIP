import React from "react"
import styles from "./mainPage.module.css"
import Header from "@/сomponents/header/Header"
import Poster from "@/сomponents/poster/Poster"
import ButtonShadows from "@/сomponents/buttonShadows/ButtonShadows"
import AboutMe from "@/сomponents/aboutMe/AboutMe"
import YandexMap from "@/сomponents/map/Map"
import MakeAnAppointment from "@/сomponents/makeAnAppointment/MakeAnAppointment"
import Contacts from "@/сomponents/contacts/Contacts"
import HeaderMobile from "@/сomponents/headerMobile/HeaderMobile"

const MainPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.posterBlock}>
                <Poster />
            </div>
            <div className={styles.shadowButtonBlock}>
                <ButtonShadows text={"ВЫБРАТЬ УСЛУГИ"} />
                <ButtonShadows text={"ВЫБРАТЬ ОБУЧЕНИЕ"} />
            </div>
            <div className={styles.aboutBlock}>
                <AboutMe />
            </div>
            <div className={styles.infoBlock}>
                <MakeAnAppointment />
                <div className={styles.contactsBlock}>
                    <Contacts />
                    <YandexMap />
                </div>
            </div>
        </div>
    )
}

export default MainPage
