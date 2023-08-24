import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DashboardServices } from '../screens/Authenticated/DashboardServices';
import { ServiceDetails } from '../screens/Authenticated/DashboardServices/ServiceDetails';

type AuthRoutes = {
    dashboardServices: undefined;
    serviceDetails: undefined;
  }

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>

const Stack = createStackNavigator<AuthRoutes>();

export function StackServices() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dashboardServices" component={DashboardServices} />
      <Stack.Screen name="serviceDetails" component={ServiceDetails} />
    </Stack.Navigator>
  );
}
