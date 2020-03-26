import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Blogs'));
      }}
    />
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
