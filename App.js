import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';



var index = ["","","","","","","","",""];

export default function App() {
  const [getText, setText] = useState("X")
  const [gettry, settry]= useState(1)
  const [getturn, setturn]= useState(1)
  const [getwinner, setwinner]= useState("")

  const buttonClick = (txt) => {
    
if(index[txt].length<1){ if(gettry % 2 == 0){
  setturn(1);
  setText("X");
  
  index[txt]=getText;
  

     }
     else{
      setturn(2);
  setText("0");
  
  index[txt]=getText;

     }
     check();
    
     
     settry(gettry+1);
    }else{
      alert("already pressed sheeda jii!!");
    }
  
  }
  
  const check = ()=>{
    
if((index[0]=="X" && index[1]=="X" && index[2]=="X") || (index[0]=="X" && index[3]=="X" && index[6]=="X") || (index[0]=="X" && index[4]=="X" && index[8]=="X" ) || (index[1]=="X" && index[4]=="X" && index[7]=="X" ) || (index[2]=="X" && index[5]=="X" && index[8]=="X" ) || (index[3]=="X" && index[4]=="X" && index[5]=="X" ) ||(index[6]=="X" && index[7]=="X" && index[8]=="X" ) || (index[2]=="X" && index[4]=="X" && index[6]=="X" )){
setwinner("ALI BHAI won congrats!!!");
}
else if((index[0]=="0" && index[1]=="0" && index[2]=="0") || (index[0]=="0" && index[3]=="0" && index[6]=="0") || (index[0]=="0" && index[4]=="0" && index[8]=="0" ) || (index[1]=="0" && index[4]=="0" && index[7]=="0" ) || (index[2]=="0" && index[5]=="0" && index[8]=="0" ) || (index[3]=="0" && index[4]=="X" && index[5]=="0" ) ||(index[6]=="0" && index[7]=="0" && index[8]=="0" ) || (index[2]=="0" && index[4]=="0" && index[6]=="0" )){
  setwinner("OMER BHAI won congrats!!!");
}

else{
  for (let i = 0; i < index.length; i++) {
    if (index[i].length < 1) {
      setwinner("");
    }else{
      setwinner("DRAW");
    }
 
  
}

  
  
}
   
  }


  return (
    <View style={styles.container}>
<View style={styles.play}>
        <Text style={{ fontSize: 20, marginRight: 25}}>
          <Text  style={{marginRight: 25}}>ALI BHAI: X</Text>
          <Text>OMER BHAI: O</Text>
        </Text>
    
        
      </View>
      <View><Text style={{ fontSize: 20}}>TURN:<Text style={{ fontSize: 20, fontWeight: 'bold', margin:20}}>PLAYER {getturn}</Text></Text></View>
      
      <View >
        <Text  style={{ fontSize: 20, fontWeight: 'bold', margin:20}}>TIC TAC TOE WALI GAME</Text>
        <Text >----------------------------------------------------</Text>
        <Text  style={{ fontSize: 20, fontWeight: 'bold', margin:20,color: 'red', justifyContent: 'center', alignItems: 'center' }}>{getwinner}</Text>
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
  }
 
  
});
