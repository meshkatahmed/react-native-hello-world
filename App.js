import React from "react";
import {TouchableOpacity} from "react-native";
import {Provider} from 'react-redux';
import Store from './src/Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Components/Login/login';
import NavigationTab from './src/Components/NavigationTab/navigationTab';
import Icons from 'react-native-vector-icons/FontAwesome';

export const navigationRef = React.createRef();
export const navigate = (name,params) => {
    navigationRef.current && navigationRef.current.navigate(name,params); 
}
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={Store}>
        <stack.Navigator>
          <stack.Screen name='Login' component={Login}/>
          <stack.Screen 
              name='Home' 
              component={NavigationTab}
              options={{
                headerLeft: null,
                headerRight: () => (
                  <TouchableOpacity onPress={()=>navigate('Login')}>
                      <Icons name='power-off' size={26} style={{paddingRight:10}}/>
                  </TouchableOpacity>
                )
              }}
          />
        </stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

