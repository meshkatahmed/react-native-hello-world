import {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList } from 'react-native';
import InputPlace from './Components/InputPlace/inputPlace';
import PlaceList from './Components/PlaceList/placeList';

export default function App() {
  const [inputValue,setInputValue] = useState('');
  const [placeList,setPlaceList] = useState([]);

  return (
    <View style={styles.container}>
      <InputPlace 
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeList={placeList}
          setPlaceList={setPlaceList}
      />
      <PlaceList
          placeList={placeList}
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
