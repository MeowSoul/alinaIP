"use client"

import React, { useState } from "react"
import styles from "./contacts.module.css"
import YandexMap from "@/_pages/MainPage/UI/map/Map"

const Contacts = () => {
    const [coordinates, setCoordinates] = useState<number[]>([53.614103, 55.946061])

    return (
        <div className={styles.main}>
            <div className={styles.contactWrapper}>
                <p className={styles.title}>Контакты</p>
                <div className={styles.info}>
                    <p className={styles.subtitle}>Адреса:</p>
                    <p className={styles.description} onClick={() => setCoordinates([53.614103, 55.946061])}>
                        г. Стерлитамак ул.Набережная 3/4
                    </p>
                    <p className={styles.description} onClick={() => setCoordinates([53.80869, 56.099924])}>
                        с.Б.Куганак ул.Ленина д.1 кв.67
                    </p>
                </div>
                <div className={styles.info}>
                    <p className={styles.subtitle}>Телефон:</p>
                    <p className={styles.description}>+7 917-359-52-37</p>
                </div>
            </div>
            <YandexMap State={coordinates} />
        </div>
    )
}

export default Contacts
