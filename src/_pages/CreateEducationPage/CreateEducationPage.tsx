"use client"

import React from "react"
import { useCreateEducationPage } from "@/_pages/CreateEducationPage/useCreateEducationPage"
import ButtonFun from "@/сomponents/ButtonFun/ButtonFun"
import ProsCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/ProsCourse/ProsCourseItem/ProsCourseItem"
import PointsCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/PointsCourse/PointsCourseItem/PointsCourseItem"
import BlocksCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/BlocksCourse/BlocksCourseItem/BlocksCourseItem"
import styles from "./createEducationPage.module.css"

const CreateEducationPage = () => {
    const {
        setName,
        fileRef,
        setIcon,
        setImage,
        content,
        icon,
        image,
        UploadImageHandler,
        setPros,
        setPoints,
        points,
        pros,
        AddTypicalBlockHandler,
        setPointsDescription,
        setProsDescription,
        prosDescription,
        pointsDescription,
        BlockChangeHandler,
        BlocksChangeHandler,
        blocks,
        imageRef,
        setBlocks,
        block,
        ContentHandler,
        SubmitHandler,
    } = useCreateEducationPage()

    return (
        <form className={styles.form} onSubmit={SubmitHandler}>
            <label htmlFor="" className={styles.caption}>
                Название курса
            </label>

            <input
                type="text"
                placeholder={"Введите название курса"}
                onChange={(e) => setName(e.target.value)}
                className={styles.field}
            />

            <input
                className={styles.upload_image_input}
                type="file"
                ref={fileRef}
                onChange={(e) => UploadImageHandler(e.target.files, false)}
            />

            <p onClick={() => fileRef.current?.click()} className={styles.upload_image_button}>
                Загрузить иконку
            </p>

            <div>
                {icon.length !== 0 && (
                    <div className={styles.item_img}>
                        <img src={`http://files.projectmeow.ru/get/${icon}`} alt="" />
                        <p className={styles.delete} onClick={() => setIcon("")}>
                            X
                        </p>
                    </div>
                )}
            </div>

            <div className={styles.pros_wrapper}>
                <input
                    type="text"
                    placeholder={"Введите плюс вашего курса"}
                    onChange={(e) => setProsDescription(e.target.value)}
                    value={prosDescription}
                    className={styles.field}
                />
                <p onClick={() => AddTypicalBlockHandler("pros")}>Добавить</p>
            </div>

            <div>
                {pros.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <p>{item.description}</p>
                        <p
                            className={styles.delete}
                            onClick={() => setPros((prevState) => [...prevState.filter((e) => e.id !== item.id)])}
                        >
                            X
                        </p>
                    </div>
                ))}
            </div>

            <div className={styles.pros_wrapper}>
                <input
                    type="text"
                    placeholder={"Введите особенность вашего курса"}
                    onChange={(e) => setPointsDescription(e.target.value)}
                    value={pointsDescription}
                    className={styles.field}
                />
                <p onClick={() => AddTypicalBlockHandler("points")}>Добавить</p>
            </div>

            <div>
                {points.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <p>{item.description}</p>
                        <p
                            className={styles.delete}
                            onClick={() => setPoints((prevState) => [...prevState.filter((e) => e.id !== item.id)])}
                        >
                            X
                        </p>
                    </div>
                ))}
            </div>

            <div className={styles.block}>
                <h1 className={styles.caption}>Основной блок</h1>

                <input
                    placeholder={"Введите название блока"}
                    type="text"
                    name={"name"}
                    value={block.name ?? ""}
                    onChange={(e) => BlockChangeHandler(e.target.name, e.target.value)}
                    className={styles.field_block}
                />
                <input
                    placeholder={"Введите описание блока"}
                    type="text"
                    name={"description"}
                    value={block.description ?? ""}
                    onChange={(e) => BlockChangeHandler(e.target.name, e.target.value)}
                    className={styles.field_block}
                />
                <input
                    type="file"
                    ref={imageRef}
                    className={styles.upload_image_input}
                    onChange={(e) => UploadImageHandler(e.target.files, true)}
                />
                <p onClick={() => imageRef.current?.click()} className={styles.upload_image_button}>
                    Загрузить картинку
                </p>

                <div>
                    {block.image && block.image.length !== 0 && (
                        <div>
                            <p onClick={() => setImage("")}>X</p>
                            <img src={`http://files.projectmeow.ru/get/${image}`} alt="" />
                        </div>
                    )}
                </div>

                <p className={styles.button} onClick={BlocksChangeHandler}>
                    Добавить блок
                </p>
            </div>

            <div>
                {blocks.map((block) => (
                    <div>
                        <p
                            onClick={() =>
                                setBlocks((prevState) => [...prevState.filter((item) => item.id !== block.id)])
                            }
                        >
                            X
                        </p>
                        <BlocksCourseItem
                            title={block.name ?? ""}
                            description={block.description ?? ""}
                            url={`http://files.projectmeow.ru/get/${block.image}`}
                        />
                    </div>
                ))}
            </div>

            <p className={styles.button} onClick={ContentHandler}>
                Добавить курс
            </p>

            <div>
                {content.map((content) => (
                    <div>
                        <div>
                            <p>{content.name}</p>
                            <img src={`files.projecmeow.ru/get/${content.icon}`} alt="" />
                        </div>

                        <div className={styles.wrapper_items}>
                            {content.pros.map((pros, index) => (
                                <ProsCourseItem key={index} numberPros={index + 1} text={pros.description} />
                            ))}
                        </div>

                        <div className={styles.wrapper_items}>
                            {content.points.map((point, index) => (
                                <PointsCourseItem key={index} text={point.description} number={index + 1} />
                            ))}
                        </div>

                        <div className={styles.wrapper_items}>
                            {content.blocks.map((block) => (
                                <BlocksCourseItem
                                    title={block.name}
                                    description={block.description}
                                    url={`http://files.projectmeow.ru/get/${block.image}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <ButtonFun>Создать</ButtonFun>
        </form>
    )
}

export default CreateEducationPage
