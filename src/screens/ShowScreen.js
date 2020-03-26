import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(thisPost => thisPost.id === route.params.id);
  return (
    <View>
      <Text>
        {blogPost.title} {blogPost.id}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ShowScreen;
