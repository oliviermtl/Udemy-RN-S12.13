import React, {useContext} from 'react';
import {Text, FlatList, Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = ({params}) => {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={data.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </>
  );
};

export default IndexScreen;
