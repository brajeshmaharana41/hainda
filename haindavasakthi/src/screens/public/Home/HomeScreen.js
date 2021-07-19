import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { FlatListSlider } from 'react-native-flatlist-slider'
import Header from '../../../components/UIComponents/Header'
import styles from '../../../theme/Styles'
import { COLORS } from '../../../theme/Theme'
import CarouselItem from './CarouselItem'

const HomeScreen = props => {
    const { navigation } = props
    const DATA = [{
        image: require('../../../assets/images/slider1.jpg'),
        title: 'We Believe in The God Grace',
        button: 'sjhusa',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }, {
        image: require('../../../assets/images/slider2.jpg'),
        title: 'We Believe in The God Grace',
        button: 'sjhusah',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }, {
        image: require('../../../assets/images/slider3.jpg'),
        title: 'We Believe in The God Grace',
        button: 'sjhus',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }, {
        image: require('../../../assets/images/slider4.jpg'),
        title: 'We Believe in The God Grace',
        button: 'sjhu',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }]

    return (
        <View>
            <Header navigation={navigation} />
            <ScrollView>
                <FlatListSlider
                    data={DATA}
                    component={<CarouselItem />}
                    indicatorContainerStyle={styles.bannerIndicators}
                    indicatorActiveColor={COLORS.primary}
                    indicatorInActiveColor={COLORS.white}
                    indicatorActiveWidth={18}
                    animation
                />
                <Text>Home Screen</Text>
            </ScrollView>
        </View>
    )
}

export default HomeScreen
