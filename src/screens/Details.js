/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

const Details = ({route}) => {
  const navigation = useNavigation();
  const {nama, nim, kelas} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Hello {nama}, saya kelas {kelas} nim {nim} salam kenal.
      </Text>
      <Button title="go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Details;
