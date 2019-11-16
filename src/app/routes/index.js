import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import SignIn from 'screens/sign-in';
import SignUp from 'screens/sign-up';

import Home from 'screens/home';
import Play from 'screens/play';
import Chat from 'screens/chat';
import Conversation from 'screens/chat/conversation';
import Profile from 'screens/profile';
import ProfileEdit from 'screens/profile-edit';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Home: {
              screen: createStackNavigator({
                Lobby: {
                  screen: Home,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
                ShowProfileHome: {
                  screen: Profile,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
              }),
              navigationOptions: {
                gesturesEnabled: false,
                tabBarIcon: ({ tintColor }) => (
                  <IconMaterial name="home" size={30} color={tintColor} />
                ),
              },
            },
            Play: {
              screen: createStackNavigator({
                Search: {
                  screen: Play,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
                ShowProfilePlay: {
                  screen: Profile,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
              }),
              navigationOptions: {
                gesturesEnabled: false,
                tabBarIcon: ({ tintColor }) => (
                  <IconIonicons
                    name="logo-game-controller-b"
                    size={30}
                    color={tintColor}
                  />
                ),
              },
            },
            Chat: {
              screen: createStackNavigator({
                ListChats: {
                  screen: Chat,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
                Conversation: {
                  screen: Conversation,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
                ShowProfileChat: {
                  screen: Profile,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
              }),
              navigationOptions: {
                gesturesEnabled: false,
                tabBarIcon: ({ tintColor }) => (
                  <IconIonicons
                    name="ios-chatboxes"
                    size={30}
                    color={tintColor}
                  />
                ),
              },
            },
            Profile: {
              screen: createStackNavigator({
                ShowMyProfile: {
                  screen: Profile,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
                EditProfile: {
                  screen: ProfileEdit,
                  navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                  },
                },
              }),
              navigationOptions: {
                gesturesEnabled: false,
                tabBarIcon: ({ tintColor }) => (
                  <IconMaterial name="person" size={30} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            defaultNavigationOptions: ({ navigation }) => ({
              gesturesEnabled: false,
              tabBarVisible:
                navigation.state.routeName === 'Chat' &&
                navigation.state.routes.length === 2
                  ? false
                  : true,
            }),
            tabBarOptions: {
              showLabel: false,
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#27273e',
                borderTopWidth: 0.3,
                borderTopColor: '#000',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
