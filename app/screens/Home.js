import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quarto de Cultivo</Text>
        <Text>Seja bem-vindo, fazendeiro(a)!</Text>
      </View>
    );
  }
}
