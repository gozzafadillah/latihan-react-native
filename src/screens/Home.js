/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as Keychain from 'react-native-keychain';

const Home = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await Keychain.resetGenericPassword();
    navigation('Login');
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => handleLogout()} />
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

export default Home;
