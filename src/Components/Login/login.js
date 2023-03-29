import { useState,useEffect } from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import backgroundImage from '../../Images/4.jpg';
import { tryAuth } from '../../Redux/actionCreators';
import {connect} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        tryAuth: (email,password,mode)=>dispatch(tryAuth(email,password,mode)) 
    }
}

const Login = props => {
    const [authState,setAuthState] = useState({
        mode: 'login',
        inputs: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });
    const isFocused = useIsFocused();
    useEffect(()=>{
        setAuthState({
            ...authState,
            inputs: {
                email: '',
                password: '',
                confirmPassword: ''
            }
        });
    },[isFocused]);
    const switchViews = () => {
         setAuthState({
            ...authState,
            mode: authState.mode==='login'?'signup':'login',
            inputs: {
                email: '',
                password: '',
                confirmPassword: ''
            }
         })
    }
    const updateInputs = (value,name) => {
        setAuthState({
            ...authState,
            inputs: {
                ...authState.inputs,
                [name]: value
            }
        })
    }
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    const handleAuth = () => {
        const email = authState.inputs.email;
        const password = authState.inputs.password;
        const confirmPassword = authState.inputs.confirmPassword;

        if (email!=='' && password!=='') {
            if (re.test(email)) {
                if (authState.mode==='login') {
                    props.tryAuth(email,password,'login');
                } else {
                    if (password===confirmPassword) {
                        props.tryAuth(email,password,'signup');
                    } else {
                        alert("Passwords don't match!");
                    }
                }
            } else {
                alert('Invalid Email!')
            }
        } else {
            alert('Input all the fields!')
        }
    }
    let confirmPassField = null;
    if (authState.mode==='signup') {
        confirmPassField = (
            <TextInput style={styles.input} placeholder='Confirm Password'
                value={authState.inputs.confirmPassword}
                onChangeText={value=>updateInputs(value,'confirmPassword')}
            />
        );
    }
    return (
        <ImageBackground 
            source={backgroundImage} 
            style={{width:'100%',flex:1}}
            blurRadius={5}
        >
            <View style={styles.loginView}>
                <TouchableOpacity 
                    style={{...styles.btnContainer,backgroundColor: '#1167B1',width: '85%'}}
                    onPress={
                        ()=> switchViews()
                    }
                >
                    <Text style={styles.btnStyle}>{authState.mode==='login'?'Switch to Sign Up':'Switch to Login'}</Text>
                </TouchableOpacity>
                <TextInput style={styles.input} 
                    placeholder='Your Email Address' 
                    value={authState.inputs.email}
                    onChangeText={value=>updateInputs(value,'email')}
                />
                <TextInput style={styles.input} placeholder='Password'
                    value={authState.inputs.password}
                    onChangeText={value=>updateInputs(value,'password')}
                />
                {confirmPassField}
                <TouchableOpacity style={styles.btnContainer}
                    onPress = {() =>handleAuth()}
                >
                    <Text style={styles.btnStyle}>{authState.mode==='login'?'Login':'Sign Up'}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '85%',
        padding: 5,
        marginTop: 10,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 4

    },
    btnStyle: {
        fontSize: 16,
        color: '#fff',
        alignSelf: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        width: 150,
        paddingVertical: 5,
        backgroundColor: '#009688',
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);