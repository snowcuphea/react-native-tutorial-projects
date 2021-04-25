// components/TodoInsert.js
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';


const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');
  //newTodoItem는 새로 입력한 텍스트의 상태를 나타내고,
  // setNewTodoItem은 newTodoItem을 업데이트하는 함수


  //실시간으로 사용자가 입력한 텍스트 값의 변화를
  //관리하기 위한 핸들러 함수
  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };
  

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    //사용자가 입력한 텍스트 값을 전달받아 목목에 추가

    setNewTodoItem('');//입력창 공백으로 초기화
  }
    
  return (
    <View style={styles.inputContainer}>
      
      
      <TextInput
        style={styles.input}
        placeholder="Add an item!!!!"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'}
        onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;