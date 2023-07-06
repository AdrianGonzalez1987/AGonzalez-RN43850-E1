

import { StyleSheet, TextInput, View,Text, TouchableOpacity, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import { FlatList } from 'react-native-web';


const renderItemTask = ({item}) => {
  return (
      <View style={styles.task} key={item.id}>
          <Text style={styles.taskText}>{item.task}</Text>
      </View>
  )
}

const MainScreen = ({taskList}) => {

    const [list,  setList] = useState(taskList)
    const [input, setInput] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    console.log(input);
    ///se usa un spred operator (list) y onaddTask con onPress para llamar a la lista y leer/agregar el input
    const onAddTask = () => { 
      console.log("se agrego una tarea"); 
      setList([
        ...list,
        {
            id: list.length + 1,
            task: input,
            completed: false
        }
      ])
    }
    console.log(list); 

    return (
      <View style = {styles.container}>
              <View style = {styles.view1}>
                    <TextInput
                      placeholder=' Tarea o Recordatorio'
                      maxLength={23}
                      style = {styles.input} 
                      value={input}
                      onChangeText = {setInput}
                    />
    {//usamos onPress que es como el onClick
    }
                    <TouchableOpacity style = {styles.button} onPress={onAddTask}> 
                        <Text style = {styles.textButton}>AGREGAR</Text>
                    </TouchableOpacity>  
              </View>

              <View style = {styles.view2}>
                {//con FlatList se usa para navegar sin usar scrol
                }
                    <FlatList
                          data = {list}
                          keyExtractor = {item => item.id}
                          renderItem= {renderItemTask}
                          
                    />
                    {
                      //list.map(item => { })
                    }
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>

              </View> 

              <Modal
                    lanimationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
              >
                  <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                          <Text style={styles.modalText}>Hello World!</Text>
                          <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                          </Pressable>
                      </View>
                  </View>
              </Modal>


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
        height:"12%",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 30,
        paddingBottom:10,
        gap:20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#d5d2c8',
        width: '100%'
      },
    view2:
      {
        
        backgroundColor: '#9d9e94',
        height:"88%",
        width: '100%',
        flex:4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical:15,
        
      },
    input:
      {
        borderBottomColor:'gray',
        borderBottomWidth:3,
        color:'black',
        fontSize:20,
        width: 200,
        height:25,
        marginBottom:8,
        fontSize:20,
      },
    button:
      {
        paddingHorizontal:10,
        paddingVertical:7,
        justifyContent: 'center',
        //alignItems: 'center',
        //marginTop: 20,
        height: 30,
        width: 95,
        backgroundColor: '#c99e93',
        borderRadius:5,
        borderColor:'grey',
        borderBottomWidth:3,
        borderLeftWidth:3,
        
      },
    textButton:
      {
        
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign:"center",
      },

    task:
      {
        width:290,
        backgroundColor: '#f59d92',
        padding: 10,
        backgroundColor: '#f59d92',
        borderRadius:6,
        borderColor:'#e5b8ad',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        marginBottom: 15,
      },
    taskText: {
        fontSize: 20,
      },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
     shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
    buttonOpen: {
        backgroundColor: '#F194FF',
      },
    buttonClose: {
        backgroundColor: '#2196F3',
      },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

 })