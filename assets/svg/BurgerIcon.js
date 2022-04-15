import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BurgerIcon(props) {
    return (
        <Svg
            width={52}
            height={20}
            viewBox="0 0 58 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fill={props.color}
                d="M0 0h58v7.586H0zM0 36.414h58V44H0zM0 18.207h58v7.586H0z"
            />
        </Svg>
    )
}

export default BurgerIcon
