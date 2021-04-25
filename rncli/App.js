import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, TextInput, View, Text} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const App = () => {
  const [todos, setTodos] = useState([]);
  //첫 번째 요소는 상태값으로, 
  //함수 호출 시 입력한 인수가 초기값으로 사용됩니다

  //두 번째 요소는 상태값을 변경할 수 있는 함수입니다.



  const addTodo = text => {
    setTodos([
      ...todos,
      {id:Math.random().toString(), textValue: text, checked: false},
  
    ]);
  };

  //event까지 받아줘야 해서 이중 arrow 함수 씀 
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // onRemove랑 같은건데 풀어써봄
  const newRemove = function(id){
    return function(e){
      return setTodos(todos.filter(todo => todo.id !== id));
    };
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo => 
        //true면 false로, false면 true로 
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo}/>
        {/* <ScrollView> */}
        <TodoList todos={todos} onRemove={newRemove} onToggle={ onToggle} />
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;