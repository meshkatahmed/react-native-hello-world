import {View,Text,StyleSheet,TouchableWithoutFeedback,TouchableHighlight,TouchableOpacity} from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Text>
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
            margin: 5
        }
    }
)
export default ListItem;