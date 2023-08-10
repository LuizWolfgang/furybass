import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DashboardCars } from '../screens/Authenticated/DashboardCars';
import { CarDetails } from '../screens/Authenticated/DashboardCars/CarDetails';
import { ProductDetails } from '../screens/Authenticated/DashboardProducts/ProductDetails';
import { SignIn } from '../screens/Unauthenticated/SignIn';
import { DashboardProducts } from '../screens/Authenticated/DashboardProducts';
import { CreateAd } from '../screens/Authenticated/CreateAd';
import { CategorySelect } from '../screens/Authenticated/CreateAd/CategoryAndSubCategory/CategorySelect';
import { SubCategorySelect } from '../screens/Authenticated/CreateAd/CategoryAndSubCategory/SubCategorySelect ';

type AuthRoutes = {
    createAd: undefined;
    categories: undefined;
    subCategories: undefined;
  }

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>

const Stack = createStackNavigator<AuthRoutes>();

export function StackCreatedAd() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="createAd" component={CreateAd} />
      <Stack.Screen name="categories" component={CategorySelect} />
      <Stack.Screen name="subCategories" component={SubCategorySelect} />
    </Stack.Navigator>
  );
}

