import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const BurgerMenu = ({toggleMenu}) => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name="forwardburger"
        size={30}
        onPress={toggleMenu}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {marginLeft: 20},
});
