import 'react-native-gesture-handler';
import Main from './src/Components/main';
import {Provider} from 'react-redux';
import Store from './src/Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Components/Login/login';
import NavigationTab from './src/Components/NavigationTab/navigationTab';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <stack.Navigator>
          <stack.Screen name='Login' component={Login}/>
          <stack.Screen name='Home' component={NavigationTab}/>
        </stack.Navigator>
      </Provider>
    // </NavigationContainer>
  );
}

