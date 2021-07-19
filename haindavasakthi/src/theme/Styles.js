import { Dimensions, StyleSheet } from "react-native"
import { SPACES, SIZES, COLORS, WINDOW_WIDTH, WINDOW_HEIGHT } from "./Theme"

const styles = StyleSheet.create({
    container: {padding: SPACES},
    flex1: {flex: 1}, flex2: {flex: 2},
    vhCenter: {alignItems: 'center', justifyContent: 'center'},
    row: {flexDirection: 'row', flexWrap: 'wrap'}, spaceBetween: {justifyContent: 'space-between'},
    bgWhite: {backgroundColor: COLORS.white},
    fullScreen: {...StyleSheet.absoluteFillObject, width: WINDOW_WIDTH, height: WINDOW_HEIGHT},
    shadow: {
        shadowColor: COLORS.black, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1},
        shadowRadius: SIZES.sm, elevation: 3, backgroundColor: COLORS.white
    },
    overlay: {position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: COLORS.dark, opacity: 0.63},

    // Typogarphy
    bold: {fontWeight: 'bold'},
    whiteText: {color: COLORS.white},
    darkText: {color: COLORS.dark},
    lightText: {color: COLORS.light},
    smallText: {fontSize: SIZES.sm + 3},

    // Spaces
    mtLg: {marginTop: SIZES.lg},
    mlMd: {marginLeft: SIZES.md},

    // Header styles
    headerWrapper: {backgroundColor: COLORS.primary, height: 60, width: WINDOW_WIDTH, alignItems: 'center', flexDirection: 'row'},

    // Home Screen styles
    itemWrapper: {width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 3.2, flexWrap: 'wrap'},
    itemHeader: {fontSize: SIZES.lg - 9, color: COLORS.white},
    itemDesc: {color: COLORS.white, marginHorizontal: 15, textAlign: 'center', marginVertical: 15},
    itemBtn: {backgroundColor: COLORS.white, paddingHorizontal: 25, paddingVertical: 7},
    itemBtnText: {color: COLORS.dark},
    bannerIndicators: { position: 'absolute', bottom: 20 },

    // Form styles
    input: {
        paddingHorizontal: 15, color: COLORS.dark, marginBottom: SIZES.md + 2,
        borderWidth: 1, borderColor: '#ddd', width: WINDOW_WIDTH - 80, height: 50,
        borderRadius: SIZES.sm, shadowColor: COLORS.black, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1},
        shadowRadius: SIZES.sm, elevation: 3, backgroundColor: COLORS.white, fontFamily: 'NunitoSans-Regular'
    },

    // Buttons styles
    btn: {borderColor: COLORS.light, borderWidth: 1, borderRadius: SIZES.sm, paddingVertical: SIZES.md},
    btnBlock: {width: WINDOW_WIDTH - 80},
    btnPrimary: {borderWidth: 0, backgroundColor: COLORS.primary},
    btnLogin: {width: WINDOW_WIDTH - 80, justifyContent: 'center', alignItems: 'center'},
    btnPrimaryText: {color: COLORS.white, fontWeight: 'bold'},
    link: {},
    linkText: {color: COLORS.red, fontWeight: 'bold'},

    // Login styles
    loginWrapper: {paddingHorizontal: 40},
    loginLogo: {width: 250, resizeMode: 'contain', marginBottom: SIZES.lg},
    loginHeading: {fontSize: SIZES.md + 3, alignSelf: 'flex-start',marginBottom: SIZES.md + 5, color: COLORS.dark},
    fpWrap: {alignSelf: 'flex-end', marginBottom: SIZES.md},
    ////////////

    itemWrapper: {width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 3.2, flexWrap: 'wrap'},
    aboutItemWrapper: {width: WINDOW_WIDTH, flexWrap: 'wrap'},
    itemHeader: {fontSize: SIZES.lg - 9, color: COLORS.white},
    itemDesc: {color: COLORS.white, marginHorizontal: 15, textAlign: 'center', marginVertical: 15},
    itemBtn: {backgroundColor: COLORS.white, paddingHorizontal: 25, paddingVertical: 7},
    itemBtnText: {color: COLORS.dark},
    bannerIndicators: { position: 'absolute', bottom: 20 },
    homeIcon: {width: WINDOW_WIDTH / 5, resizeMode: 'contain'},
    homeHeading: {fontSize: SIZES.lg - 3, fontWeight: 'bold', alignSelf: 'center'},
    homeHeadingTop: {fontSize: SIZES.lg - 10, color: COLORS.primary},
    homeSubHeading: {fontSize: SIZES.lg - 12, alignSelf: 'center'},
    homeAboutWrapper: {backgroundColor: COLORS.white, paddingTop: 20, paddingBottom: 45},
    homeAboutIndicators: { position: 'absolute', bottom: -10 },
    homeCounterItem: {width: WINDOW_WIDTH / 4, alignItems: 'center'},
    homeCountersCount: {fontSize: SIZES.lg - 3},
    homeCountersInner: {paddingBottom: SIZES.xl + 10},
    homeVideoWrapper: {backgroundColor: COLORS.white, height: WINDOW_HEIGHT / 5, alignItems: 'center'},
    videoWrapperImage: {height: WINDOW_HEIGHT / 4.5, width: WINDOW_WIDTH / 1.25, resizeMode: 'contain', position: 'absolute', top: -70},
    serviceCard: {padding: 15, width: WINDOW_WIDTH - 40, marginLeft: 20},
    homeBlogItemWrap: {width: WINDOW_WIDTH, borderRadius: 4, paddingHorizontal: 20, marginTop: 20},
    homeBlogImage: {width: WINDOW_WIDTH - 40, height: 200, borderTopLeftRadius: 3, borderTopRightRadius: 3, backgroundColor: '#333'},
    homeBlogItemContent: {padding: 15, top: -5, borderBottomLeftRadius: 6, borderBottomRightRadius: 6},
    homeBlogItemType: {backgroundColor: COLORS.ternery, paddingHorizontal: 15, paddingVertical: 7, fontSize: SIZES.md, alignSelf: 'flex-start', color: COLORS.white, top: -30},
    homeBlogItemContentInner: {top: -15},
    homeBlogItemTitle: {fontSize: SIZES.lg - 10},
    homeFeedbackItemWrap: {backgroundColor: COLORS.white, paddingHorizontal: 15, marginHorizontal: 20, width: WINDOW_WIDTH - 40, 
        borderColor: COLORS.ternery, borderWidth: 3, marginBottom: 0, paddingVertical: 0, backgroundColor: '#fff', alignSelf: 'flex-start'
    },

    // dashboardWrapper
    dashboardWrapper: {height: WINDOW_HEIGHT - 90, width: WINDOW_WIDTH},

    // Spaces
    mtSm: {marginTop: SIZES.sm}, mtMd: {marginTop: SIZES.md}, mtLg: {marginTop: SIZES.lg},
    mbSm: {marginBottom: SIZES.sm}, mbMd: {marginBottom: SIZES.md}, mbLg: {marginBottom: SIZES.lg},
    mlMd: {marginLeft: SIZES.md},
    ph20: {paddingHorizontal: 20},
    plMd: {paddingLeft: SIZES.md}, plLg: {paddingLeft: SIZES.lg},
    
    // Map styles    
    map: { ...StyleSheet.absoluteFillObject },
    ////////////////////////////////////////////////////////////////////////////////////////
     // VideoScreenHeader styles
     VideoHeaderWrapper: {backgroundColor: COLORS.white, height: 50, width: WINDOW_WIDTH, alignItems: 'center', flexDirection: 'row'},
     videoitemBtn: {backgroundColor: COLORS.primary, paddingHorizontal: 15, paddingVertical: 7},
     headerlistbtn: {borderColor: COLORS.light, borderWidth: 1, margin: 7, borderRadius: SIZES.lg, paddingVertical: SIZES.md,},
     videoitemBtnText: {color: COLORS.white, justifyContent: 'center', alignItems: 'center'},
     homeAboutIndicators: { position: 'absolute', bottom: -10,},
     subHeading: {fontSize: SIZES.lg - 10, fontWeight: 'bold', alignSelf: 'flex-start', position: 'relative',  top: 25, left: 10},
     ///////////////////////////
     // About styles
        aboutitemWrapper: {width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 3.2, flexWrap: 'wrap'},
        aboutitemHeader: {fontSize: SIZES.lg - 9, color: COLORS.white, marginHorizontal: 125,},
        abouttextHeader: { marginHorizontal: 20, fontSize: SIZES.lg - 5, color: COLORS.violet, margin: 20 },
        aboutselfCenter: {alignSelf: 'center'},
        aboutfooterSocialLink: {marginRight: 20, padding: 5},
        aboutItemWrap: {width: WINDOW_WIDTH, borderRadius: 4, paddingHorizontal: 20, marginTop: 20},
        aboutImage: {width: WINDOW_WIDTH - 40, height: 200, borderTopLeftRadius: 3, borderTopRightRadius: 3, backgroundColor: '#333'},
        aboutItemContent: {padding: 15, top: -5, borderBottomLeftRadius: 6, borderBottomRightRadius: 6},
        aboutItemType: {backgroundColor: COLORS.ternery, paddingHorizontal: 15, paddingVertical: 7, fontSize: SIZES.md, alignSelf: 'flex-start', color: COLORS.white, top: -30},
        aboutItemContentInner: {top: -15},
        aboutItemHeader:{backgroundColor: COLORS.ternery, paddingHorizontal: 15, paddingVertical: 7, fontSize: SIZES.md, alignSelf: 'flex-start', color: COLORS.white, top: -20},
        abouttext: { fontSize: SIZES.md - 0, color: COLORS.light, padding: 10, position: 'relative', marginHorizontal: 10},
        /////////////////
        //Contact styles
        contactitemHeader: {fontSize: SIZES.lg - 9, color: COLORS.white, marginHorizontal: 110},
        contacItemHeader:{backgroundColor: COLORS.ternery, paddingHorizontal: 15, paddingVertical: 7, fontSize: SIZES.md, alignSelf: 'flex-start', color: COLORS.white, top: -20},
        /////Donate styles
        donatetitemHeader: {fontSize: SIZES.lg - 9, color: COLORS.white, marginHorizontal: 140},
        donateItemHeader:{backgroundColor: COLORS.ternery, paddingHorizontal: 15, paddingVertical: 7, fontSize: SIZES.md, alignSelf: 'flex-start', color: COLORS.white, top: -20},
        /////////////////////
        centered: { marginTop: 50 },
        modalView: { width: WINDOW_WIDTH, height: WINDOW_HEIGHT /1.1, backgroundColor: COLORS.white, marginTop: SIZES.xl +90},
        arrow: {
            paddingHorizontal: 15,
            position: 'relative'
          },
          buttonOpen: {
            //backgroundColor: "#F194FF",
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center"
          },
          videotitel: {
            position: 'relative',
            marginHorizontal: 3,
          },
          videohastag:{
            fontWeight: 'bold',
            fontSize: 13,
            top: 10
          },
          videodec:{
            fontSize: 15,
            top: 10
          },
          extra:{
            fontSize: 100,
            color: COLORS.bgWhite
          },
          videoitemtitel:{
            left: 20
          }
    })

export default styles