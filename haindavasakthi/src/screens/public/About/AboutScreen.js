import React from 'react'
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Header from '../../../components/UIComponents/Header'
import styles from '../../../theme/Styles'
import { BoldText, RegularText } from '../../../components/UIComponents/Text';
import { COLORS } from '../../../theme/Theme'
import Ionicon from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import {Card} from 'react-native-elements';

const AboutScreen = props => {
    const { navigation } = props
    return (
        <View>
            <Header navigation={navigation} />
                <ScrollView>
                        <ImageBackground source={require('../../../assets/About/slider2.jpg')} style={[styles.aboutitemWrapper, styles.vhCenter]}>
                            {/* <View style={styles.overlay} /> */}
                            <Text style={[styles.bold, styles.aboutitemHeader]}>About US</Text>
                        </ImageBackground>
                        <BoldText style={styles.aboutItemHeader}>Our Core Vision and Mission</BoldText>
                        {/* <BoldText style={[styles.bold, styles.abouttextHeader]}></BoldText> */}
                        <View style={styles.aboutItemWrap}>
                            <Image source={require('../../../assets/About/bell1.jpg')} style={[styles.aboutImage]} />
                            <View style={[styles.shadow, styles.aboutItemContent]}>
                                <RegularText style={styles.aboutItemType}>Vision</RegularText>
                                <View style={[styles.aboutItemContentInner]}>
                                    <View style={[styles.row, styles.spaceBetween, styles.mtMd]}>
                                        <RegularText style={[styles.mtMd]}>1.హిందూ ఆలయాల పరిధిలో అన్యమత ప్రచారం చేసిన వారిని, వాల్ పోస్టర్లు,కటౌట్లు వేసిన వారికి బుద్ది చెప్పటం.</RegularText>
                                        <RegularText style={[styles.mtMd]}>2.మతం మారి కూడా దొంగతనంగా హిందూ reservations అనుభవిస్తున్న వారి మీద చట్టరీత్యా చర్యలు తీసుకునేలా చేయటం.</RegularText>
                                        <RegularText style={[styles.mtMd]}>3.విదేశాల నుండి వివిధ రకాల వీసాలపై వచ్చి, ఈ దేశంలో మతప్రచారం నిర్వహించే విదేశీయులని వెనక్కి పంపటం.</RegularText>
                                        <RegularText style={[styles.mtMd]}>4.ప్రభుత్వ స్థలాలను ఆక్రమించి కట్టే అక్రమ చర్చిలపై ప్రభుత్వ అధికారులకు పిర్యాదు చేసి చర్యలు తీసుకునేలా చేయటం.</RegularText>
                                        <RegularText style={[styles.mtMd]}>5.ప్రభుత్వ పాఠశాలలలో నిర్వహించే క్రైస్తవ కార్యక్రమాలను ఆపటం.</RegularText>
                                        <RegularText style={[styles.mtMd]}>6.మతం మారిన వారిని స్వధర్మానికి తీసుకురావడం.</RegularText>
                                        <RegularText style={[styles.mtMd]}>7.సెక్యూలర్ భావజాలంతో ఉన్న హిందువులకు ఈ దేశంపై, ధర్మంపై జరిగే దాడులను తెలియజేసి వారిని పూర్తి హిందువులుగా మార్చటం. ఇందుకోసం 10 మందితో మీరు ఎక్కడ సమావేశం నిర్వహించినా మా సంస్థ ప్రతినిధి అక్కడకు వస్తారు.</RegularText>
                                        <RegularText style={[styles.mtMd]}>8.హిందూత్వం పై శిక్షణా తరగతులు నిర్వహించటం.</RegularText>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.aboutItemWrap}>
                            <Image source={require('../../../assets/About/bell2.jpg')} style={[styles.aboutImage]} />
                            <View style={[styles.shadow, styles.aboutItemContent]}>
                                <RegularText style={styles.aboutItemType}>MISSION</RegularText>
                                <View style={[styles.aboutItemContentInner]}>
                                    <View style={[styles.row, styles.spaceBetween, styles.mtMd]}>
                                    <RegularText style={[styles.mtMd]}>1.బోధించు సమీకరించు పోరాడు.</RegularText>
                                    <RegularText style={[styles.mtMd]}>2.కాలానుగుణంగా ముందు సెక్యులర్లను సోషల్ మీడియా ద్వారాసమీకరణచేసి ఆ తర్వాత హిందుధర్మంపై జరిగే దాడులను భోధనచేసి సందర్భానుసారంగా పోరాటం చేయటమే హైందవశక్తి సిద్దాంతం.</RegularText>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.aboutItemWrap}>
                            <Image source={require('../../../assets/About/founder.jpg')} style={[styles.aboutImage]} />
                            <View style={[styles.shadow, styles.aboutItemContent]}>
                                <RegularText style={styles.aboutItemType}>The Sedimbi Prasad</RegularText>
                                <View style={[styles.aboutItemContentInner]}>
                                    <View style={[styles.row, styles.spaceBetween, styles.mtMd]}>
                                    <RegularText style={[styles.mtMd]}>1.Sedimbi Venkata Hanumath Prasad (S.V.H Prasad). Born in 1980, Prasad Lives in Guntur, with his Father Vijaya Kumar and mother Suguna and His wife Pavani. They have one Daughter, Manaswini and one son, Yogi, who are currently pursuing their studies. Prasad is an Motivational Speaker and passionate in Leadership.</RegularText>
                                    <RegularText style={[styles.mtMd]}>2.Sedimbi Venkata Hanumath Prasad is founder of Haindavasakthi, which motivates more than one lakh Hindhu’s in Whatsapp Group’s and Nearly one Lakh hindhu’s in Telegram and this Firm Haindavasakthi Stopped more than 100 illegal constructions.</RegularText>
                                    <RegularText style={[styles.mtMd]}>3.He Established Hiandavasakthi in October 8th 2019 and 8 members are working with him in the office and more than 1000 People are working as voluntary for the Trust.</RegularText>
                                    </View>
                                </View>
                            </View>
                        </View>
                    <View style={[styles.mtMd, styles.row, styles.aboutselfCenter]}>
                        <TouchableOpacity style={styles.aboutfooterSocialLink}>
                            <Feather name="phone-call" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutfooterSocialLink}>
                            <Ionicon name="facebook" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutfooterSocialLink}>
                            <Ionicon name="telegram" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutfooterSocialLink}>
                            <Ionicon name="youtube-play" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutfooterSocialLink}>
                            <Ionicon name="whatsapp" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>

                    {/* footer sec 5 */}
                    <View style={[styles.mtMd, styles.row, styles.aboutselfCenter]}>
                        <RegularText>© Haindava Sakthi 2021 Allright Reserved{'\n'}{'\n'}{'\n'}{'\n'}</RegularText>
                    </View>
        
                </ScrollView>
        </View>
    );
}

export default AboutScreen

