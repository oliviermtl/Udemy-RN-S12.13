import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route, navigation}) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() =>
          navigation.navigate('Edit', {
            id: route.params.id,
          })
        }
        title="Edit"
        color="purple"
      />
    ),
  });
  const {state} = useContext(Context);
  const blogPost = state.find(thisPost => thisPost.id === route.params.id);
  return (
    <View>
      <Text>
        {blogPost.title} id:{blogPost.id}
      </Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ShowScreen;
