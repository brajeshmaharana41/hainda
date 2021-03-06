import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../theme/Styles'
import { BoldText, RegularText } from './Text'

const ServicesCard = props => {
    const {title, desc} = props

    return (
        <View style={[styles.shadow, styles.serviceCard, styles.mbMd]}>
            <BoldText style={[styles.homeSubHeading, styles.mbSm]}>{title}</BoldText>
            <Image source={image} style={[styles.homeBlogImage]} />
            <RegularText style={styles.textCenter}>{desc}</RegularText>
        </View>
    )
}

export default ServicesCard
