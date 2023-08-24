import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ProductDetails } from '../screens/Authenticated/DashboardProducts/ProductDetails';
import { DashboardProducts } from '../screens/Authenticated/DashboardProducts';

type AuthRoutes = {
    dashboardProducts: undefined;
    productDetails: undefined;
  }

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>

const Stack = createStackNavigator<AuthRoutes>();

export function StackProducts() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dashboardProducts" component={DashboardProducts} />
      <Stack.Screen name="productDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
