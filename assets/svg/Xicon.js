import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconX(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M31.5 31.5L1 1M1 31.5L31.5 1"
                strokeWidth={2}
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default IconX
