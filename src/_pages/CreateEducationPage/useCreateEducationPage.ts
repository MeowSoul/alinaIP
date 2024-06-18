import { FormEvent, useEffect, useRef, useState } from "react"
import { CourseApi } from "@/enitities/course/api/courseApi"
import { useParams } from "next/navigation"
import { AlertService } from "@/services/AlertService"
import { RedirectService } from "@/services/RedirectService"
import { FileApi } from "@/enitities/file/fileApi/FileApi"

interface ITypicalBlock {
    id: string
    description: string
}

interface IBlock {
    id?: string
    name?: string
    description?: string
    image?: string
}

interface IRequestData {
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
}

export const useCreateEducationPage = () => {
    const fileRef = useRef<HTMLInputElement | null>(null)
    const imageRef = useRef<HTMLInputElement | null>(null)

    const [name, setName] = useState("")

    const [icon, setIcon] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const [pros, setPros] = useState<ITypicalBlock[]>([])
    const [points, setPoints] = useState<ITypicalBlock[]>([])
    const [blocks, setBlocks] = useState<IBlock[]>([])

    const [prosDescription, setProsDescription] = useState<string>("")
    const [pointsDescription, setPointsDescription] = useState<string>("")

    const [block, setBlock] = useState<IBlock>({})

    const [content, setContent] = useState<IRequestData[]>([])

    const params = useParams()

    useEffect(() => {
        console.log(
            "%cЭто объективный кринж",
            "color: #ddfbff; -webkit-text-stroke: 1px black; font-size: 56px; font-weight: bold;",
        )
    }, [])

    const UploadImageHandler = async (file: FileList | null, isImage: boolean) => {
        if (file) {
            const formData = new FormData()
            formData.append("file", file[0])
            const result = await FileApi.uploadFile(formData)

            if (result.hasError()) {
                return AlertService.error(result.getError())
            }

            if (isImage) {
                setImage(result.unwrap().id)
                BlockChangeHandler("image", result.unwrap().id)
            } else {
                setIcon(result.unwrap().id)
            }
        }
    }

    const SubmitHandler = async (event: FormEvent) => {
        event.preventDefault()

        const result = await CourseApi.updateCourseContent(Number(params.id), { content })

        if (result.hasError()) {
            return AlertService.error(result.getError())
        }

        RedirectService.redirectToPrevPage()
    }

    const AddTypicalBlockHandler = async (typeBlock: "pros" | "points") => {
        if (typeBlock === "pros") {
            setPros((prevState) => [
                ...prevState,
                {
                    id: new Date().getUTCDate().toString(),
                    description: prosDescription,
                },
            ])
            setProsDescription("")
        } else {
            setPoints((prevState) => [
                ...prevState,
                {
                    id: new Date().getUTCDate().toString(),
                    description: pointsDescription,
                },
            ])
            setPointsDescription("")
        }
    }

    const BlocksChangeHandler = () => {
        setBlocks((prevState) => [...prevState, block])
        setBlock({})
    }

    const BlockChangeHandler = (name: string, value: string) => {
        setBlock((prevState) => ({
            ...prevState,
            id: new Date().getUTCDate().toString(),
            [name]: value,
        }))
    }

    const ContentHandler = () => {
        setContent((prevState) => [
            ...prevState,
            {
                name,
                icon,
                pros: pros.map((pros) => ({ description: pros.description })),
                points: points.map((point) => ({ description: point.description })),
                blocks: blocks.map((block) => ({
                    name: block.name ?? "",
                    description: block.description ?? "",
                    image: block.image ?? "",
                })),
            },
        ])

        setPros([])
        setBlocks([])
        setPoints([])
        setBlock({})
    }

    return {
        fileRef,
        setName,
        UploadImageHandler,
        AddTypicalBlockHandler,
        content,
        icon,
        image,
        setImage,
        setIcon,
        prosDescription,
        pointsDescription,
        pros,
        points,
        setPros,
        setPoints,
        setPointsDescription,
        setProsDescription,
        BlockChangeHandler,
        BlocksChangeHandler,
        blocks,
        imageRef,
        setBlocks,
        block,
        ContentHandler,
        SubmitHandler,
    }
}
