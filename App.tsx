import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {getFcmToken, registerListenerWithFCM} from './src/utils/fcmHelper';

const App = () => {
  useEffect(() => {
    getFcmToken();
  }, []);

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text_bold}>Push Notification In Recat Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_bold: {
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
