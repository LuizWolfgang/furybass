import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Myads } from '../screens/Authenticated/MyAds';
import { EditAd } from '../screens/Authenticated/MyAds/EditAd';
import { CreateAd } from '../screens/Authenticated/CreateAd';

type AuthRoutes = {
    myAds: undefined;
    editAd: undefined;
    createAd: undefined;
  }

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>

const Stack = createStackNavigator<AuthRoutes>();

export function StackMyAds() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="myAds" component={Myads} />
      <Stack.Screen name="editAd" component={EditAd} />
      <Stack.Screen name="createAd" component={CreateAd} />
    </Stack.Navigator>
  );
}
