import * as React from "react"
import Svg, {
    G,
    Circle,
    Path,
    Defs,
    Pattern,
    Use,
    Image,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function GeolocationIcon(props) {
    return (
        <Svg
            width={80}
            height={80}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <G filter="url(#prefix__filter0_d_28_617)">
                <Circle cx={59} cy={58} r={20} fill="#fff" />
            </G>
            <Path fill="url(#prefix__pattern0)" d="M46 40h44v44H46z" />
            <Defs>
                <Pattern
                    id="prefix__pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use xlinkHref="#prefix__image0_28_617" transform="scale(.02832)" />
                </Pattern>
                <Image
                    id="prefix__image0_28_617"
                    width={25}
                    height={23}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAACj0lEQVRYCe2WYVEEMQyFnwQkIAEHIAEH4AAcgAQcgAQcgANwAA7AAcx303fTC2l3e7fA/bjM7PR6TZOXlzSttIycS/qSxLhXcluAMe6VHIDNTcexpFNJTyWVjMz5/88FpzeS3goYij77WEfv10EeFUcRxKek5+pjHnUAyP7F5SQw9C7pusMGLLGOnkF+SMLOYnImCaM4gI3LQcvom0XsYG9nIUKDeu0wNOUIBtlPcDszR024wDG6a42wvwa3tT03TdLQOlmk5b60C4KgXTBvpQs7TuvdFM3ZOgZctFlNEa17l/XiyHrGCvas2wo4w7T6j2jYzKmKgrOXyvhjORCwhFPmdoxeBs6ndZg11xZHPgo9C8ekpJUy/nfKYC4KdrGBn9lSpzFSjUOz0QJlRz3dng/v/zHaIBFHeSjASNccsT5jFKezGSCPO64Mfy5qUhbFacwORNRl7kLv2cKffTOuH5tOTRwzY5NRBnRmH9tRHGT0u9YFIT3LnzdkwLy2JGPYtG/GNWMxEkfJ1RHFNbNEjfnkN2ssOu+dGIOG7imDPd2ej4hnY+5a6vWx3ksBUL78s5JwH8PPkLjzZw2QTu7LGOa4Gy/Kk5qRuQu6dfn75hju/DXVWaEDzgfBIOLIenYduYWgj59hMWukpGWAlHEgDJKReav+sOMUD7PlCIjW913rMrbunBF7TiF2Mzbn2Fnp8IKtwbWYmzIYQS3y9ictBkcaKPARQd/pw05WsyP2NnRr5ihaTutVp/ZglnWnjj2AWoSpDWSlJnwg6hMISC5if+7otQ77dqqpCCabwwaO3IRrAPVv1tHbti4z37P/wyk1WLcL5v8CJkPNqwC2GPdKDsBG08HjjlQ2H3mjBvdW/xuAuyiyjJLy5wAAAABJRU5ErkJggg=="
                />
            </Defs>
        </Svg>
    )
}

export default GeolocationIcon;
