/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Login} from '../store/reducer/users/UsersSlicer';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const login = (dataEmail, dataPassword) => {
    dispatch(Login({dataEmail, dataPassword}));
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="input email"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="input password"
        value={password}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          justifyContent: 'center',
        }}>
        <View style={{padding: 10, flex: 1, marginRight: 10}}>
          <Button title="input data" onPress={() => login(email, password)} />
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
});

export default LoginScreen;
