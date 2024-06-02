// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.columnContainer}>
      <View style={styles.column1}>
        <Text style={styles.HelloDevs}>Hello, Devs</Text>
        <Text style={styles.nooftasks}>14 tasks today</Text>
      </View>
      <View style={styles.column2}>
        <Text> </Text>
      </View>
      <View style={styles.column3}>
        <Text>
          <Image source={require('../assets/person.png')} style={styles.user} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  HelloDevs: {
    fontSize: 30,
    fontFamily: 'Lato',
    fontWeight: '700',
    color: '#000',
  },
  column1: {
    flex: 3,
  },
  column2: {
    flex: 2,
  },
  column3: {
    flex: 1,
  },
  user: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});

export default Header;