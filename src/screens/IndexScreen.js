import React, {useContext} from 'react';
import {Text, FlatList, Button, View, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.delete}>X</Text>
            </View>
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
