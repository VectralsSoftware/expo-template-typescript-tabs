import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import WebView from 'react-native-webview';
import Colors from '../constants/Colors';
import { useState } from 'react';
import Loading from '../components/Loading';

export default function WebViewScreen({ navigation }: RootStackScreenProps<'WebView'>) {


  return (
    <WebView
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      pullToRefreshEnabled={true}
      source={{ uri: 'https://tecambio.app' }}
      style={{
        flex: 1,
        backgroundColor: Colors.light.themeColor
      }}
      renderLoading={() => {
        return (
         <Loading/>
        )
      }} />
  )
    ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
