import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);
  const [text, setText] = useState('hello world ');
  const changeText = () => {
    setText('Hello Fadil');
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://dummyjson.com/users`,
    }).then(response => setData(response.data));
  }, []);

  return (
    <View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          padding: 20,
          gap: 20,
          display: 'flex',
          alignItems: 'center',
        }}>
        {data?.users.map(val => (
          <Text key={val.id}>{val.firstName}</Text>
        ))}
      </View>
    </View>
  );
};

export default App;
