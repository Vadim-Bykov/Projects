import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {uuid} from 'uuidv4';
import TodoList from './TodoList';

const Todo = () => {
  const [todoItems, setTodoItems] = useState([
    {id: 1, title: 'Task 1', isComplete: false},
    {id: 2, title: 'Task 2', isComplete: true},
  ]);
  const [text, setText] = useState('');

  const changeText = text => setText(text);

  const addTodoItem = () => {
    if (text.length) {
      setTodoItems([
        ...todoItems,
        {
          id: Math.random(),
          title: `${text} ${todoItems.length + 1}`,
          isComplete: false,
        },
      ]);
    }
    setText('');
  };

  const completeTodoItem = id => {
    // console.log(id);
    setTodoItems(
      todoItems.map(todoItem =>
        todoItem.id === id
          ? {...todoItem, isComplete: !todoItem.isComplete}
          : todoItem,
      ),
    );
  };

  const removeTodoItem = id => {
    setTodoItems(todoItems.filter(todoItem => todoItem.id !== id));
  };

  return (
    <>
      <TodoList
        todoItems={todoItems}
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
      />
      <TextInput
        style={styles.textInput}
        value={text}
        placeholder="Add task"
        onChangeText={changeText}
        onSubmitEditing={addTodoItem}
      />
    </>
  );
};

export default Todo;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    //  paddingBottom: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
