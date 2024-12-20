import React from "react";
import { StyleSheet, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const SearchButton = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView></SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 58,
    width: 270,
    margin: 12,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 100,
    textAlign: "left",
    fontSize: 10,
  },
});

export default SearchButton;
