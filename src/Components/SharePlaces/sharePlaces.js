import {useState} from 'react';
import InputPlace from '../InputPlace/inputPlace';
import { addPlace } from '../../Redux/actionCreators';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place)),
    }
}
const SharePlaces = props => {
    const [inputValue,setInputValue] = useState('');
    return (
        <InputPlace 
            inputValue={inputValue}
            setInputValue={setInputValue}
            addPlace={props.addPlace}
        />
    );
    
}

export default connect(null,mapDispatchToProps)(SharePlaces);