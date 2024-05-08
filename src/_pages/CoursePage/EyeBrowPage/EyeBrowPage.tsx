import React from "react"
import styles from "./eyeBrowPage.module.css"
import Course from "@/_pages/CoursePage/UI/Course/Course"
import Credit from "@/_pages/CoursePage/UI/Credit/Credit"
import MakeAnAppointment from "@/_pages/MainPage/UI/makeAnAppountment/MakeAnAppointment"
import Contacts from "@/_pages/MainPage/UI/contacts/Contacts"

const EyeBrowPage = () => {
    return (
        <div className={styles.main}>
            <Course />
            <Credit />
            <div className={styles.infoBlock}>
                <MakeAnAppointment />
                <div className={styles.contactsBlock}>
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default EyeBrowPage
