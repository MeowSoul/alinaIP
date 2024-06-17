"use client"

import React, { useState } from "react"
import ModalWindow from "@/_pages/OwnerPage/UI/ModalWindow/ModalWindow"
import styles from "./ownerPage.module.css"
import Panel from "@/_pages/OwnerPage/UI/Panel/Panel"

const OwnerPage = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            <Panel />
            {isActive && <ModalWindow onClick={setIsActive} />}
        </div>
    )
}

export default OwnerPage
