import * as actionTypes from './actionTypes';
import {navigate} from '../../../hello-world/App.js';
import Store from './store';

export const addPlace = place => dispatch => {
    fetch('https://react-native-hello-world-549cd-default-rtdb.firebaseio.com/places.json',{
        method: 'POST',
        body: JSON.stringify(place)
    })
    .catch(error=>console.log(error))
    .then(response=>response.json())
    .then(data=>console.log(data));
}
export const deletePlace = key => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key
    }
}
export const authUser = token => {
    return {
        type: actionTypes.AURHENTICATE_USER,
        payload: token
    }
}
export const tryAuth = (email,password,mode) => {
    let url = '';
    const API_KEY = 'AIzaSyCqt9GsPgVFDaQXxzNnrprL4IEI34r6wwY';
    if (mode=='signup') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
    } else if (mode=='login') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;
    }
    fetch(url, 
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'aplication/json'
            }
        }
    ).catch(err=>alert('Authentication Failed!')
            ).then(res=>res.json()).then(data=>{
                    if (data.error) {
                        alert(data.error.message);
                    } else {
                        Store.dispatch(authUser(data.idToken));
                        navigate('Home');
                    }
                }
            )
}
