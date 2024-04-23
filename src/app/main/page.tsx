import React from 'react';
import styles from './page.module.css'
import Header from "@/app/сomponents/header/Header";
import Poster from "@/app/сomponents/poster/Poster";
import ButtonShadows from "@/app/сomponents/buttonShadows/ButtonShadows";
import AboutMe from "@/app/сomponents/aboutMe/AboutMe";

const Page = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.posterBlock}>
                <Poster/>
            </div>
            <div className={styles.shadowButtonBlock}>
                <ButtonShadows text={"ВЫБРАТЬ УСЛУГИ"}/>
                <ButtonShadows text={"ВЫБРАТЬ ОБУЧЕНИЕ"}/>
            </div>
            <div className={styles.aboutBlock}>
                <AboutMe/>
            </div>
        </div>
    );
};

export default Page;