import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DashboardCars } from '../screens/DashboardCars';
import { CarDetails } from '../screens/CarDetails';
import { RootStackScreen } from './modal.routes';

type AuthRoutes = {
    DashboardCars: undefined;
    CarDetails: undefined;
  }

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>

const Stack = createStackNavigator<AuthRoutes>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Modal" component={RootStackScreen} /> */}
      <Stack.Screen name="DashboardCars" component={DashboardCars} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  );
}
