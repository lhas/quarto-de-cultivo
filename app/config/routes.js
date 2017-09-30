import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from '../screens/Home'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const Router = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Home} />
    </View>
  </NativeRouter>
)

export default Router
