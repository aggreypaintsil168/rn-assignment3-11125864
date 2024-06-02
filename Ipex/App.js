// App.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import Categories from './Components/Categories';
import OngoingTask from './Components/OngoingTask';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Header />
          <Categories searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <OngoingTask />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 0,
  },
});