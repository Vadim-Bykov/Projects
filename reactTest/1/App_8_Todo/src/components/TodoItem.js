import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TodoItem = ({
  title = 'No name task',
  isComplete = false,
  complete = () => {},
  remove = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={isComplete && styles.textComplete}>{title}</Text>
        <Image
          style={styles.tinyLogo}
          // source={{
          //   uri:
          //     'https://pbs.twimg.com/profile_images/875749462957670400/T0lwiBK8_400x400.jpg',
          // }}
          source={require('../assets/logo.png')}
        />
      </View>

      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSuccess]}
          onPress={complete}>
          {isComplete ? (
            <Text style={styles.buttonText}>Отменить</Text>
          ) : (
            <Text style={styles.buttonText}>Выполнить</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonDanger]}
          onPress={remove}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textComplete: {
    textDecorationLine: 'line-through',
  },
  button: {
    minWidth: 100,
    margin: 3,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#007bff',
  },
  buttonSuccess: {
    backgroundColor: '#28a745',
  },
  buttonDanger: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    //  textAlign: 'center',
    alignSelf: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
