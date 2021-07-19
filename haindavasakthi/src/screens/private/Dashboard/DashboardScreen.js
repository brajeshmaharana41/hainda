import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Header from '../../../components/UIComponents/Header'
import styles from '../../../theme/Styles'
import Map from './Map'


const DashboardScreen = props => {
    const { navigation } = props

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.dashboardWrapper}>
                <Map />
            </View>
        </>
    )
}

export default DashboardScreen
