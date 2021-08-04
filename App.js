import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <TouchableOpacity> 
          <FontAwesome5 name="truck-moving" size={42} color="black" style={styles.btnMain} />
          <Text style={styles.fontText}>Carga</Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <AntDesign name="user" size={42} color="black" style={styles.btnMain}/>
            <Text style={styles.fontText}>Usuários</Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <FontAwesome5 name="database" size={42} color="black" style={styles.btnMain}/>
            <Text style={styles.fontText}>Carga PDV</Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <FontAwesome5 name="book" size={42} color="black" style={styles.btnMain} />
            <Text style={styles.fontText}>Relatórios</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="calculator" size={42} color="black" style={styles.btnMain} />
            <Text style={styles.fontText}>Calculadora</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <FontAwesome5 name="camera" size={42} color="black" style={styles.btnMain} />
            <Text style={styles.fontText}>Leitor</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <FontAwesome5 name="cart-arrow-down" size={42} color="black" style={styles.btnMain} />
            <Text style={styles.fontText}>Compras</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <FontAwesome5 name="file-signature" size={42} color="black" style={styles.btnMain} />
            <Text style={styles.fontText}>Pedidos</Text>
          </TouchableOpacity>
        
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
    alignContent: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    flexWrap:  'wrap'
    //margin: 10
  },

  btnHome:{
    //alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    padding: 100,
    justifyContent: 'space-between'
  },

  btnMain:{
    margin: 15
  },

  fontText:{
    textAlign: 'center',
    fontSize: 11
  }
});
