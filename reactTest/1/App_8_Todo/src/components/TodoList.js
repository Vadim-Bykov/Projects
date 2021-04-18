import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoItem from './TodoItem';

// const todos = [
//   {id: 1, title: 'Task 1', isComplete: false},
//   {id: 2, title: 'Task 2', isComplete: true},
//   {id: 3, title: 'Task 3', isComplete: false},
//   {id: 4, title: 'Task 4', isComplete: false},
//   {id: 5, title: 'Task 5', isComplete: true},
//   {id: 6, title: 'Task 6', isComplete: false},
//   {id: 7, title: 'Task 7', isComplete: false},
//   {id: 8, title: 'Task 8', isComplete: true},
//   {id: 9, title: 'Task 9', isComplete: false},
//   {id: 10, title: 'Task 10', isComplete: false},
// ];

const TodoList = ({todoItems, completeTodoItem, removeTodoItem}) => {
  return (
    <FlatList
      data={todoItems}
      renderItem={({item}) => (
        <TodoItem
          title={item.title}
          isComplete={item.isComplete}
          complete={() => completeTodoItem(item.id)}
          remove={() => removeTodoItem(item.id)}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({});
