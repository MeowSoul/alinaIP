import React, { FC } from "react"
import styles from "./blocksCourse.module.css"

interface BlocksCourseProps {
    title: string
    description: string
}

const BlocksCourse: FC<BlocksCourseProps> = ({ title, description }) => {
    return (
        <div>
            <img src="" alt="" />
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default BlocksCourse
