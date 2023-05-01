
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { StackRoutes } from './stack.routes';
// import { useTheme } from 'styled-components';
// import { Platform } from 'react-native';


// const Tab = createMaterialBottomTabNavigator();

// type TabRoutes = {
//     signIn: undefined;
//     signUp: undefined
//   }

// export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<TabRoutes>

// export function TabRoutes() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabelStyle: { fontSize: 12 },
//         tabBarItemStyle: { width: 300 },
//         tabBarStyle: { backgroundColor: 'powderblue' },
//       }}
//     >
//       <Tab.Screen name="Home" component={StackRoutes} />
//       <Tab.Screen name="oi" component={StackRoutes} />
//       <Tab.Screen name="rvhau" component={StackRoutes} />
//     </Tab.Navigator>
//   );
// }


import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { StackRoutes } from './stack.routes';
import { SignIn } from '../screens/SignIn';
import { ButtonNewSale } from '../components/ButtonNewSale';
import theme from '../styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



type AppRoutes = {
  home: undefined;
  exercise: { exerciseId: string};
  profile: undefined;
  history: undefined;
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
        height: Platform.OS === 'android' ? 'auto' : 80,
        paddingBottom: 25,
        paddingTop:6,
      },
      tabBarBadgeStyle:{
        fontWeight: 'bold',
        fontSize: 30
      }
    }}>
      <Screen
        name="Carros"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ focused ,color }) => (
            <Ionicons name="car-sport" size={24} color={focused ? "white" : "black"} />
          )
        }}/>
      <Screen
        name="Produtos"
        component={SignIn}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="ios-musical-notes-sharp" size={24} color={focused ? "white" : "black"} />
          )
        }}/>

      <Screen
        name="Eventos"
        component={SignIn}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused ,color, size }) => (
            <ButtonNewSale size={size} color={color} focused={focused}/>
          ),
        }}/>

      <Screen
        name="Anuncios"
        component={SignIn}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="tags" size={24} color={focused ? "white" : "black"} />
          )
        }}/>

      <Screen
        name="eventos"
        component={SignIn}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="party-popper" size={24} color={focused ? "white" : "black"} />
          )
        }}/>
    </Navigator>
  );
}

