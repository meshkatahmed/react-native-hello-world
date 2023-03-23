import {View,Text,Button} from 'react-native';
import NavigationTab from '../NavigationTab/navigationTab';

const Login = props => {
    return (
        <View>
            <Text>
                Login
            </Text>
            <Button title='login' onPress={()=>props.navigation.navigate('Home')}/>
        </View>
    );
}

export default Login;