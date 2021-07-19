import React, {useState, useRef}   from 'react'
import { View, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { BoldText, RegularText } from '../../../components/UIComponents/Text';
import styles from '../../../theme/Styles';
import { COLORS } from '../../../theme/Theme';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Card} from 'react-native-elements';


const Listofvideos = ({ item, SelectVideo }) => {
    return (
        <View>
            <Card>
              <TouchableOpacity onPress={()=>SelectVideo(item.video)}>
              <YoutubePlayer
                    height={80}
                    width={150}
                    videoId={item.video}
                />
              </TouchableOpacity>    
            </Card>
        </View>
    )
}

export default Listofvideos