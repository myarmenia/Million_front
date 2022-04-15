import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon (props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M55.316 52.017L39.39 36.091a22.059 22.059 0 004.942-13.925C44.333 9.944 34.388 0 22.166 0 9.944 0 0 9.944 0 22.166s9.945 22.167 22.166 22.167a22.059 22.059 0 0013.926-4.942l15.925 15.925a2.327 2.327 0 001.65.683 2.33 2.33 0 001.65-3.983zm-33.15-12.35c-9.65 0-17.5-7.85-17.5-17.5 0-9.651 7.85-17.5 17.5-17.5 9.651 0 17.5 7.849 17.5 17.5 0 9.65-7.849 17.5-17.5 17.5z"
                fill={props.color}
            />
        </Svg>
    )
}

export default SearchIcon
