import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DashIcon(props) {
    return (
        <Svg
            width={28}
            height={18}
            viewBox="0 0 57 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill={props.color} d="M0 .207h58v7.586H0z" />
        </Svg>
    )
}

export default DashIcon
