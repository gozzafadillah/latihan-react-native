/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="input nama"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="input kelas"
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
          <Button title="input data" />
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

export default Register;
