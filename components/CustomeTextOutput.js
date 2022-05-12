import { View, Text } from 'react-native'
import React from 'react'

const CustomeTextOutput = ({ text = 'CustomText', size, family='light', color }) => {
    return (
        <Text style={{ fontSize: size, fontFamily: `kanit_${family}`, color: color }}>{text}</Text>
    )
}

export default CustomeTextOutput