import React from "react"
import styles from "./educationPage.module.css"
import CoursePreviewItem from "@/_pages/EducationPage/UI/CoursePreview/CoursePreview"

const EducationPage = () => {
    return (
        <div className={styles.main}>
            <CoursePreviewItem
                description={
                    "Процедура, включающая в себя коррекцию формы бровей, окрашивание и создание художественного оформления"
                }
                name={"Оформление бровей"}
                backgroundImage={"/img/Eyebrow.png"}
                link={"education/eyebrow/basic-course"}
            />
            <CoursePreviewItem
                description={
                    " Процесс удлинения и увеличения объема натуральных ресниц при помощи искусственных ресниц"
                }
                name={"Наращивание ресниц"}
                backgroundImage={"/img/Eyelashes.png"}
                link={"education/eyelashes/basic-course"}
            />
        </div>
    )
}

export default EducationPage
