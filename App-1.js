import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.dummytext} >Hello World</Text>

      </View>
     <Text style={styles.dummytext}>hello guys</Text>
     <View></View>
     <Button title='click me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummytext:{
    color:'#fff',margin:10,fontSize:50, padding:15 ,borderRadius:25, backgroundColor: '#000',
  }
});
