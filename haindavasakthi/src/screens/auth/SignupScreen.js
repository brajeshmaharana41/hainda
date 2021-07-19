import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Platform } from 'react-native'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Logo from '../../assets/logo.png'
import { BoldText } from '../../components/UIComponents/Text'
import styles from '../../theme/Styles'
import { COLORS, SIZES } from '../../theme/Theme'

const SignupScreen = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = () => {
        alert("Successfully submitted!!")
        console.log(email, password)
    }

    return (
        <View style={[styles.flex1, styles.bgWhite, styles.loginWrapper]}>
            <View style={{ position: 'absolute', top: 15, left: 30 }}>
                <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <Ionicon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={SIZES.lg - 5} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Image source={Logo} style={styles.loginLogo} />
                <BoldText style={[styles.bold, styles.loginHeading]}>Create your Account</BoldText>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={COLORS.light}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={COLORS.light}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                    placeholder="Confirm Password"
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
            </View>
        </View>
    )
}

export default SignupScreen
