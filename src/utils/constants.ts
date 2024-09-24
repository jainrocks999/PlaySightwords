import {Platform} from 'react-native';

const productSkus = Platform.select({
  android: ['sightwords_indadsproduct'],
  ios: ['com.eflashapps.esightwordsfree.bingoup'],
});
export default {
  productSkus: productSkus,
};
