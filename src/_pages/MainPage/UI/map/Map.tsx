"use client"

import React, { FC } from "react"
import { YMaps, Map } from "@pbe/react-yandex-maps"
import styles from "./map.module.css"

interface IProps {
    State: number[]
}

const YandexMap: FC<IProps> = ({ State }) => {
    return (
        <YMaps>
            <Map
                className={styles.map}
                state={{ center: State, zoom: 18 }}
                defaultState={{ center: [53.614103, 55.946061], zoom: 18 }}
            />
        </YMaps>
    )
}

export default YandexMap
