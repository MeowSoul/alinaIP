import React from "react"
import styles from "./educationPage.module.css"
import HeaderMobile from "@/сomponents/headerMobile/HeaderMobile"
import Header from "@/сomponents/header/Header"

const EducationPage = () => {
    return (
        <div className={styles.main}>
            <HeaderMobile />
            <Header />
            <div className={styles.chooseBlock}></div>
        </div>
    )
}

export default EducationPage
