import { Button, Text, TouchableOpacity, View } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import React from 'react';

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <TouchableOpacity onPress={navigation.openDrawer}><Ionicons name="md-checkmark-circle" size={28} color="green" /></TouchableOpacity>,
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-checkmark-circle" size={32} color="green" />

      ),
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="cvcf"
          color="green"
        />
      ),
    }
  };
  render() {
    console.log('props', this.props.navigation);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
      </View>
    );
  }
}


export const SettingsScreen = (props) => {
  console.log('navigationnavigationnavigation', props.navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={props.navigation.openDrawer}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('AboutScreen')}>
        <Text>About</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
    </View>
  );

}

SettingsScreen.navigationOptions = {
  title: 'Links',

  drawerIcon: ({ tintColor }) => (
    <Ionicons name="md-checkmark-circle" size={32} color="green" />

  ),
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="cvcf"
      color="green"
    />
  ),
};


export const AboutScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>AboutScreen</Text>
    </View>
  );

}

AboutScreen.navigationOptions = {
  //title: 'about',

  drawerIcon: ({ tintColor }) => (
    <Ionicons name="md-checkmark-circle" size={32} color="green" />

  ),
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="cvcf"
      color="green"
    />
  ),
};

const SettingsScreenStack = createStackNavigator(
  {
    SettingsScreen,
    AboutScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'SettingsScreen',
      headerMode: 'screen',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-checkmark-circle" size={32} color="green" />

      ),
      title: 'Main Screen Header',
      drawerLabel: 'Settings Screen',
    }),
  },

  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'MainScreen',
      headerMode: 'screen',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-checkmark-circle" size={32} color="green" />

      ),
      title: 'Main Screen Header',
      drawerLabel: 'Main Screen',
    }),
  },
);


const mainScreenStack = createStackNavigator(
  {
    HomeScreen: {

      screen: HomeScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'MainScreen',
      headerMode: 'screen',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-checkmark-circle" size={32} color="green" />

      ),
      title: 'Main Screen Header',
      drawerLabel: 'Main Screen',
    }),
  },

  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'MainScreen',
      headerMode: 'screen',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-checkmark-circle" size={32} color="green" />

      ),
      title: 'Main Screen Header',
      drawerLabel: 'Main Screen',
    }),
  },
);

export const DrawerNavigator = createDrawerNavigator(
  {
    Home: mainScreenStack,
    Settings: SettingsScreenStack,

  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);



export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: DrawerNavigator,
  })
);
