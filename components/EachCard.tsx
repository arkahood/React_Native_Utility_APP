import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, 
Text, 
TouchableOpacity, 
View, 
Animated, 
PanResponder} from 'react-native';


const EachCard = ({title, description, handleDelete, id, navigation}: any) => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panHandler = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        // dy: pan.y,
      },
      
    ],
    {useNativeDriver: false}),
    onPanResponderRelease: (event, gesture) => {
      handleDelete(id);
            
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  })


  const [des, setDes] = useState(description);
  
  useEffect(() => {
    if (des.length > 10) {
    setDes(des.substring(0, 10) + ' ...');
    }
  },[]);
  

  const expand = () => {
    navigation.navigate('Expand', {
      title: title,
      des: description,
    });
  };
  return (
    <Animated.View style={[style.Container, pan.getLayout()]} {...panHandler.panHandlers}>
      <Text style={style.Header}>{title}</Text>
      <Text style={style.Body}>{description}</Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => expand()}>
          <View style={style.Button}>
            <Text style={{color: 'white'}}>Full Detail</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(id)}>
          <View style={style.Button}>
            <Text style={{color: 'white'}}>Swipe To Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  Container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  Header: {
    fontSize: 30,
  },
  Body: {
    fontSize: 15,
  },
  Button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default EachCard;
