import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';



var index = ["","","","","","","","",""];

export default function App() {
  const [getText, setText] = useState("X")
  const [gettry, settry]= useState(1)
  const [getturn, setturn]= useState(1)
  const [getwinner, setwinner]= useState("")
  const [modalVisible, setModalVisible] = useState(false);

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
if((index[0]=="X" && index[1]=="X" && index[2]=="X") || (index[0]=="X" && index[3]=="X" && index[6]=="X") || (index[0]=="X" && index[4]=="X" && index[8]=="X" ) || (index[1]=="X" && index[4]=="X" && index[7]=="X" ) || (index[2]=="X" && index[5]=="X" && index[8]=="X" ) || (index[3]=="X" && index[4]=="X" && index[5]=="X" ) || (index[6]=="X" && index[7]=="X" && index[8]=="X" ) || (index[2]=="X" && index[4]=="X" && index[6]=="X" )){
setwinner("ALI BHAI won congrats!!!");
setModalVisible(true);
}
else if((index[0]=="0" && index[1]=="0" && index[2]=="0") || (index[0]=="0" && index[3]=="0" && index[6]=="0") || (index[0]=="0" && index[4]=="0" && index[8]=="0" ) || (index[1]=="0" && index[4]=="0" && index[7]=="0" ) || (index[2]=="0" && index[5]=="0" && index[8]=="0" ) || (index[3]=="0" && index[4]=="0" && index[5]=="0" ) || (index[6]=="0" && index[7]=="0" && index[8]=="0" ) || (index[2]=="0" && index[4]=="0" && index[6]=="0" )){
  setwinner("OMER BHAI won congrats!!!");
  setModalVisible(true);
}
else{
  var count=0;
  for (let i = 0; i < 9; i++) {
    if ((index[i] == "X" || index[i] == "0") ){
    count++;   
    }
  }if(count==9){
    setwinner("DRAW");
    setModalVisible(true);
  }
  else{setwinner("");
}  
}

  


   
  }


  return (
    <View style={styles.container}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text  style={{ fontSize: 20, fontWeight: 'bold', margin:20,color: 'red', justifyContent: 'center', alignItems: 'center' }}>{getwinner}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible),index=["","","","","","","","",""],setwinner("")}}
            >
              <Text style={styles.textStyle}>PLAY AGAIN!!!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
<View style={styles.play}>
        <Text style={{ fontSize: 20, marginRight: 25,color:'white'}}>
          <Text  style={{marginRight: 25}}>ALI BHAI: X</Text>
          <Text>OMER BHAI: O</Text>
        </Text>
    
        
      </View>
      <View><Text style={{ fontSize: 20,color:'white'}}>TURN:<Text style={{ fontSize: 20, fontWeight: 'bold', margin:20}}>PLAYER {getturn}</Text></Text></View>
      
      <View >
        <Text  style={{ fontSize: 20, fontWeight: 'bold', margin:20,color:'white'}}>TIC TAC TOE WALI GAME</Text>
        <Text style={{color:'white'}}>----------------------------------------------------</Text>
        {/* <Text  style={{ fontSize: 20, fontWeight: 'bold', margin:20,color: 'red', justifyContent: 'center', alignItems: 'center' }}>{getwinner}</Text> */}
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
    backgroundColor: 'black',
    alignItems: 'center',
   
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "red",
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  button: {
    borderRadius: 100,
    padding: 5,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
 
  
});
