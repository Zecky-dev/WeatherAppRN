import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

export default function({source}) {
    console.log(source)
    return( 
        <AnimatedLottieView
        source={require("./rainy.json")}
        autoPlay
        loop
        />
    )
}