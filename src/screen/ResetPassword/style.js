import {StyleSheet} from 'react-native';
import {colors, screenHeight, fonts} from '../../constant';
import {scale,verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:colors.white},
  main: {
    height: scale(screenHeight * 0.83),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: scale(150),
    width: scale(200),
    resizeMode: 'contain',
     marginLeft:scale(20),
     marginBottom:scale(50)
  },
  mainTitle: {
    color:colors.black,
    fontSize:26,
    fontWeight:'600',
    textAlign:'center',
    lineHeight:scale(40),
    fontFamily:fonts.Bold
  },
  sub: {
    width: '100%',
    paddingHorizontal: scale(20),
    marginTop: scale(10),  
  },
  inputStyle: {
    marginBottom: verticalScale(20)
  },
  btn: {
    marginTop: scale(50),
  }
 
});
