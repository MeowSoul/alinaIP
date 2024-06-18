import React, { FC } from "react"
import styles from "./tableCourse.module.css"
import { CourseEntity } from "@/enitities/course/courseEntity"

interface IProps {
    course: CourseEntity
}

const table_eyeBrow_first = [
    {
        content: "Кто такой успешный бровист? Какие услуги дополнительно он может предоставлять?",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Стартовый набор (только необходимое). Организация рабочего места. Снятие запроса (пожелания клиента)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Дезинфекция и стерлизация по требованиям СанПиН (безопасность мастера и клиента)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Дезинфекция и стерлизация по требованиям СанПиН (безопасность мастера и клиента)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Дезинфекция и стерлизация по требованиям СанПиН (безопасность мастера и клиента)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Цветотипы клиента. Что делать с сединой?",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Как отрастить брови?",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Круг Иттена. Базовая колористика. УГТ (уровень глубины тона) волоса",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Строение бровей и построение формы. Классификация бровей по оси и их возможные формы",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Окрашивание бровей хной. Этапы, особенности и техника окрашивания",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Окрашивание бровей краской. Этапы и особенности работы с краской",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Общие правила окрашивания. Проведение процедуры при менструации, беременным, кормящим",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Как подобрать цвет? Как создать эффект омбре/градиент?",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Как работать со сложными, ассиметричными бровями?",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Миксы хна/краска",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Долговременная укладка. Разбор составов. Основные правила. Алгоритм процедуры",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content:
            "Виды коррекции бровей. Пинцет, нить, воск. Прореживание/коррекция внутри брови. Уход за кожей после коррекции воском. Побочные эффекты и противопоказания к коррекции воском",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Уход и последующие рекомендации после оформления бровей",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Счастье для бровей и ботокс. Правила приготовления. Этапы процедуры",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Мужская и детская коррекция бровей",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Аллергия и ее симптомы. Как определить возможность реакции",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
]

const table_eyeBrow_second = [
    {
        content: "Откуда взять первых клиентов. Психология работы с клиентом. Работа с клиентской базой",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Оформление самозанятости",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Первичный контент мастера (готовое портфолио с фотографиями работ, фотографиями мастера)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content:
            "Продвижение мастера в соц. сетях (Как оформить страницу, аватарка, шапка профиля, визуал страницы, типы контента, бесплатные способы продвижения). Работа с моделями. Готовые темы для постов. 100 цепляющих заголовков",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Обработка фото и видео",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
]

const table_eyeBrow_third = [
    {
        content: "Отрисовка эскиза бровей",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Техники нанесения красителей",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Работа с воском на практике",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "1 демонстрация оформления бровей с окрашиванием (краска/хна) (я показываю)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "3 отработки на моделях - оформление бровей с окрашиванием (краска/хна)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "1 демонстрация долговременной укладки бровей с окрашиванием",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "2 отработки на моделях долговременной укладки бровей с окрашиванием",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Вручение сертификата",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Методическое пособие",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content:
            "Поддержка в телеграмм канале, куда входит консультация по закупке материалов и всех возникающих вопросов в процессе вашей практики",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
]

const table_eyeLashes_first = [
    {
        content: "Строение ресниц. Фазы роста",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Разбор материалов для наращивания ресниц. Пинцеты. Обработка инструментов в соответствии с СанПин",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content:
            "Моделирование взгляда и построение эффектов. Цветное колорирование. Изучаем и исправляем формы глаз и геометрию лица. Ассиметрия глаз и техника ее устранения наращиванием",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Аллергия и способы её предотвращения у мастера. Аллергия у клиента. Противопоказания",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Техника приклеивания ресниц. Отслойки. Склейки",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Клей, как с ним подружиться. Правильная работа с каплей клея",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content:
            "Формирование классики и 2D. Правильная геометрия пучка. Правила идеальной постановки ресниц. Направление постановки ресниц. Как получить ровный ресничный ряд. Переход между длинами и изгибами. Наращивание на анагены. Работа с рядами. Работа с отступом",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Этапы наращивания ресниц. Правильная организация рабочего места. Снятие запроса (пожелания клиента)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Уход за ресницами. Снятие ресниц",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Разбор частых ошибок, влияющие на срок носки",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
]

const table_eyeLashes_second = [
    {
        content: "Откуда взять первых клиентов. Психология работы с клиентом. Работа с клиентской базой",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Здоровьесбережение мастера",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Оформление самозанятости",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Первичный контент мастера (готовое портфолио с фотографиями работ, фотографиями мастера)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content:
            "Продвижение мастера в соц. сетях (Как оформить страницу, аватарка, шапка профиля, визуал страницы, типы контента, бесплатные способы продвижения). Работа с моделями. Готовые темы для постов. 100 цепляющих заголовков",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Обработка фото и видео",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
]

const table_eyeLashes_third = [
    {
        content: "Отработка техники наращивания на манекене (+снятие ресниц)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Отработка техники классического наращивания на живой модели",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Вторая отработка техники наращивания ресниц на живой модели (классика, мокрый, двойной объем)",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Вручение сертификата",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content: "Методическое пособие",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
    {
        content:
            "Поддержка в телеграмм канале, куда входит консультация по закупке материалов и всех возникающих вопросов в процессе вашей практики",
        nullable: false,
        based: false,
        standard: false,
        premium: false,
    },
]

const TableCourse: FC<IProps> = ({ course }) => {
    return (
        <div className={styles.main}>
            {course.id == 1 && (
                <div>
                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>Нулевой</div>
                        <div className={styles.cellCaptionTable}>Базовый</div>
                        <div className={styles.cellCaptionTable}>Стандарт</div>
                        <div className={styles.cellCaptionTable}>Премиум</div>
                    </div>
                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>Теория в онлайне</div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                    </div>
                    {table_eyeBrow_first.map((row, index) => (
                        <div className={styles.stringTable}>
                            <div className={styles.cellNumberTable}>{index + 1}</div>
                            <div className={styles.cellTable}>{row.content}</div>
                            <div className={styles.cellPlusTable}>{row.nullable ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.based ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.standard ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.premium ? "+" : "-"}</div>
                        </div>
                    ))}
                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>дополнительные блоки</div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                    </div>

                    {table_eyeBrow_second.map((row, index) => (
                        <div className={styles.stringTable}>
                            <div className={styles.cellNumberTable}>{index + 22}</div>
                            <div className={styles.cellTable}>{row.content}</div>
                            <div className={styles.cellPlusTable}>{row.nullable ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.based ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.standard ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.premium ? "+" : "-"}</div>
                        </div>
                    ))}

                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>практические отработки</div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                    </div>

                    {table_eyeBrow_third.map((row, index) => (
                        <div className={styles.stringTable}>
                            <div className={styles.cellNumberTable}>{index + 27}</div>
                            <div className={styles.cellTable}>{row.content}</div>
                            <div className={styles.cellPlusTable}>{row.nullable ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.based ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.standard ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.premium ? "+" : "-"}</div>
                        </div>
                    ))}
                </div>
            )}

            {/*/// id*/}

            {course.id == 2 && (
                <div>
                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>Нулевой</div>
                        <div className={styles.cellCaptionTable}>Базовый</div>
                        <div className={styles.cellCaptionTable}>Стандарт</div>
                        <div className={styles.cellCaptionTable}>Премиум</div>
                    </div>
                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>Теория в онлайне</div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                    </div>
                    {table_eyeLashes_first.map((row, index) => (
                        <div className={styles.stringTable}>
                            <div className={styles.cellNumberTable}>{index + 1}</div>
                            <div className={styles.cellTable}>{row.content}</div>
                            <div className={styles.cellPlusTable}>{row.nullable ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.based ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.standard ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.premium ? "+" : "-"}</div>
                        </div>
                    ))}
                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>дополнительные блоки</div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                    </div>
                    {table_eyeLashes_second.map((row, index) => (
                        <div className={styles.stringTable}>
                            <div className={styles.cellNumberTable}>{index + 11}</div>
                            <div className={styles.cellTable}>{row.content}</div>
                            <div className={styles.cellPlusTable}>{row.nullable ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.based ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.standard ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.premium ? "+" : "-"}</div>
                        </div>
                    ))}
                    <div className={styles.stringTable}>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellCaptionTable}>практические отработки</div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                        <div className={styles.cellTable}></div>
                    </div>
                    {table_eyeLashes_third.map((row, index) => (
                        <div className={styles.stringTable}>
                            <div className={styles.cellNumberTable}>{index + 17}</div>
                            <div className={styles.cellTable}>{row.content}</div>
                            <div className={styles.cellPlusTable}>{row.nullable ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.based ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.standard ? "+" : "-"}</div>
                            <div className={styles.cellPlusTable}>{row.premium ? "+" : "-"}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TableCourse
