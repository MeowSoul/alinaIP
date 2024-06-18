"use client"

import React, { Dispatch, FC, SetStateAction, useState } from "react"
import styles from "./modalWindow.module.css"

interface IModalWindow {
    onClick: Dispatch<SetStateAction<boolean>>
}
const ModalWindow: FC<IModalWindow> = ({ onClick }) => {
    const password = "DFg12gfaqwe12!"

    const [inputPassword, setInputPassword] = useState("")

    function checkPassword() {
        if (password === inputPassword) {
            onClick.call(null, false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <p className={styles.text}>Страница владельца</p>
                <input
                    type="text"
                    placeholder="Введите пароль"
                    className={styles.input}
                    onChange={(event) => setInputPassword(event.target.value)}
                />
                <button onClick={checkPassword}>Submit</button>
            </div>
        </div>
    )
}

export default ModalWindow
