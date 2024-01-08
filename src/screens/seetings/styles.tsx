import {StyleSheet} from 'react-native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../utils/ResponsiveScreen';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  prePrimary: {
    marginTop: hp(18),
    height: hp(6.5),
    width: wp(60),
    alignSelf: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  randomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: hp(7),
    width: wp(60),
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: wp(1),
  },
  random: {
    fontSize: wp(6),
    color: 'black',
    fontWeight: '100',
  },
  bckImage: {
    height: hp(6.7),
    width: wp(22),

    overflow: 'hidden',
  },
  saveBtn: {
    height: hp(7.5),
    width: wp(30),
    alignSelf: 'center',
    marginTop: wp(15),
  },
});
