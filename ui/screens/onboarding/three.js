import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import styles from "../../constants/Styles";
import {Icon} from "react-native-elements";
import Dots from "react-native-dots-pagination";
import {StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native";


export default function OnboardingThree({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={ styles.welcomeContainer }>
                    <Text style={ styles.getStartedText }>
                        Wir benachrichtigen dich, wenn eine Person, die du
                        getroffen hast, positiv getestet wurde.
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>

                <View style={navstyle.parent}>

                    <View style={navstyle.leftContainer}>
                        <TouchableOpacity onPress= {() => navigation.navigate('OnboardingTwo')}>
                            <View style={ navstyle.rightNavigate }>
                                <Icon name="chevron-left" type="feather"/>
                                <Text> Zurück </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View><Dots length={4} active={2}/></View>

                    <View style={navstyle.rightContainer}>
                        <TouchableOpacity onPress= {() => navigation.navigate('OnboardingDone')}>
                            <View style={ navstyle.rightNavigate }>
                                <Text> Weiter </Text>
                                <Icon name="chevron-right" type="feather"/>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View>

    )
}


const navstyle = StyleSheet.create({
    parent: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    rightNavigate: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});