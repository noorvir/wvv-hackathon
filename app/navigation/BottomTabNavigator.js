import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/home';
import MeldungScreen from '../screens/sick';
import MapScreen from '../screens/map';
import InfoScreen from '../screens/info';
import {Ionicons} from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerTitleAlign:'center'});

  return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
                tabBarLabel: () => { return null},
            }}
        />
        <BottomTab.Screen
            name="Map"
            component={MapScreen}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="map" />,
                tabBarLabel: () => { return null}

            }}
        />
        <BottomTab.Screen
            name="Meldung"
            component={MeldungScreen}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heartbeat" />,
                tabBarLabel: () => { return null},
        }}
        />
        <BottomTab.Screen
            name="Info"
            component={InfoScreen}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="question-circle" />,
                tabBarLabel: () => { return null}
            }}
        />
    </BottomTab.Navigator>
  );

}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Dashboard';
    case 'Map':
        return 'Map';
  case 'Meldung':
      return 'Meldung';
    case 'Info':
        return 'FAQ';
  }
}

