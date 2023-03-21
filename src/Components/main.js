import {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList } from 'react-native';
import InputPlace from '../Components/InputPlace/inputPlace';
import PlaceList from '../Components/PlaceList/placeList';
import PlaceDetail from '../Components/PlaceDetail/placeDetail';
import {connect} from 'react-redux';
import { addPlace,deletePlace } from '../Redux/actionCreators';

const mapStateToProps = state => {
    return {placeList:state.placeList}
}

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place)),
        deletePlace: key => dispatch(deletePlace(key))
    }
}

const Main = props => {
    const [inputValue,setInputValue] = useState('');
    const [selectedPlace,setSelectedPlace] = useState(null);

    const handleSelectedPlace = key => {
        const place = props.placeList.find(place => {
            return place.key===key;
        });
        setSelectedPlace(place);
    };
    const handleHideModal = () => {
        setSelectedPlace(null);
    }
    const handleDeleteItem = key => {
        props.deletePlace(key);
        setSelectedPlace(null);
    }
    let placeDetail = null;
    if (selectedPlace!==null) {
        placeDetail = <PlaceDetail place={selectedPlace} 
                            handleHideModal={handleHideModal}
                            handleDeleteItem={handleDeleteItem}
                        />
    }
    return (
        <View style={styles.container}>
        {placeDetail}
        <InputPlace 
            inputValue={inputValue}
            setInputValue={setInputValue}
            placeList={props.placeList}
            addPlace={props.addPlace}
        />
        <PlaceList
            placeList={props.placeList} handleSelectedPlace={handleSelectedPlace}
        />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'space-between',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(Main);