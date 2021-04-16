import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// SafeAreaView Для ios, для android + paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //для Android
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text>1</Text>
      </View>
      <View style={[styles.item, styles.item2]}>
        <Text>2</Text>
      </View>
      <View style={styles.item}>
        <Text>3</Text>
        <View style={styles.item33}>
          <Text style={styles.text}>
            3-3
            <Text>3-3-3</Text>
          </Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text>4</Text>
        <View style={styles.item44}>
          <Text>4-4</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text>5</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //для Android
  },
  item: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffeead',
    borderBottomWidth: StyleSheet.hairlineWidth, // тонкая линия
  },
  item2: {
    backgroundColor: '#d95241',
    transform: [{translateX: 150}, {rotateZ: '0.8rad'}],
  },
  item33: {
    backgroundColor: '#293462',
    ...StyleSheet.absoluteFill, // поверх блока родителя
  },
  item44: {
    position: 'absolute',
    ...Platform.select({
      ios: {top: 0, left: 0},
      android: {top: 0, right: 0},
      web: {
        bottom: 0,
        left: 0,
      },
    }),
  },
  text: {
    color: '#fff',
  },
});

// rnstyle
// rnfes
