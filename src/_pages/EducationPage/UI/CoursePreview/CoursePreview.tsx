import { FC } from "react"
import styles from "./coursePreview.module.css"
import Link from "next/link"

interface CoursePreviewItemProps {
    name: string
    description: string
    backgroundImage: string
    id: string
}

const CoursePreviewItem: FC<CoursePreviewItemProps> = ({ name, description, backgroundImage, id }) => {
    return (
        <div className={styles.main} style={{ backgroundImage: `url(http://files.projectmeow.ru/get/${backgroundImage})` }}>
            <div className={styles.info}>
                <h1 className={styles.title}>{name}</h1>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonBlock}>
                    <Link className={styles.button} href={`education/${id} `}>
                        Выбрать
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CoursePreviewItem
