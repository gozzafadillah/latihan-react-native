/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Users = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://dummyjson.com/users',
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

export default Users;
