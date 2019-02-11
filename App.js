import React from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './ScreenHome';
import RulesScreen from './ScreenRules';
import HistoryScreen from './ScreenHistory';
import PlayScreen from './ScreenPlay';
import './strings';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Play: {screen: PlayScreen},
  Rules: {screen: RulesScreen},
  History: { screen: HistoryScreen },
}, {
  headerMode: "none",

});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}