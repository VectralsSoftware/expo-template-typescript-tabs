import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import Conversor from '../screens/Conversor';
import WebView from '../screens/WebView';


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
      <Stack.Navigator>
    {/*     <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group> */}
        <Stack.Screen name="WebView" component={WebView} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  export default RootNavigator