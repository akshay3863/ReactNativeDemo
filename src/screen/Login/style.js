import { StyleSheet } from 'react-native';
import { colors, screenHeight, fonts } from '../../constant';
import { scale ,verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.white },
    main: {
        height: scale(screenHeight * 0.83),
        justifyContent: 'center',
        alignItems: 'center',
    },
    submain: {
        marginTop: scale(40)
    },
    title: {
        color: colors.black, 
        fontSize: scale(26), 
        fontWeight: '600', 
        textAlign: 'center',
        fontFamily:fonts.SemiBold,
    },
    subtitle: {
        color:colors.black,
        fontSize:scale(14),
        textAlign:'center',
        lineHeight:scale(35),
        fontFamily:fonts.Regular,
    },
    logo: {
        height: scale(200),
        width: scale(250),
        resizeMode: 'contain',
        marginLeft: scale(40),
        marginTop: scale(30),

    },
    subSection: {
        width: '100%',
        paddingHorizontal: scale(20),
        marginTop: scale(10),    
    },
    forgetText: {
        fontFamily:fonts.Medium,
        fontSize: scale(14),
        fontWeight: '500',
        color: colors.black,
        marginTop: scale(10),
    },
    forgetTextContent: { 
        alignItems: 'flex-end', 
        marginTop: scale(5) 
    },
    btnStyle: {
        marginTop: scale(120),
    },
    inputStyle: {
        marginBottom: verticalScale(20)
    },
  
});
