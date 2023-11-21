import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Equipment from './pages/equipment';
import Exercice from './pages/exercice';
import Exercices_List from './pages/exercices_list';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './pages/stacknavigation';

const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>X-fitness</Text>
      </View>
      <Tabs.Navigator  initialRouteName="Exercice"
         style = {styles.bar}
         activeColor="orange"
          inactiveColor="white"
          barStyle={{ backgroundColor: 'black' }}
        >
        <Tabs.Screen  name="Exercice"
              component={StackNavigator}
              options={{
                tabBarLabel: 'Body Exercice',
                tabBarIcon: () => (
                  <Ionicons name="body" size={24} color="orange"/>
            ),
          }} />

            <Tabs.Screen 
                name="Body Part"
                component={Exercices_List}
                options={{
                  tabBarLabel: 'Body Part',
                  tabBarIcon: () => (
                    <Ionicons name="fitness" size={24} color="orange" />
                  ),
                }}/>

            <Tabs.Screen 
                name="Equipment"
                component={Equipment}
                options={{
                  tabBarLabel: 'Equipment List',
                  tabBarIcon: () => (
                    <MaterialIcons name="fitness-center" size={24} color="orange" />
                  ),
                }}/>
      </Tabs.Navigator>   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },

  bar:{
    backgroundColor: 'black',
    borderRadius: 10,
  },

  logo: {
    margin: 10,
    padding: 8,
    borderRadius: 20,
    borderColor: 'orange',
    backgroundColor: 'black',
  },
  logoText: {
    margin: 5,
    color: 'orange',
    fontSize: 25,
    marginTop: 10,
    padding: 5,
    fontWeight: 'bold',
  }
});
