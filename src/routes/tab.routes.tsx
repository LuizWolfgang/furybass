
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import theme from '../styles/theme';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StackCars } from './stackCars.routes';
import { StackProducts } from './stackProducts.routes'

import { SignIn } from '../screens/Unauthenticated/SignIn';
import { CreateAd } from '../screens/Authenticated/CreateAd';

import { ButtonNewSale } from '../components/ButtonNewSale';
import { StackCreatedAdCategory } from './stackCreatedAdCategory.routes';


type AppRoutes = {
  Carros: undefined;
  exercise: undefined;
  Produtos: undefined;
  CriarAnuncio: undefined;
  Anuncios: undefined;
  Eventos:undefined;
}

export type AppNavigatorRouterProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function TabRoutes() {

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#8f7a7a',
      tabBarInactiveTintColor: '#323030',
      tabBarStyle: {
        backgroundColor: `${theme.colors.header}`,
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 60 : 80,
        paddingBottom: Platform.OS === 'android' ? 10 : 25,
        paddingTop:6,
      },
      tabBarLabelStyle:{
        color: '#fefefe'
      },
      tabBarBadgeStyle:{
        fontWeight: 'bold',
        fontSize: 30
      }
    }}>
      <Screen
        name="Carros"
        component={StackCars}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({ focused ,color }) => (
            <Ionicons name="car-sport" size={24} color={focused ? "white" : "black"} />
          )
        }}/>
      <Screen
        name="Produtos"
        component={StackProducts}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-musical-notes-sharp" size={24} color={focused ? "white" : "black"} />
          )
        }}/>

      <Screen
        name="CriarAnuncio"
        component={StackCreatedAdCategory}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarLabel: () => null,
          tabBarIcon: ({ focused , size }) => (
            <ButtonNewSale size={size} color={focused ? "black" : "white"} focused={focused}/>
          ),
        }}/>

      <Screen
        name="Anuncios"
        component={SignIn}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({ focused }) => (
            <AntDesign name="tags" size={24} color={focused ? "white" : "black"} />
          )
        }}/>

      <Screen
        name="Eventos"
        component={SignIn}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="party-popper" size={24} color={focused ? "white" : "black"} />
          )
        }}/>
    </Navigator>
  );
}

