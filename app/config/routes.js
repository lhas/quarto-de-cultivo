import React from 'react'
import { View, Text } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from '../screens/Home'

const Router = () => (
  <NativeRouter>
    <View>
      <Route exact path="/" component={Home} />
    </View>
  </NativeRouter>
)

export default Router
