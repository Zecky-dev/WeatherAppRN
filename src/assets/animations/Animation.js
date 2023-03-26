import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

export default function({source}) {
    return( 
        <AnimatedLottieView
        source={source}
        autoPlay
        loop
        />
    )
}