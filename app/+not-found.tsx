import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Link, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native';

export default function notFoundScreen
() {
  return (
   <>
   <Stack.Screen options={{title:"Oops!"}}/>
   <ThemedView style={styles.container}>
    <ThemedText type="title">This screen doesn't exist</ThemedText>
    <Link href="/" style={styles.link}>
    <ThemedText type="Link">Go to home screen</ThemedText>
    </Link>
   </ThemedView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   

  },

  image: {
    width: "100%",
    height: "100%",
    flex:  1,
    justifyContent: "center",
  }, 

  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
   
  },
  })