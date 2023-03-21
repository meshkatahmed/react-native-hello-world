import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Image source={props.image}
                       style={{width:'20%',height:20}}
                />
                <Text style={{paddingLeft:20}}>
                    {props.placename}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create(
    {
        listItem: {
            width: '100%',
            padding: 10,
            backgroundColor: '#eee',
            margin: 5,
            flexDirection: 'row'
        }
    }
)
export default ListItem;