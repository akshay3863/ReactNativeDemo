import { StyleSheet} from 'react-native';
import { colors,fonts } from '../constant';
import { scale } from 'react-native-size-matters';

export const cstyles = StyleSheet.create({
   btnStyle: {
    backgroundColor: colors.primary,
    paddingHorizontal: scale(15),
    paddingVertical: scale(13),
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
   },
   btnTextStyle: {
    fontFamily:fonts.SemiBold,
    fontSize: scale(18),
    color: '#fff'
   },
   labelStyle: {
    fontFamily:fonts.Medium,
    fontSize: scale(15),
    fontWeight: '500',
    color: colors.gray,
   },
   mainInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth:0.7,
    borderColor: colors.gray,
    paddingHorizontal: scale(14),
    paddingVertical: scale(7),
    borderRadius: scale(10),
    marginTop: scale(5),
    backgroundColor: colors.white,
   },
   inputStyle: {
    fontFamily:fonts.Medium,
    fontSize: scale(14),
    fontWeight: '500',
    color: colors.black,
    padding: 0,
   },
   mainSection : {
    marginBottom: scale(15),
   }
  
});
