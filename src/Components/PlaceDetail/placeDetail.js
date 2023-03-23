import {View,Modal,Image,Text,Button,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceDetail = props => {
    return (
        <Modal>
            <View style={{alignItems:'center'}}> 
                <Image source={props.place.image} style={{width:'100%',height:300}}/>
                <Text style={{textAlign:'center',fontSize:40}}>
                      {props.place.value}
                </Text>
                <View>
                    <TouchableOpacity onPress={()=>props.handleDeleteItem(props.place.key)}>
                        <Icon name='trash' size={60} color='red'></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.handleHideModal()}>
                        <Icon name='times-circle' size={60}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default PlaceDetail;

