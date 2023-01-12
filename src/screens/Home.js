/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetuserHealth} from '../store/reducer/users/UsersSlicer';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetuserHealth());
  }, []);

  const response = useSelector(val => val.user.data.health);

  console.log('response ', response);
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
        Selamat datang {response?.name.toUpperCase()}
      </Text>
      <View style={styles.health}>
        <View style={{paddingRight: 10}}>
          <Text>ID</Text>
          <Text>Name</Text>
          <Text>Gender</Text>
          <Text>Weight Ideal</Text>
          <Text>BMI</Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={{flexDirection: 'row'}}>: {response?.userid}</Text>
          <Text>: {response?.name}</Text>
          <Text>: {response?.gender}</Text>
          <Text>: {response?.weight_ideal}</Text>
          <Text>: {response?.bmi}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    padding: 10,
    marginTop: 50,
  },
  health: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
});

export default Home;
