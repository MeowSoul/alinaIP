export interface IUpdateCourseContentRequest {
    content: {
        name: string
        icon: string

        pros: {
            description: string
        }[]

        points: {
            description: string
        }[]

        blocks: {
            name: string
            description: string
            image: string
        }[]
    }[]
}