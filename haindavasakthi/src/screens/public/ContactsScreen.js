import React, { useState } from 'react'
import { View, Text, ScrollView, ImageBackground, TextInput, Image, TouchableOpacity, Button } from 'react-native'
import Header from '../../components/UIComponents/Header'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Mdicon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { BoldText, RegularText } from '../../components/UIComponents/Text';

const ContactsScreen = (props) => {
    const { navigation } = props
        const [name, setName] = useState('')
        const [phone, setPhone] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')
    
        const submitHandler = () => {
            alert("Successfully submitted!!")
            console.log(email, password)
        }
    return (
        <View>
            <Header navigation={navigation} />
            <ScrollView>
                <ImageBackground source={require('../../assets/About/slider2.jpg')} style={[styles.aboutitemWrapper, styles.vhCenter]}>
                    <View style={styles.overlay} />
                    <Text style={[styles.bold, styles.contactitemHeader]}>CONTACT US</Text>
                </ImageBackground>
                <BoldText style={styles.contacItemHeader}>CONTACT US</BoldText>
                <View style={[styles.flex1, styles.vhCenter]}>

                        <BoldText style={[styles.bold, styles.abouttextHeader]}>Contact Information</BoldText>
                        <View style={[styles.row, styles.mtMd]}>
                                <Ionicon name="md-call-sharp" size={20} color={COLORS.red} style={{ position: 'absolute', top: 0, left: 0 }} />
                                <RegularText style={styles.plLg}>9246730838,{'\n'}9494023056</RegularText>
                            
                                <Mdicon name="email" size={20} color={COLORS.red} style={{ position: 'relative', top: 0, left: 25 }} />
                                <RegularText style={styles.plLg}>hslegalcell@gmail.com,{'\n'}haindavasakthi@gmail.com</RegularText>
                        </View> 
                        <View style={[styles.row, styles.mtMd]}>
                            <Mdicon name="map-marker" size={20} color={COLORS.red} style={{ position: 'absolute', top: 0, left: 0 }} />
                            <RegularText style={styles.plLg}>D.No. 9-11-76, Kakumanu vari Street, Near Maha Lakshmi Temple, Guntur, Guntur District. {'\n'}{'\n'}</RegularText>
                        </View>
                        <BoldText style={[styles.bold, styles.abouttextHeader]}>Send Me a Message</BoldText>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setName(text)}
                            value={name}
                            placeholder="Enter Your Name"
                            placeholderTextColor={COLORS.light}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder="Enter Your Email"
                            placeholderTextColor={COLORS.light}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setPhone(text)}
                            value={phone}
                            placeholder="Enter Your Phone"
                            placeholderTextColor={COLORS.light}
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setMessage(text)}
                            value={message}
                            placeholder="Enter Your Message"
                            maxLength={40}
                            placeholderTextColor={COLORS.light}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={[styles.btn, styles.shadow, styles.btnLogin, styles.btnPrimary]}
                            activeOpacity={0.7}
                            onPress={() => submitHandler()}
                        >
                            <BoldText style={styles.btnPrimaryText}>Sign up</BoldText>
                        </TouchableOpacity>
                        <View>
                            <View style={[styles.mtMd, styles.row, styles.aboutselfCenter]}>
                                <TouchableOpacity style={styles.aboutfooterSocialLink}>
                                    <Feather name="phone-call" size={30} color={COLORS.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.aboutfooterSocialLink}>
                                    <FontAwesome name="facebook" size={30} color={COLORS.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.aboutfooterSocialLink}>
                                    <FontAwesome name="telegram" size={30} color={COLORS.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.aboutfooterSocialLink}>
                                    <FontAwesome name="youtube-play" size={30} color={COLORS.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.aboutfooterSocialLink}>
                                    <FontAwesome name="whatsapp" size={30} color={COLORS.primary} />
                                </TouchableOpacity>
                            </View>

                            {/* footer sec 5 */}
                            <View style={[styles.mtMd, styles.row, styles.aboutselfCenter]}>
                                <RegularText>© Haindava Sakthi 2021 Allright Reserved{'\n'}{'\n'}{'\n'}{'\n'}</RegularText>
                            </View>
                        </View>
                </View>       
            </ScrollView>
        </View>
    )
}

export default ContactsScreen
