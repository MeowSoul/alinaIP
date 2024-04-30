import React from "react"
import styles from "./contacts.module.css"

const Contacts = () => {
    return (
        <div className={styles.main}>
            <p className={styles.title}>Контакты</p>
            <div className={styles.info}>
                <p className={styles.subtitle}>Адреса:</p>
                <p className={styles.description}>г. Стерлитамак ул.Набережная 3/4</p>
                <p className={styles.description}>с.Б.Куганак ул.Ленина д.1 кв.67</p>
            </div>
            <div className={styles.info}>
                <p className={styles.subtitle}>Телефон:</p>
                <p className={styles.description}>+7 917-359-52-37</p>
            </div>
        </div>
    )
}

export default Contacts
