/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Calendar />
      </SafeAreaView>
    </Fragment>
  );
};


export default App;
