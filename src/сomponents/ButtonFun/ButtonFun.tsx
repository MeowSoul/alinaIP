import React, { FC, PropsWithChildren } from "react"
import styles from "@/_pages/OwnerPage/UI/Panel/UI/OutputCourse/outputCourse.module.css"

interface IProps {
    onClick: () => void
}

const ButtonFun: FC<PropsWithChildren<IProps>> = ({ onClick, children }) => {
    return (
        <button className={styles.delete} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonFun
