import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabRoutes } from "./tab.routes";
import { useWindowDimensions } from "react-native";
import { Profile } from "../screens/Authenticated/Profile";
import { TermsOfUse } from "../screens/Authenticated/ TermsOfUse";

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName='TabNavigation'
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerPosition: 'right'
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabRoutes}
        options={{ drawerLabel: 'Dashboard', headerShown: false }}
      />

      <Drawer.Screen
        name="Meu perfil"
        component={Profile}
        options={{ drawerLabel: 'Meu perfil', headerShown: false }}
      />
      <Drawer.Screen
        name="Termos de uso"
        component={TermsOfUse}
        options={{ drawerLabel: 'Termos de uso', headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
