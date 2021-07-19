import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, ViewPagerAndroidBase } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import SplashScreen from '../screens/public/SplashScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import PermissionsScreen from '../screens/auth/PermissionsScreen'
import PermissonsPOC from '../screens/poc/PermissonsPOC'
import HomeScreen from '../screens/public/Home/HomeScreen'
import AboutScreen from '../screens/public/About/AboutScreen'
import VideosScreen from '../screens/public/Video/VideosScreen'
import DepartmentsScreen from '../screens/public/DepartmentsScreen'
import DonationsScreen from '../screens/public/DonationsScreen'
import NewsScreen from '../screens/public/NewsScreen'
import ContactsScreen from '../screens/public/ContactsScreen'
import ShopScreen from '../screens/public/ShopScreen'
import DashboardScreen from '../screens/private/Dashboard/DashboardScreen'
import { COLORS } from '../theme/Theme'

// stacks
const SplashStack = createStackNavigator()
const HomeStack = createStackNavigator()
const AuthStack = createStackNavigator()
const MainStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const SplashStackNavigator = ({ navigation }) => (
    <SplashStack.Navigator screenOptions={{ headerShown: false }}>
        <SplashStack.Screen name="Splash" component={SplashScreen} />
    </SplashStack.Navigator>
)

const AuthStackNavigator = ({ navigation }) => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <AuthStack.Screen name="PermissonsPOC" component={PermissonsPOC} />
        {/* <AuthStack.Screen name="Permissions" component={PermissionsScreen} /> */}
        <AuthStack.Screen name="Home" component={HomeScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <AuthStack.Screen name="Dashboard" component={DashboardScreen} />
    </AuthStack.Navigator>
)

const HomeStackNavigator = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerTitle: props => (
                <Image
                    style={{ left: -30, height: 50 }}
                    source={require('../assets/logo.png')}
                    resizeMode='contain'
                />
            ),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Ionicon name="menu" size={25} color={COLORS.white} />
                </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
                paddingLeft: 15
            }
        }}
        initialRouteName="Home"
    >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="About" component={AboutScreen} />
        <HomeStack.Screen name="Videos" component={VideosScreen} />
        <HomeStack.Screen name="Departments" component={DepartmentsScreen} />
        <HomeStack.Screen name="Donations" component={DonationsScreen} />
        <HomeStack.Screen name="News" component={NewsScreen} />
        <HomeStack.Screen name="Contacts" component={ContactsScreen} />
        <HomeStack.Screen name="Shop" component={ShopScreen} />
        <HomeStack.Screen name="Login" component={LoginScreen} />
    </HomeStack.Navigator>
)

const DrawerNavigator = ({ navigation }) => (
    <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
            activeTintColor: COLORS.white,
            activeBackgroundColor: COLORS.primary,
            inactiveTintColor: COLORS.dark,
            inactiveBackgroundColor: COLORS.white
        }}
    >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Videos" component={VideosScreen} />
        <Drawer.Screen name="Departments" component={DepartmentsScreen} />
        <Drawer.Screen name="Donations" component={DonationsScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
        <Drawer.Screen name="Contacts" component={ContactsScreen} />
        <Drawer.Screen name="Shop" component={ShopScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
)

function CustomDrawerContent(props) {
    const { navigation } = props
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
                <DrawerItemList {...props} />
                {/* <Text style={{color: theme.colors.text}}>User</Text> */}
            </View>
            {/* <Button backgroundColor={theme.colors.background} style={{ backgroundColor: theme.colors.background }}
                title="Toggle App Theme" onPress={() => toggleTheme()}
            // onPress={() => { navigation.navigate('Products') }}
            /> */}
            {/* <TouchableOpacity onPress={() => toggleTheme(navigation)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Text style={{ color: theme.colors.text }}>{isDarkTheme ? 'Light' : 'Dark'} Theme</Text>
                    <View pointerEvents="none">
                        <Switch
                            trackColor={{ false: "#767577", true: "#721602" }}
                            thumbColor={isDarkTheme ? theme.colors.primary : "#f4f3f4"}
                            ios_backgroundColor={isDarkTheme ? theme.colors.primary : "#3e3e3e"}
                            value={isDarkTheme}
                        />
                    </View>
                </View>
            </TouchableOpacity> */}
        </DrawerContentScrollView>
    )
}

const Routes = () => {
    const [loading, setLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <NavigationContainer>
            {loading ? <SplashStackNavigator /> : <DrawerNavigator />}
        </NavigationContainer>
    )
}

export default Routes