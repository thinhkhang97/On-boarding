/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Onboarding from 'features/Onboarding';
import { DATA_SAMPLE, THEME } from 'asset/dataSample';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Onboarding userData={DATA_SAMPLE} theme={THEME} />;
  }
}
