import Icons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SharePlaces from '../SharePlaces/sharePlaces';
import FindPlaces from '../FindPlaces/findPlaces';

const tab =  createBottomTabNavigator();

const NavigationTab = props => {
    return (
        <tab.Navigator>
            <tab.Screen 
                name='Find Places' 
                component={FindPlaces}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <Icons name='ios-share-alt' color={color} size={size}/>
                    )
                }}
            />
            <tab.Screen 
                name='Share Places' 
                component={SharePlaces}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <Icons name='md-map' color={color} size={size}/>
                    )
                }}
            /> 
        </tab.Navigator>
    );
}

export default NavigationTab;