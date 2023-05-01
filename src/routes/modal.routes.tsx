import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={Sign} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
