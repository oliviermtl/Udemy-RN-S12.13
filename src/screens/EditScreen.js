import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({route, navigation}) => {
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(thisPost => thisPost.id === route.params.id);

  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(route.params.id, title, content, () => navigation.pop());
      }}
    />
  );
};
const styles = StyleSheet.create({});
export default EditScreen;
