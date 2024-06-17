import { FC } from "react"
import styles from "./coursePreview.module.css"
import Link from "next/link"

interface CoursePreviewItemProps {
    name: string
    description: string
    backgroundImage: string
    link: string
}

const CoursePreviewItem: FC<CoursePreviewItemProps> = ({ name, description, backgroundImage, link }) => {
    return (
        <div className={styles.main} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.info}>
                <h1 className={styles.title}>{name}</h1>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonBlock}>
                    <Link className={styles.button} href={`education/${link} `}>
                        Выбрать
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CoursePreviewItem
