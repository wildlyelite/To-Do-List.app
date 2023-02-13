import { View,TextInput,Button,StyleSheet } from "react-native";
import { useState } from "react";


export default function InputList(props){

    const [enteredgoaltext, setenteredgoaltext] = useState('')
    function getgoals(input) {
          setenteredgoaltext(input)
      }
      function addgoalsinput() {
        if(enteredgoaltext !== ''){
            props.fun(enteredgoaltext);

        }
        setenteredgoaltext('')
      }

    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,marginHorizontal:10,alignItems:'center'}}>
        <TextInput placeholder='Write your goals' style={style.textinput} onChangeText={getgoals} value={enteredgoaltext} />
        <Button title='Add Goal' onPress={addgoalsinput} />
     </View>
     
    )
}

const style = StyleSheet.create({

    textinput :{
     borderColor:'#cccccccc',
     backgroundColor:'#EDDBC7',
     borderWidth:1,
     width:'70%',
     marginRight:5,
     fontSize:15,
     color:'#282A3A',
     padding:10,
     fontWeight:'500',
     borderRadius:10
    }

})

