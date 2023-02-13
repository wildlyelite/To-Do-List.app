import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList,Image } from 'react-native';
import ListItem from './components/ListItem';
import InputList from './components/InputList';


export default function App() {
    const [goalsarray, setgoalsarray] = useState([]);

  

    function addgoals(enteredGoalText) {
        setgoalsarray((currentgoals) => [
            ...currentgoals, { text: enteredGoalText },
        ])

    }


    
  function del(id) {
    
    setgoalsarray((currentCourseGoals) => {
    //     console.log(currentCourseGoals)
     return currentCourseGoals.filter((goal) =>    goal.id !== id)
  
    });
  }

  const [coloru, setcolor] = useState("#fff");
  //     const [textdecoration, settextdecoration] = useState('none');
  function strike(){
    console.log("hir")
      setcolor('#192382')
  //     if (textdecoration='none'){
  //     settextdecoration('line-through')}
  //     else{
  //         settextdecoration('none')
  //     }
  
  }
    var date = new Date();
    return(
        <View style={{paddingHorizontal:10,paddingVertical:50,flex:1,backgroundColor:'#A7727D'}} >
            <Text style={{color:'#fff',fontWeight:'600',fontSize:50,textAlign:'center',marginVertical:10,fontFamily:'serif'}}>TO-DO LIST</Text>
            <Text style={{textAlign:'center',fontWeight:'900',fontSize:20,color:'#423F3E'}}>
            {date.toDateString()}</Text>
        
          
        <InputList fun={addgoals} />
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
            
            return  <ListItem min={date.getMinutes()} hrs={date.getHours()} index={itemdata.index+=1} item={itemdata.item.text} delet={del} />;

        
           }}
           keyExtractor={(item, index) => {
            index++;
            return item.id=index;
          }}/>

           </View>
           
           <View style={{flex:1,flexDirection:'column'}}>
           <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
       <Image source={{uri: 'https://www.mywebtuts.com/upload/blog/react-native-flatlist-onpress.png'}}
       style={{width: 400, height: 400}} />
           </View>

           
        </View>
    )
}

