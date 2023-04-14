import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import EachCard from './EachCard';

const Todo = ({navigation}: any) => {
  const [data, setData] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState([]);

  const increaseIt = () => {
    if (title.length === 0) console.warn('Plase Enter Title');
    else if (description.length === 0) console.warn('Please Enter Description');
    else {
      setData(oldState => oldState + 1);
      setTodo((oldData): any => {
        return [...oldData, {id: data, title: title, description: description}];
      });
      setTitle('');
      setDescription('');
    }
  };
  const handleDelete = (id: any) => {
    let myArray = todo.filter((obj: any) => {
      return obj.id !== id;
    });
    setTodo(myArray);
    setData((olddata: any) => olddata - 1);
  };
  return (
    <View style={style.Container}>
      <Text style={{fontSize: 20, padding: 10}}>
        Total Reamaining TODOs : {data}
      </Text>
      <TextInput
        style={style.TextInput}
        placeholder="Title"
        onChangeText={e => setTitle(e)}
        value={title}
      />
      <TextInput
        style={style.TextInput}
        placeholder="Description"
        onChangeText={e => setDescription(e)}
        value={description}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity onPress={increaseIt}>
        <View
          style={{
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            height: 35,
            margin: 10,
          }}>
          <Text style={{color: 'white'}}>ADD</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={todo}
        renderItem={({item}: any) => (
          <EachCard
            title={item.title}
            description={item.description}
            handleDelete={(id: any) => handleDelete(id)}
            id={item.id}
            navigation={navigation}
          />
        )}
        keyExtractor={(i: any) => i.id}
        scrollEnabled={true}
      />
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TextInput: {
    backgroundColor: '#eaeaea',
    margin: 10,
    borderRadius: 5,
  },
  TextInputDes: {
    backgroundColor: '#eaeaea',
    margin: 10,
    borderRadius: 5,
    height: 800,
  },
  Button: {
    margin: 10,
  },
});

export default Todo;
