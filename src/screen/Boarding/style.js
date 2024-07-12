import { StyleSheet ,Dimensions} from 'react-native';
import { colors, fonts } from '../../constant';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingHorizontal: scale(20),
        flex: 0.1,
    },
    skipButton: {
        padding: 5,
        borderRadius: 5,
        marginTop:scale(10),
    },
    skipButtonText: {
        fontSize: scale(14),
        color: colors.secondary100,
        textDecorationLine: "underline",
    },
    content: {
        flex: 0.8,
        paddingHorizontal: 20,
        paddingTop: scale(40),
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: scale(40),
        justifyContent: "center",
    },
    truckImage: {
        width: Dimensions.get("screen").width - scale(58),
        height: scale(300),
        resizeMode: "contain",
    },
    title: {
        fontSize: scale(24),
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: fonts.Regular,
        textAlign: "center",
        color: colors.secondary,
        
    },
    description: {
        textAlign: "center",
        fontSize: scale(14),
        marginBottom: 20,
        fontFamily: fonts.Regular,
        fontWeight: "400",
        color: colors.lightGray,
      
    },
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 25,
        width: "80%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
    btnStyle: {
        flex: 0.2,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    iconStyle: {
        marginTop: scale(3), 
        marginLeft: scale(5)
    },
    btn:{
         width: '90%'
    },
});
