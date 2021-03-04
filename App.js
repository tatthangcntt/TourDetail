/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useEffect} from 'react';
import {StatusBar} from 'react-native';

import Reactotron from 'reactotron-react-native';
import MainStack from './src/routers/MainStack';
import DropdownMessage from 'libraries/components/DropdownMessage';
import ShowMessageManager from 'libraries/components/DropdownMessage/ShowMessageManager';

import LoadingManager from 'libraries/components/Loading/LoadingManager';
import LoadingModal from 'libraries/components/Loading/LoadingModal';

Reactotron.clear();

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  const refDropDown = useRef(null);
  const refLoading = useRef(null);

  useEffect(() => {
    ShowMessageManager.register(refDropDown.current);
    LoadingManager.register(refLoading.current);
    return () => {
      refDropDown && ShowMessageManager.unregister(refDropDown);
      refLoading && LoadingManager.unregister(refLoading);
    };
  }, []);
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
        hidden={false}
      />
      <LoadingModal ref={refLoading} />
      <DropdownMessage ref={refDropDown} />
      <MainStack />
    </>
  );
};

export default App;
