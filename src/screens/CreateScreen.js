import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);
  return (
    <View style={{margin: 8}}>
      <Text>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title={'Add Blog Post'}
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Blogs');
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    backgroundColor: '#dfdfdf',
    marginBottom: 5,
  },
});
export default CreateScreen;
