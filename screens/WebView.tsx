import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import WebView from 'react-native-webview';
import Colors from '../constants/Colors';

export default function WebViewScreen({ navigation }: RootStackScreenProps<'WebView'>) {
  return (
    <WebView source={{ uri: 'http://tecambio.app' }} style={{ flex: 1, backgroundColor: Colors.light.themeColor }} />
  );
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
