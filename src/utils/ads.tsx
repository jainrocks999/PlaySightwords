import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import { Platform } from 'react-native';



export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: 'ca-app-pub-3339897183017333/9093285589',
  Interstitial: 'ca-app-pub-3339897183017333/1570018788',
    },
    ios: {
      BANNER: 'ca-app-pub-3339897183017333/1570018788',
      Interstitial: 'ca-app-pub-3339897183017333/1570018788',
    },
  }),
};

const requestOption = {
  requestNonPersonalizedAdsOnly: true,
};
const interstitial = InterstitialAd.createForAdRequest(
  Addsid.Interstitial,
  requestOption,
);
export default () => {
  console.log('calld');

  const unsubscribe = interstitial.addAdEventListener(
    AdEventType.LOADED,
    () => {
      interstitial.show();
    },
  );
  interstitial.load();
  return unsubscribe;
};

// Sight Words First with Word Bingo
// com.playsightwordslatest
