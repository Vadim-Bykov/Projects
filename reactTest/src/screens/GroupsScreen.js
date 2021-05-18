import React, {useState} from 'react';
import {Button, NativeModules, StyleSheet, Text, View} from 'react-native';
import {BurgerMenu} from '../common/BurgerMenu';

const {BatteryLevel, CalendarModule} = NativeModules;

export const GroupsScreen = ({navigation}) => {
  const toggleMenu = () => navigation.toggleDrawer();

  const [level, setLevel] = useState(0);
  const [event, setEvent] = useState('No events');

  return (
    <>
      <BurgerMenu toggleMenu={toggleMenu} />
      <View style={styles.container}>
        <Text>{level}%</Text>
        <Text>{event}</Text>
        <Button
          title="Get BatteryLevel"
          onPress={() => {
            BatteryLevel.getLevel(batteryLevel =>
              setLevel(batteryLevel.toFixed(2) * 100),
            );

            CalendarModule.createCalendarEvent('Party', 'My House', id =>
              setEvent(`New event with id ${id}`),
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
