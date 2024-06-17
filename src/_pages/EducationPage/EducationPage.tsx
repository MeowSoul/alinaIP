import React from "react"
import styles from "./educationPage.module.css"
import CoursePreviewItem from "@/_pages/EducationPage/UI/CoursePreview/CoursePreview"
import { CourseApi } from "@/enitities/course/api/courseApi"

const EducationPage = async () => {
    let courses = await CourseApi.getCourses()

    if (courses.hasError()) {
        console.log(courses.getError())
    }

    let result = courses.unwrap()

    return (
        <div className={styles.main}>
            {result.map((course) => (
                <CoursePreviewItem
                    key={course.id}
                    name={course.name}
                    description={course.description}
                    backgroundImage={"/img/Eyebrow.png"}
                    link={`${course.id}`}
                />
            ))}
        </div>
    )
}

export default EducationPage
