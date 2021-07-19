import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import styles from '../../../theme/Styles'
import { COLORS, WINDOW_WIDTH } from '../../theme/Theme'
import { BoldText, LightText, RegularText } from '../../UIComponents/Text'

const VideoScreenHeader = props => {
    const { navigation } = props

    return (
        <View style={styles.VideoHeaderWrapper}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={[styles.headerlistbtn, styles.videoitemBtn]} onPress={()=>props.changeCategory("News")}>
                    <BoldText style={[styles.videoitemBtnText]}>News</BoldText>
                </TouchableOpacity >
                <TouchableOpacity style={[styles.headerlistbtn, styles.videoitemBtn]} onPress={()=>props.changeCategory("Movie")}>
                    <BoldText style={[styles.videoitemBtnText]}>Movie</BoldText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.headerlistbtn, styles.videoitemBtn]} onPress={()=>props.changeCategory("Sports")}>
                    <BoldText style={[styles.videoitemBtnText]}>Sports</BoldText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.headerlistbtn, styles.videoitemBtn]} onPress={()=>props.changeCategory("Geography")}>
                    <BoldText style={[styles.videoitemBtnText]}>Geography</BoldText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.headerlistbtn, styles.videoitemBtn]} onPress={()=>props.changeCategory("All")}>
                    <BoldText style={[styles.videoitemBtnText]}>All</BoldText>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default VideoScreenHeader
