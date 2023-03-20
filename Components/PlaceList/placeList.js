import { FlatList } from "react-native";
import ListItem from "../ListItem/listItem";

const PlaceList = props => {
    return (
        <FlatList style={{width:'100%'}}
        data={props.placeList}
        renderItem={info=>{
          return (
            <ListItem placename={info.item.value} 
                      onItemPressed={()=>alert(info.item.value)}
            />
          );
        }}
      />
    );
}

export default PlaceList;