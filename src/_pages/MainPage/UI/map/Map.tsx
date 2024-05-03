"use client"

import React from "react"
import { YMaps, Map } from "@pbe/react-yandex-maps"
import styles from "./map.module.css"

interface MapProps {
    coordinateX: number
    coordinateY: number
}

const YandexMap: React.FC<MapProps> = (coordinateX, coordinateY) => {
    return (
        <YMaps>
            <Map className={styles.map} defaultState={{ center: [53.614103, 55.946061], zoom: 18 }} />
        </YMaps>
    )
}

export default YandexMap