

import { StyleSheet, TextInput, View, Button,Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


const MainScreen = ({taskList}) => {
  
    return (
      <View style = {styles.container}>
        
     
        <View style = {styles.view1}>
          <TextInput
            maxLength={30} 
            style = {styles.input} />
          <TouchableOpacity style = {styles.button}> 
              <Text style = {[styles.textButton]}>AGREGAR TAREA</Text>
          </TouchableOpacity>  
        </View>

        <View style = {styles.view2}>
          {taskList.map(item => {
            return (
              <View style = {styles.task} key = {item.id}>
                  <Text style = {styles.task}>{item.task}</Text>
              </View>
            )
          })}
          
        </View> 

        
      </View>
    )
  }
  
  export default MainScreen
  
 const styles =StyleSheet.create({
    container: 
      {
        flex: 1,
       
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        
      },
    view1:
      {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
        width: '100%'
      },
    view2:
      {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 4,
        backgroundColor: 'blue',
        width: '100%',
        paddingVertical:15
      },
    input:
      {
        borderColor:'grey',
        backgroundColor:'white',
        borderWidth:2,
        height: 30,
        width: 300,
        margin:8,
        
        
        
        
      },
    button:
      {
        paddingHorizontal:10,
        width:150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 30,
        width: 150,
        backgroundColor: 'skyblue',
        borderColor:'grey',
        
      },
    textButton:
      {
        
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
      },

    task:
      {
        
        width:'80%',
        backgroundColor: 'azure',
        padding: 10,
        
      }

 })