import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {FeedScreen} from '../screens/FeedScreen';
import {MessagesScreen} from '../screens/MessagesScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Switch} from './NotificationNavigator';
import {MyDrawer} from './CreateDrawerNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {Provider} from 'react-redux';
import store from '../store/store';

const FeedNavigator = createStackNavigator();

const FeedStack = () => (
  <FeedNavigator.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}>
    <FeedNavigator.Screen name="News" component={FeedScreen} />
  </FeedNavigator.Navigator>
);

const SearchStack = () => (
  <FeedNavigator.Navigator>
    <FeedNavigator.Screen name="Search" component={SearchScreen} />
  </FeedNavigator.Navigator>
);

const MessageStack = () => (
  <FeedNavigator.Navigator>
    <FeedNavigator.Screen name="Messages" component={MessagesScreen} />
  </FeedNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator
    initialRouteName="Search"
    tabBarOptions={{
      activeTintColor: '#e91e63',
      activeBackgroundColor: 'yellow',
      tabStyle: {justifyContent: 'center'},
      // adaptive: false,
      labelPosition: 'below-icon',
    }}
    shifting={false}>
    <Tab.Screen
      name="News"
      component={FeedStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="shield-home-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStack}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="shield-search"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={MessageStack}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="message" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Switch}
      options={{
        tabBarIcon: ({color, size}) => (
          <AntDesign name="notification" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Еще"
      component={MyDrawer}
      options={{
        tabBarLabel: 'More',
        tabBarIcon: ({color, size}) => (
          <Foundation name="indent-more" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MyTabs />
      </SafeAreaView>
    </Provider>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //для Android
    // backgroundColor: 'blue',
  },
});
