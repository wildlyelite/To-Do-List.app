import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList } from 'react-native';


export default function app() {
    const [enteredgoaltext, setenteredgoaltext] = useState('')
    const [goalsarray, setgoalsarray] = useState([]);

    function getgoals(input) {
        setenteredgoaltext(input)
    }

    function addgoals() {
        setgoalsarray((currentgoals) => [
            ...currentgoals, enteredgoaltext,
        ])

    }

    function delet() {
        console.log(key)
    }

    delet = ()=>{
        console.log('hi')
    }
    return(
        <View style={{paddingHorizontal:10,paddingVertical:50,flex:1,backgroundColor:'#A7727D'}} >
            <Text style={{color:'#fff',fontWeight:'600',fontSize:50,textAlign:'center',marginVertical:10,fontFamily:'serif'}}>TO-DO LIST</Text>
           <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,marginHorizontal:10,alignItems:'center'}}>
              <TextInput placeholder='Write your goals' style={style.textinput} onChangeText={getgoals} />
              <Button title='Add Goal' onPress={addgoals} />
           </View>
        
           <View style={{marginTop:10,borderTopColor:'#cccccccc',borderTopWidth:1,paddingTop:10,flex:5}}>
           {/* <ScrollView>
           {goalsarray.map((goal,index)=>
           <View style={{borderRadius:'25%',margin:5}} onPress={this.delet} key={index+=1 }>
           <Text style={{fontSize: 20,color:'#ffffff',fontWeight:'300'}}>{index+=1 }. { goal}
           </Text>
           </View>
           )}
           </ScrollView> */}

           <FlatList data={goalsarray}    renderItem={(itemdata)=>{
            
            return(
                
                <View style={{borderRadius:'25%',margin:5}} onPress={this.delet} >
                <Text style={{fontSize: 20,color:'#ffffff',fontWeight:'300',fontFamily:'Roboto'}}>{itemdata.index+=1 }. { itemdata.item}
                </Text>
                </View>
            )
           }}/>

           </View>
           
           

           
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