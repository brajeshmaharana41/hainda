import React from 'react'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import Header from '../../components/UIComponents/Header'
import { BoldText, RegularText } from '../../components/UIComponents/Text';
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'
import ServicesCard from '../../components/UIComponents/ServicesCard'

const DonationsScreen = props => {
    const { navigation } = props

    const servicesData = [
        { 
          title: 'Shelter',
          image: require('../../assets/images/Shelter.jpg'),
          subtitle: 'Homes For Children',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.', 
          online:'150+ Online Payment',
          offline:'8+ Offline Payment',
          desc1:'Lorem ipsum dolor sit',
          desc2:'Ut enim ad minim veni',
          perday:'₹ 500/Day'
        },
        { 
          title: 'Food',
          image: require('../../assets/images/Food.jpg'),
          subtitle: 'Feed The Hungry',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.', 
          online:'150+ Online Payment',
          offline:'8+ Offline Payment',
          desc1:'Lorem ipsum dolor sit',
          desc2:'Ut enim ad minim veni',
          perday:'₹ 400/Day'
        },
        { 
          title: 'Cloths',
          image: require('../../assets/images/Cloths.jpg'),
          subtitle: 'Donate Cloths and Accessories',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.' ,
          online:'150+ Online Payment',
          offline:'8+ Offline Payment',
          desc1:'Lorem ipsum dolor sit',
          desc2:'Ut enim ad minim veni',
          perday:'₹ 368/Day'
        },
        { 
          title: 'Refugees',
          image: require('../../assets/images/Refugees.jpg'),
          subtitle: 'Help in Natural Disaster',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.',
          online:'150+ Online Payment',
          offline:'8+ Offline Payment',
          desc1:'Lorem ipsum dolor sit',
          desc2:'Ut enim ad minim veni',
          perday:'₹ 550/Day' 
        },
        { 
          title: 'Education',
          image: require('../../assets/images/Education.jpg'),
          subtitle: 'Help in Educate Children',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.',
          online:'150+ Online Payment',
          offline:'8+ Offline Payment',
          desc1:'Lorem ipsum dolor sit',
          desc2:'Ut enim ad minim veni',
          perday:'₹ 630/Day' 
        },
        { 
          title: 'Temple',
          image: require('../../assets/images/Temple.jpg'),
          subtitle: 'Help in Expand and Repair',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.',
          online:'150+ Online Payment',
          offline:'8+ Offline Payment',
          desc1:'Lorem ipsum dolor sit',
          desc2:'Ut enim ad minim veni',
          perday:'₹ 430/Day' 
        },
    ]

    return (
        <View>
            <Header navigation={navigation} />
            <ScrollView>
                <ImageBackground source={require('../../assets/About/slider2.jpg')} style={[styles.aboutitemWrapper, styles.vhCenter]}>
                    <View style={styles.overlay} />
                    <Text style={[styles.bold, styles.donatetitemHeader]}>Donate</Text>
                </ImageBackground>
                <BoldText style={styles.donateItemHeader}>Donate for Help Others</BoldText>
                <View>
                    <View>
                        {/* {servicesData.map((service, i) => {
                            return <ServicesCard key={i} title={service.title} image={service.image} subtitle={service.subtitle} desc={service.desc} online={service.online} offline={service.offline} desc1={service.desc1} desc2={service.desc2} perday={service.perday} />
                        })} */}
                    </View>
                </View>
            </ScrollView>    
            <Text>Donation's Screen</Text>
        </View>
    )
}

export default DonationsScreen
