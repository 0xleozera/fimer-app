import React from 'react';
import { StatusBar, Platform } from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import theme from 'configs/theme';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import SignIn from 'screens/sign-in';
import SignUp from 'screens/sign-up';

import Home from 'screens/home';
import Play from 'screens/play';
import Chat from 'screens/chat';
import Conversation from 'screens/chat/conversation';
import Profile from 'screens/profile';

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
                    header: null,
                  },
                },
                ShowProfileHome: {
                  screen: Profile,
                  navigationOptions: {
                    header: null,
                  },
                },
              }),
              navigationOptions: {
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
                    header: null,
                  },
                },
                ShowProfilePlay: {
                  screen: Profile,
                  navigationOptions: {
                    header: null,
                  },
                },
              }),
              navigationOptions: {
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
                    header: null,
                  },
                },
                Conversation: {
                  screen: Conversation,
                  navigationOptions: {
                    header: null,
                  },
                },
                ShowProfileChat: {
                  screen: Profile,
                  navigationOptions: {
                    header: null,
                  },
                },
              }),
              navigationOptions: {
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
                    header: null,
                  },
                },
                EditProfile: {
                  screen: Profile,
                  navigationOptions: {
                    title: 'Editar Perfil',
                    headerStyle: {
                      backgroundColor: theme.colors.primary.dark,
                      borderColor: theme.colors.primary.dark,
                      marginTop:
                        Platform.OS === 'android'
                          ? StatusBar.currentHeight
                          : 'auto',
                    },
                    headerTintColor: theme.colors.primary.contrast,
                  },
                },
              }),
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <IconMaterial name="person" size={30} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            defaultNavigationOptions: ({ navigation }) => ({
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
