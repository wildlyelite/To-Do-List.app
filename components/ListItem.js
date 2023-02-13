import { View,Text,Pressable,StyleSheet } from "react-native";
import { useState } from "react";

export default function ListItem(props){
        const [textdecoration, settextdecoration] = useState('none');
    function strike(){
        if (textdecoration =='none'){
        settextdecoration('line-through')}
        else{
            settextdecoration('none')
        }
    
    }
    
    return(
        <Pressable id={props.index}  onPress={strike} onLongPress={props.delet.bind(this,props.index)} >
            <View style={{borderRadius:10,margin:5,borderBottomWidth:1,borderColor:'#111',borderStyle:'dashed',padding:5,flex:1,flexDirection:'row'}} id={props.index}>
        <Text  id={props.index}   style={{   marginRight:8,fontSize: 20,fontWeight:'300',fontFamily:'Roboto',color:'#fff',width:'70%', textDecorationLine:textdecoration,  }}>{props.index }. { props.item}
        </Text>
        <Text style={{textAlign:'right',width:'30%',fontWeight:'900',fontSize:15,color:'#423F3E'}} >
            {props.hrs}:{props.min} AM
        </Text>
        </View>
        </Pressable>
        
    )
}

