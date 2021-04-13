import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<View style={styles.play}>
        <Text style={{ fontSize: 20, marginRight: 25}}>
          <Text  style={{marginRight: 25}}>ALI BHAI: X</Text>
          <Text>OMER BHAI: O</Text>
        </Text>
     
        
      </View>
      <View >
        <Text  style={{ fontSize: 20, fontWeight: 'bold', margin:20}}>TIC TAC TOE WALI GAME</Text>
        <Text >----------------------------------------------------</Text>
      </View>
      <View>
        <View style={styles.R1}>
          <Pressable style={styles.buttons} onPress={""}>
            X
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
          0
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
          X
          </Pressable>
        </View>

        <View style={styles.R1}>
          <Pressable style={styles.buttons} onPress={""}>
          0
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
          0
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
          X
          </Pressable>
        </View>

        <View style={styles.R1}>
          <Pressable style={styles.buttons} onPress={""}>
          0
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
          X
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
          0
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
