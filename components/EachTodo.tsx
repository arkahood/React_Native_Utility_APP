import React from 'react';
import {Text, View} from 'react-native';

const EachTodo = ({route}: any): any => {
  const {title, des} = route.params;
  return (
    <View style={{display: 'flex', padding: 5}}>
      <Text
        style={{
          fontSize: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {title}
      </Text>
      <Text>{des}</Text>
    </View>
  );
};

export default EachTodo;
