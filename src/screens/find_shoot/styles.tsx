import {StyleSheet} from 'react-native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../utils/ResponsiveScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
  somecontainer: {
    height: hp(20),
    width: wp(48),
  },
  cloudContainer: {
    height: hp(10),
    width: '100%',
    position: 'absolute',
    marginTop: wp(3),
    zIndex: 1,
  },
  txt: {
    fontSize: wp(8),
    color: 'black',
    fontWeight: 'bold',
  },
  cloud: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    zIndex: 1,
    height: hp(55),
    width: wp(100),
    alignSelf: 'center',
    borderWidth: 1,
  },
  boy: {
    height: hp(30),
    position: 'absolute',
    bottom: hp(5),
    left: wp(5),
  },
  home: {
    position: 'absolute',
    right: wp(-2),
    bottom: hp(16.2),
    height: hp(15),
    width: wp(40),
  },
});
