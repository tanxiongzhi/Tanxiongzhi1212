// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={{
        fontSize: 20,
        textAlign: 'center'
      }}>
        We have implemented a news list, from which you can click to view the news details.
      </Text>

      <Button
        title="Go Detail"
        onPress={() => navigation.navigate('NewsDetails')}
      />
    </View>
  );
}

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Text style={{
        color: '#888',
        marginBottom: 50
      }}>Detail</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack('Details')}
      />

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewsList" component={HomeScreen} />
        <Stack.Screen name="NewsDetails" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;