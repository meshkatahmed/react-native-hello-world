import {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList } from 'react-native';
import PlaceList from '../PlaceList/placeList';
import PlaceDetail from '../PlaceDetail/placeDetail';
import {connect} from 'react-redux';
import { deletePlace } from '../../Redux/actionCreators';

const mapStateToProps = state => {
    return {placeList:state.placeList}
}
const mapDispatchToProps = dispatch => {
    return {
        deletePlace: key => dispatch(deletePlace(key))
    }
}

const FindPlaces = props => {
    
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

export default connect(mapStateToProps,mapDispatchToProps)(FindPlaces);