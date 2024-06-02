// Categories.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const Categories = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <View style={styles.Searchlane}>
        <View style={styles.SearchField}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
        <View style={styles.VectorView}>
          <Image source={require('../assets/Vector.png')} style={styles.Vector} />
        </View>
      </View>
      <View style={styles.CategoriesText}>
        <Text style={styles.categories}>Categories</Text>
      </View>
      <View style={styles.Categorieslayout}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.CategoryView}>
            
          </View>
          
          <View style={styles.CategoryView}>
            <Text>Study</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/WorkingOnline.png')} style={styles.Vector} />
          </View>
          
          <View style={styles.CategoryView}>
            <Text>Study</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/WorkingTask.png')} style={styles.Vector} />
          </View>
          
          <View style={styles.CategoryView}>
            <Text>Study</Text>
            <Text>10 Tasks</Text>
            <Image source={require('../assets/WeThree.png')} style={styles.Vector} />
          </View>
          
          <View style={styles.CategoryView}>
            <Text>Study</Text>
            <Text>10 Tasks</Text>
            <Image source={require('../assets/Around.png')} style={styles.Vector} />
          </View>
          
          <View style={styles.CategoryView}>
            <Text>Exercise</Text>
            <Text>8 Tasks</Text>
            <Image source={require('../assets/Studies.png')} style={styles.Vector} />
          </View>
    
          <View style={styles.CategoryView}>
            <Text>Study</Text>
            <Text>6 Tasks</Text>
            <Image source={require('../assets/Time.png')} style={styles.Vector} />
          </View>
          
          <View style={styles.CategoryView}>
            <Text>Study</Text>
            <Text>4 Tasks</Text>
            <Image source={require('../assets/Together.png')} style={styles.Vector} />
          </View>
          
          <View style={styles.CategoryView}>
            <Text>Exercise</Text>
            <Text>2 Tasks</Text>
            <Image source={require('../assets/Exercise.png')} style={styles.Vector} />
          </View>
           

        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Searchlane: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  searchInput: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    width: '100%',
  },
  SearchField: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  VectorView: {
    borderRadius: 15,
    backgroundColor: '#F0522F',
    padding: 10,
    marginLeft: 22,
    marginRight: 19,
  },
  categories: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'right',
  },
  CategoriesText: {
    alignSelf: 'right',
    marginLeft: 15,
    marginTop: 30,
  },
  CategoryView: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  Categorieslayout: {
    flexDirection: 'row',
  },
  scrollView: {
    marginHorizontal: 0,
  },
  Vector: {
    
  },
});

export default Categories;