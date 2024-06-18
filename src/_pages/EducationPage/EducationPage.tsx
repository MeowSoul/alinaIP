import React from "react"
import styles from "./educationPage.module.css"
import CoursePreviewItem from "@/_pages/EducationPage/UI/CoursePreview/CoursePreview"
import { CourseApi } from "@/enitities/course/api/courseApi"
import { AlertService } from "@/services/AlertService"

const EducationPage = async () => {
    let courses = await CourseApi.getCourses()

    if (courses.hasError()) {
        AlertService.error(courses.getError())
    }

    let result = courses.unwrap()

    return (
        <div className={styles.main}>
            {result.map((course) => (
                <CoursePreviewItem
                    key={course.id}
                    name={course.name}
                    description={course.description}
                    backgroundImage={course.image}
                    id={`${course.id}`}
                />
            ))}
        </div>
    )
}

export default EducationPage
