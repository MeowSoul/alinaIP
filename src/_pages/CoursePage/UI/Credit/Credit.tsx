import React from "react"
import styles from "./credit.module.css"

const Credit = () => {
    return (
        <div className={styles.main}>
            <p className={styles.title}>
                И самое приятное, на тарифы стандарт и премиум можно оформить рассрочку на 3/6 месяцев
            </p>
            <p className={styles.description}>
                Проценты банку оплачиваю я. А ваш первый платёж будет только через месяц после оформления рассрочки (за
                это время вы уже начнете принимать клиентов и зарабатывать)
            </p>
        </div>
    )
}

export default Credit
