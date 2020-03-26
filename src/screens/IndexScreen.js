import React, {useContext} from 'react';
import {Text, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </>
  );
};

export default IndexScreen;
