import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList,Image,Pressable,ImageBackground ,AsyncStorage} from 'react-native';
import ListItem from './components/ListItem';
import InputList from './components/InputList';


export default function App() {
    const [goalsarray, setgoalsarray] = useState([]);












    var img;
    var txt;
if(goalsarray != ''){
  img = true;
  txt = true;
  
}else {
  img = false;
  txt = false;
  
}


    function addgoals(enteredGoalText) {
        setgoalsarray((currentgoals) => [
            ...currentgoals, { text: enteredGoalText },
        ])
        change()
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


    const[visiblity,setvisiblity] = useState(false)
    function change(){
      if (visiblity == true) {
          setvisiblity(false)
      }
      else{
      setvisiblity(true)

      }
    }
    var image = img ?null:  <Image source={{uri: 'https://img.icons8.com/pastel-glyph/256/empty-box.png'}}
    style={{width: 300, height: 300,marginHorizontal:40}} />  ;

    var text = txt ?null: <Text style={{textAlign:'center',fontSize:40,fontWeight:'900',color:'#fff'}} >Empty</Text> ;

    return(
        <View style={{paddingHorizontal:10,paddingVertical:50,flex:1,backgroundColor:'#A7727D'}} >
          <View style={{marginBottom:10,borderBottomColor:'#cccccccc',borderBottomWidth:1,paddingBottom:20}}>
            <Text style={{color:'#fff',fontWeight:'600',fontSize:50,textAlign:'center',marginVertical:10,fontFamily:'serif'}}>TO-DO LIST</Text>
            <Text style={{textAlign:'center',fontWeight:'900',fontSize:20,color:'#423F3E'}}>
            {date.toDateString()}</Text>
            </View>
        <View >
        {image } 

          {text}
        </View>
         
        <InputList fun={addgoals} visiblity={visiblity} fn={change} />
           <View style={{flex:5}}>
           {/* <ScrollView>
           {goalsarray.map((goal,index)=>
           <View style={{borderRadius:'25%',margin:5}} onPress={this.delet} key={index+=1 }>
           <Text style={{fontSize: 20,color:'#ffffff',fontWeight:'300'}}>{index+=1 }. { goal}
           </Text>
           </View>
           )}
           </ScrollView> */}

           <FlatList data={goalsarray}    renderItem={(itemdata)=>{
            
            return  <ListItem   index={itemdata.index+=1} item={itemdata.item.text} delet={del} />;

        
           }}
           keyExtractor={(item, index) => {
            index++;
            return item.id=index;
          }}/>

           </View>
         
           <Pressable style={{backgroundColor:'#fff',borderRadius:100, width:'20%',height:'10%',position:'absolute',right:'40%',bottom:10}}  onPress={change}  android_ripple={{color:'#ffffff8f'}}  >
            <Text style={{fontSize:50,textAlign:'center',color:'#A7727D',fontWeight:'400'}}>+</Text>
           </Pressable>
          
           {/* <View style={{flex:1,flexDirection:'column'}}>
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
           </View> */}

           
        </View>
    )
}

const styles = StyleSheet.create({

  pressedItem:{
      opacity:0.5,
  }
   })