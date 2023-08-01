import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { SignIn } from '../screens/Unauthenticated/SignIn';
import { SignUp } from '../screens/Unauthenticated/SignUp';

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined
}

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>
const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen
        name="signIn"
        component={SignIn}
      />

      <Screen
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  )
}
