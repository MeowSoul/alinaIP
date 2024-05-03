import React from "react"
import styles from "./mainPage.module.css"
import Poster from "@/_pages/MainPage/UI/poster/Poster"
import ButtonShadows from "@/_pages/MainPage/UI/buttonShadows/ButtonShadows"
import AboutMe from "@/_pages/MainPage/UI/aboutMe/AboutMe"
import YandexMap from "@/_pages/MainPage/UI/map/Map"
import MakeAnAppointment from "@/_pages/MainPage/UI/makeAnAppountment/MakeAnAppointment"
import Contacts from "@/_pages/MainPage/UI/contacts/Contacts"

const MainPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.posterBlock}>
                <Poster />
            </div>
            <div className={styles.shadowButtonBlock}>
                <ButtonShadows link={"education"} text={"ВЫБРАТЬ УСЛУГИ"} />
                <ButtonShadows link={""} text={"ВЫБРАТЬ ОБУЧЕНИЕ"} />
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
