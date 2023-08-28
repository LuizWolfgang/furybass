
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import theme from '../styles/theme';

import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';


import { StackCars } from './stackCars.routes';
import { StackProducts } from './stackProducts.routes'

import { ButtonNewSale } from '../components/ButtonNewSale';
import { StackCreatedAd } from './stackCreatedAd.routes';
import { StackMyAds } from './stackMyAds.routes';
import { StackServices } from './stackServices.routes';


type AppRoutes = {
  Carros: undefined;
  exercise: undefined;
  Produtos: undefined;
  CriarAnuncio: undefined;
  Anuncios: undefined;
  Serviços:undefined;
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
        color: '#fefefed4',
        fontSize: 11,
        fontWeight: 'bold',
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
            <Ionicons name="car-sport" size={24} color={focused ? "#fefefed4" : "black"} />
          )
        }}/>
      <Screen
        name="Produtos"
        component={StackProducts}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-musical-notes-sharp" size={24} color={focused ? "#fefefed4" : "black"} />
          )
        }}/>

      <Screen
        name="CriarAnuncio"
        component={StackCreatedAd}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarLabel: () => null,
          tabBarIcon: ({ focused , size }) => (
            <ButtonNewSale size={size} color={focused ? "black" : "white"} focused={focused}/>
          ),
        }}/>

      <Screen
        name="Serviços"
        component={StackServices}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="tools" size={20} color={focused ? "#fefefed4" : "black"} />
          )
        }}/>

      <Screen
        name="Anuncios"
        component={StackMyAds}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({ focused }) => (
            <AntDesign name="tags" size={24} color={focused ? "#fefefed4" : "black"} />
          )
        }}/>
    </Navigator>
  );
}
