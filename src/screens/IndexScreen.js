import React, {useContext, useEffect} from 'react';
import {Text, FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });
  }, []);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={blogPost => JSON.stringify(blogPost.id)}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Post', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}>
                  <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  delete: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    paddingVertical: 10,

    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
  },
});
export default IndexScreen;
