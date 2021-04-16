import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(prev => prev + 1);

  const decr = () => setCount(prev => prev - 1);

  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={decr}>
        <Text style={styles.counterTextButton}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterCount}>{count}</Text>

      <TouchableOpacity onPress={inc}>
        <Text style={styles.counterTextButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const Counter2 = () => {
  // const [count, setCount] = useState(() => {
  //   let random = Math.random();
  //   random = Math.random(random);
  //   return random.toFixed(2);
  // });
  const [count, setCount] = useState(0);

  const inc = () => setCount(prev => prev + 1);

  const decr = () => setCount(prev => prev - 1);

  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={decr}>
        <Text style={styles.counterTextButton}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterCount}>{count}</Text>

      <TouchableOpacity onPress={inc}>
        <Text style={styles.counterTextButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const Counter3 = ({count, decr, inc}) => {
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={decr}>
        <Text style={styles.counterTextButton}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterCount}>{count}</Text>

      <TouchableOpacity onPress={inc}>
        <Text style={styles.counterTextButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(prev => prev + 1);

  const decr = () => setCount(prev => prev - 1);

  return (
    <View style={styles.container}>
      <Counter />
      <Counter2 />
      <Counter3 count={count} inc={inc} decr={decr} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    // paddingHorizontal: 5,
  },
  counter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#005792',
  },
  counterCount: {
    fontSize: 100,
    color: '#f6f6e9',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  counterTextButton: {
    fontSize: 100,
    color: '#13334c',
  },
});

// rnstyle
// rnfes
