import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';
export const Addsid = {
  BANNER: TestIds.BANNER, //'ca-app-pub-3339897183017333/9093285589',
  Interstitial: TestIds.INTERSTITIAL, //'ca-app-pub-3339897183017333/6778947585', // 'ca-app-pub-3339897183017333/1570018788',
};

const requestOption = {
  requestNonPersonalizedAdsOnly: true,
  // keywords: ['fashion', 'clothing'],
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
// com.playsightwordsNew
