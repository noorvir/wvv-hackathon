import React from 'react';
import {
    View,
    Text,
    Platform,
    StatusBar,
    Image,
    TouchableOpacity, StyleSheet
} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

import OnboardingOne from "./one";
import styles from "../../constants/Styles";
import {MonoText} from "../../components/StyledText";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'OnboardingOne';
const TITLE = 'ChainBreaker';

export default function Onboarding () {
    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <NavigationContainer>
                <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
                    <Stack.Screen
                        name={ "OnboardingOne" }
                        component={ OnboardingOne }
                        options={{
                            title: 'ChainBreaker'
                        }}
                    />
                    <Stack.Screen name={ "OnboardingTwo" } component={ OnboardingOne } />
                    <Stack.Screen name={ "OnboardingThree" } component={ OnboardingOne } />
                </Stack.Navigator>
            </NavigationContainer>
            <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

                <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                    <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
                </View>
            </View>
        </View>
    );
}
