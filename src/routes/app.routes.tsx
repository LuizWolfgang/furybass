import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabRoutes } from "./tab.routes";
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName='TabNaigation'
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerPosition: 'right'
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabRoutes}
        options={{ drawerLabel: 'Home', headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
