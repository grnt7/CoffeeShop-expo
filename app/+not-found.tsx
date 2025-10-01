import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function notFoundScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This screen doesn't exist</ThemedText>
       <Link href="/">
        <ThemedText type="link" style={styles.link}>Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF",
  },
})