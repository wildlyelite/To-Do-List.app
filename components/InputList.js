import { View,TextInput,Button,StyleSheet,Modal,Image } from "react-native";
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
        
        <Modal visible={props.visiblity}  animationType='slide'>
            
        <View style={{justifyContent:'center',flex:1,paddingHorizontal:4,alignItems:'center',backgroundColor:'#71c4cd'}}>
        <Image source={{uri: 'https://imgs.search.brave.com/m8mfRPzJBJtyvyL4aIgF0roPhKiR6_gm9EgokA3JD6Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzQx/MS8yODYvb3JpZ2lu/YWwvdmVjdG9yLXBl/b3BsZS1tYWtpbmct/YS10by1kby1saXN0/LWlsbHVzdHJhdGlv/bi5qcGc'}} style={{width: 400, height: 300}} />

        <TextInput placeholder='Write your goals' style={style.textinput} onChangeText={getgoals} value={enteredgoaltext} />
    
        <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
            <View style={{width:'40%',margin:5}}>
            <Button title='Add Goal' onPress={addgoalsinput}   />

            </View>
            <View style={{width:'40%',margin:5}}>
            <Button title="go Back" onPress={props.fn}  />

            </View>

        </View>
      
     </View>
     </Modal>
   
    )
}

const style = StyleSheet.create({

    textinput :{
     borderColor:'#cccccccc',
     backgroundColor:'#EDDBC7',
     borderWidth:1,
     width:'100%',
     marginBottom:10,
     fontSize:15,
     color:'#282A3A',
     padding:10,
     fontWeight:'500',
     borderRadius:10,
    }

})

