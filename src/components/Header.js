import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native"
import Feather from 'react-native-vector-icons/Feather';

export default function Header({onSearchPress}) {
    return(
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.iconBottom}>
            <Feather name="menu" size={30} color="#fff" />
          </TouchableOpacity>

          <View style={styles.logoWrapper}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.imagem} 
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity style={styles.iconBottom} onPress={onSearchPress}>
            <Feather name="search" size={25} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#1C1C1C',
    flexDirection: 'row',
    alignItems: 'flex-end',        // Alinha tudo pela base
    justifyContent: 'space-between',
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  imagem: {
    height: 55,
    alignSelf: 'center',
  },
  iconBottom: {
    paddingBottom: 5,
  },
})