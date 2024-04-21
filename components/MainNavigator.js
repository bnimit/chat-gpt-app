import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../screens/ChatScreens";
import ImageScreen from "../screens/ImageScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Fontisto name="hipchat" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Image"
        component={ImageScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="image" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="settings" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
