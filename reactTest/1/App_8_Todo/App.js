import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Todo from './src/components/Todo';

const App = () => {
  return (
    <>
      {/* <KeyboardAvoidingView behavior="padding" style={todoContainer}> */}
      <Todo />
      {/* </KeyboardAvoidingView> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  todoContainer: {
    flex: 1,
  },
});

// rnstyle
// rnfes
