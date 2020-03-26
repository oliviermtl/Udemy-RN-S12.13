import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const BlogPostForm = ({navigation, onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title={'Save Blog Post'}
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {title: '', content: ''},
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    backgroundColor: '#dfdfdf',
    marginBottom: 5,
  },
});
export default BlogPostForm;
