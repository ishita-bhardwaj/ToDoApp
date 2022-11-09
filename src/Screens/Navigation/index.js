import * as React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Home';
import WP from '../Home/WorkProj';
import Add from '../Home/add';
import Hello from '../Home/hello';
//import App from './App';


const Stack = createNativeStackNavigator();

function Navig() {
    return (
        <NavigationContainer>
            {/* screenOptions={{headerShown: false}} */}
            <Stack.Navigator  >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="TodoList" component={WP} />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="Hello" component={Hello} />

                
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navig;