"use client"

import React from "react"
import { YMaps, Map as YandexMap, Placemark } from "react-yandex-maps"

const Map = () => {
    return (
        <YMaps>
            <YandexMap defaultState={{ center: [53.614103, 55.946061], zoom: 18 }} />
            <Placemark geometry={[53.614103, 55.946061]} />
        </YMaps>
    )
}

export default Map
