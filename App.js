import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';



var index = ["","","","","","","","",""];

export default function App() {
  const [getText, setText] = useState("x")
  const [gettry, settry]= useState(1)
  const [getturn, setturn]= useState(1)
  
 
  const buttonClick = (txt) => {
if(index[txt].length<1){ if(gettry % 2 == 0){
  setturn(2);
  setText("x");
  
  index[txt]=getText;
  
  
     }
     else{
      setturn(1);
  setText("0");
  
  index[txt]=getText;
  
     }
     settry(gettry+1);
    }else{
      alert("already pressed sheeda jii!!");
    }
  
  }
  
  const check = ()=>{


  }
  return (
    <View style={styles.container}>
<View style={styles.play}>
        <Text style={{ fontSize: 20, marginRight: 25}}>
          <Text  style={{marginRight: 25}}>ALI BHAI: X</Text>
          <Text>OMER BHAI: O</Text>
        </Text>
    
        
      </View>
      <View><Text>TURN:PLAYER {getturn}</Text></View>
      
      <View >
        <Text  style={{ fontSize: 20, fontWeight: 'bold', margin:20}}>TIC TAC TOE WALI GAME</Text>
        <Text >----------------------------------------------------</Text>
      </View>
      <View>
        <View style={styles.R1}>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(0)}}>
            {index[0]}
          </Pressable>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(1)}}>
          {index[1]}
          </Pressable>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(2)}}>
          {index[2]}
          </Pressable>
        </View>

        <View style={styles.R1}>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(3)}}>
          {index[3]}
          </Pressable>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(4)}}>
          {index[4]}
          </Pressable>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(5)}}>
          {index[5]}
          </Pressable>
        </View>

        <View style={styles.R1}>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(6)}}>
          {index[6]}
          </Pressable>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(7)}}>
          {index[7]}
          </Pressable>
          <Pressable style={styles.buttons} onPress={()=>{buttonClick(8)}}>
          {index[8]}
          </Pressable>
        </View>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  buttons: {
    fontSize: 35,
     color: 'white',
    height: 50,
    width: 50,
    margin: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  play:{
    
    margin: 55,
    flexDirection: 'row',
  },
  R1: {
    flexDirection: 'row',
  },
 
  
});
