import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DashboardCars } from '../screens/Authenticated/DashboardCars';
import { CarDetails } from '../screens/Authenticated/CarDetails';
import { ProductDetails } from '../screens/Authenticated/ProductDetails';
import { SignIn } from '../screens/Unauthenticated/SignIn';

type AuthRoutes = {
    DashboardCars: undefined;
    CarDetails: undefined;
    ProductDetails: undefined;
  }

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>

const Stack = createStackNavigator<AuthRoutes>();

export function StackCars() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardCars" component={DashboardCars} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  );
}
