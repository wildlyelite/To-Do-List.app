import { View,Text,Pressable,StyleSheet } from "react-native";
import { useState,useEffect } from "react";
import moment from 'moment';


export default function ListItem(props){
        const [textdecoration, settextdecoration] = useState('none');
        const [currentDate, setCurrentDate] = useState('');
        var date = moment().utcOffset('+05:30').format(' h:mm a');
        const [height,sethieght] =useState(0)

     
    
        
    function strike(){
        if (textdecoration =='none'){
        settextdecoration('line-through')}
        else{
            settextdecoration('none')
        }
     if (currentDate =='' ){
        setCurrentDate(date);
        sethieght(25)

     }else{
        setCurrentDate('');
        sethieght(0)

     }

  


    //  if (aber ==''){
    //     var hr = hrs
    //  if (hr > 12){
    //     hr -= 12;

    //         setaber('AM')
    //  }else{
    //     setaber('PM')
    //  }}else{
    //     setaber('')
    //  }
    }
    
    return(
        <Pressable id={props.index}  onPress={strike} onLongPress={props.delet.bind(this,props.index)} android_ripple={{color:'#ffffff8f'}}  style={({pressed}) => pressed && styles.pressedItem}>
        <View style={{borderRadius:10,borderWidth:1,borderColor:'#fffffffc',padding:10,backgroundColor:'#ffffff40'}} id={props.index}>
            <View style={{flex:1,flexDirection:'row'}}>
        <Text  id={props.index}   style={{ fontSize: 20,fontWeight:'900',fontFamily:'Roboto',color:'#4a4847',width:'10%',textAlign:'center' }}>{props.index }.</Text>
        <Text  id={props.index}   style={{ fontSize: 25,fontFamily:'Roboto',color:'#fff',width:'90%', textDecorationLine:textdecoration }} >   { props.item}</Text>
        </View>
        <Text style={{textAlign:'right',width:'100%',height:height,fontWeight:'900',fontSize:15,color:'#4a4847'}} >
            {/* {hrs}{min} {aber} */}
            {currentDate}
        </Text>
        </View>
     
        </Pressable>
        
    )
}
 const styles = StyleSheet.create({

pressedItem:{
    opacity:0.5
}
 })