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
              screen: Home,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <IconMaterial name="home" size={30} color={tintColor} />
                ),
              },
            },
            Play: {
              screen: Play,
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
              screen: Chat,
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
                    headerMode: 'none',
                    headerTransparent: true,
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
                ShowProfile: {
                  screen: Profile,
                  navigationOptions: {
                    title: 'Perfil',
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
