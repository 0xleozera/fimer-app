// import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  // createBottomTabNavigator,
  // createStackNavigator,
} from 'react-navigation';

import SignIn from 'screens/SignIn';
import SignUp from 'screens/SignUp';

// import Home from 'screens/Home';
// import Play from 'screens/Search';
// import Profile from 'screens/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        //   App: createBottomTabNavigator(
        //     {
        //       Home,
        //       Play,
        //       Profile,
        //     },
        //     {
        //       resetOnBlur: true,
        //       tabBarOptions: {
        //         keyboardHidesTabBar: true,
        //         activeTintColor: '#fff',
        //         inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        //         style: {
        //           backgroundColor: '#8d41a8',
        //         },
        //       },
        //     },
        //   ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
