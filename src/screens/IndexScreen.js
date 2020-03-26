import React, {useContext} from 'react';
import {
  Text,
  FlatList,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return (
    <>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => JSON.stringify(blogPost.id)}
        renderItem={({item}) => {
          return (
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
