import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import data from '../../navigationReactNative/Components/dummyData';

const ContactList = () => {
  return (
    <ScrollView>
      {data.map((item, index) => (
        <View key={index} style={{ margin: 10 }}>
          <Text>UID: {item.uid}</Text>
          <Text>Name: {item.name}</Text>
          <Text>Father's Name: {item.fname}</Text>
          <Text>Mother's Name: {item.mname}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ContactList;
