import {DrawerActions} from '@react-navigation/routers';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const BurgerMenu = ({navigation}) => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name="forwardburger"
        size={30}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {marginLeft: 20},
});
