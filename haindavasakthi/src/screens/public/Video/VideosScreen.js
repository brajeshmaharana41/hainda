import React, {useState, useRef}  from 'react'
import { View, Text, StyleSheet, ToastAndroid, Alert, ScrollView, SectionList, Pressable, FlatList, Modal} from 'react-native'
import Header from '../../../components/UIComponents/Header'
import VideoScreenHeader from '../../../components/UIComponents/VideoScreenHeader/VideoScreenHeader'
import YoutubePlayer from 'react-native-youtube-iframe';
import {Card} from 'react-native-elements';
import styles from '../../../theme/Styles'
import { BoldText, LightText, RegularText } from '../../../components/UIComponents/Text'
import { COLORS, WINDOW_WIDT, SIZES, WINDOW_WIDTH, WINDOW_HEIGHT } from '../../../theme/Theme'
import { FlatListSlider } from 'react-native-flatlist-slider'
import Listofvideos from './Listofvideos'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Value } from 'react-native-reanimated';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';


const vedioarr =[
  {
    video : '1Acf05WxmjM',
    name : 'First video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'secand video'
  },
  {
    video : '1Acf05WxmjM-k',
    name : 'thesrd video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'forth video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'fift video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'sixt video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'seventh video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'eight video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'ninth video'
  },
  {
    video : '1Acf05WxmjM',
    name : 'tenth video'
  },
 
];

const DATA = [
  {
    id: '1',
    title: 'ఈ సంఘటనలో ??',
    image: require('../../../assets/images/slider1.jpg'),
    data: ["Cheese Cake", "Ice Cream"],

  },
  {
    id: '2',
    title: 'గుడి పూజారికిచ్చిన.',
    data: ["Pizza", "Burger", "Risotto"],
    image: require('../../../assets/images/slider4.jpg'),

  },
  {
    id: '3',
    title: 'త్రియేక దేవుళ్ళు..',
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    image: require('../../../assets/images/slider3.jpg'),

  },
  {
    id: '4',
    title: 'అక్రమ చర్చ్',
    data: ["Water", "Coke", "Beer"],
    image: require('../../../assets/images/slider4.jpg'),

  },
  {
    id: '5',
    title: 'స్వామి వివేకానంద',
    data: ["Cheese Cake", "Ice Cream"],
    image: require('../../../assets/images/slider1.jpg'),

  },
  {
    id: '6',
    title: 'వక్రీకరించబడ్డ',
    data: ["Cheese Cake", "Ice Cream"],
    image: require('../../../assets/images/slider4.jpg'),

  },
];

const VideosScreen = props => {
    const { navigation } = props
    const [playing, setPlaying] = useState(false);
    const [isMute, setMute] = useState(false);
    const [category, SetCategory] = useState('All');
    const [videoplay, SetVideoplay] = useState(vedioarr[1].video)
    const [modalVisible, setModalVisible] = useState(false);

    console.log (category)

    const controlRef = useRef();

    const onStateChange = (state) => {
        if (state === 'ended') {
          setPlaying(false);
          Alert.alert('video has finished playing!');
        }
        if (state !== 'playing') {
          setPlaying(false);
        }
      };
      const renderItem = ({ item }) => (
        <View>
          <Card>
          <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Image source={item.image} style={{height: WINDOW_HEIGHT/ 9.5, width: WINDOW_WIDTH / 2.5}}/>
          </Pressable>
          </Card>
          <BoldText style={[styles.videoitemtitel]}>{item.title}</BoldText>    
        </View>
      );
      const renderItem_1 = ({ item }) => (
        <View>
          <Card>
          <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Image source={item.image} style={{height: WINDOW_HEIGHT/ 4.4, width: WINDOW_WIDTH - 62}}/>
          </Pressable>
            <BoldText>{item.title}</BoldText>    
          </Card>
        </View>
      );
    return (
      <View>
        <Header navigation={navigation} />
        <VideoScreenHeader changeCategory={(Value)=>SetCategory(Value)}/>
        <ScrollView> 
            {/* <Card>  
                <YoutubePlayer
                height={170}
                width={300}
                ref={controlRef}
                play={playing}
                mute={isMute}
                videoId={videoplay}
                onChangeState={onStateChange}
                />
            </Card>  */}
              {/* {category=='News'|| category=='All'?
              <View>
                <BoldText style={[styles.subHeading, styles.mbMd]}>News</BoldText>
              </View>
              :null} */}
                {/* {category=='Movie'||category=='All'?
                <View>
                <BoldText style={[styles.subHeading, styles.mbMd]}>Movie</BoldText>
                <FlatListSlider
                      data={vedioarr}
                      width={275}
                      timer={5000}
                      component={<Listofvideos SelectVideo={(Value)=>SetVideoplay(Value)} />}
                      indicatorContainerStyle={styles.homeAboutIndicators}
                    />     
                </View>
                :null} 
                {category=='Sports'||category=='All'?
                <View>
                <BoldText style={[styles.subHeading, styles.mbMd]}>Sports</BoldText>
                <FlatListSlider
                      data={vedioarr}
                      width={275}
                      timer={5000}
                      component={<Listofvideos SelectVideo={(Value)=>SetVideoplay(Value)}/>}
                      indicatorContainerStyle={styles.homeAboutIndicators}
                    />     
                </View>
                :null}
                {category=='Geography'||category=='All'?
                <View>
                <BoldText style={[styles.subHeading, styles.mbMd]}>Geography</BoldText>
                <FlatListSlider
                      data={vedioarr}
                      width={275}
                      timer={5000}
                      component={<Listofvideos SelectVideo={(Value)=>SetVideoplay(Value)}/>}
                      indicatorContainerStyle={styles.homeAboutIndicators}
                    />     
                </View>
                :null} */}
                
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
        <View style={[styles.flex1, styles.vhCenter]}>
          <View style={[styles.modalView]}>
          <Pressable
              style={[styles.arrow]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={SIZES.lg - 5} color={COLORS.primary} />
            </Pressable>
              <View style={[styles.videotitel]}>
                <YoutubePlayer
                  height={205}
                  width={355}
                  ref={controlRef}
                  play={playing}
                  mute={isMute}
                  videoId={videoplay}
                  onChangeState={onStateChange}
                />
              </View>
              <View>
                <RegularText style={[styles.videodec, styles.mlMd]}> పేదవాళ్లకు అన్నదానం చేసిన గుంటూరు జిల్లా హైందవశక్తి </RegularText>
                <RegularText style={[styles.videohastag, styles.mlMd]}> #Haindavasakthi </RegularText>
              </View>  
            <View>
                  <BoldText style={[styles.subHeading, styles.mbMd]}>News</BoldText>
                <FlatList
                      data={DATA}
                      renderItem={renderItem_1}
                      keyExtractor={item => item.id}
                    />
              </View>
          </View>
        </View>
      </Modal>
            <ScrollView>
              <View>                    
              {category=='News'|| category=='All'?
              <View>
                  <View style={[styles.row]}>
                      <BoldText style={[styles.subHeading, styles.mbMd]}>News</BoldText>
                      <TouchableOpacity style={styles.aboutfooterSocialLink}>
                        <AntDesign name="right" size={20} color={COLORS.dark} />
                      </TouchableOpacity>
                  </View>               
                 <FlatList
                      horizontal={true}
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />
              </View>
              :null} 
              {category=='Movie'||category=='All'?
                <View>
                <BoldText style={[styles.subHeading, styles.mbMd]}>Movie</BoldText>
                <FlatList
                      horizontal={true}
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />  
                </View>
                :null} 
                {category=='Sports'||category=='All'?
                <View>
                <BoldText style={[styles.subHeading, styles.mbMd]}>Sports</BoldText>
                <FlatList
                      horizontal={true}
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />
                </View>
                :null}
                {category=='Geography'||category=='All'?
                <View>
                <BoldText style={[styles.subHeading, styles.mbMd]}>Geography</BoldText>
                <FlatList
                      horizontal={true}
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />   
                </View>
                :null}    
              </View>
              <View>
                <BoldText style={[styles.extra]}>Hi</BoldText>
              </View>
          </ScrollView>    
      </View>
    );
  };
  export default VideosScreen
