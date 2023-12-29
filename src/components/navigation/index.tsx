import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
import Splash from '../../screens/splash';
import Grade from '../../screens/Grade';
export type StackNavigationParams = {
  splash: undefined;
  home: undefined;
  grade: undefined;
};
const Navigation = () => {
  const Stack = createStackNavigator<StackNavigationParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="grade" component={Grade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
