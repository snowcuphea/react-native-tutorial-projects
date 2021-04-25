// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';


const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
        {/* map()함수를 이용해서 todos에 담긴 아이템을 하나씩 TodoListItem 컴포넌트로 전달 */}
      {todos.map(todo => (
          <TodoListItem {...todo} key={todo.id}
          onRemove={onRemove} onToggle={onToggle}/>
          //리스트에 아이템을 출력할 때에는 각 아이템의 고유 번호를 key 값으로
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;