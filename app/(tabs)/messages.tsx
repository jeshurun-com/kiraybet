import { Text, View, StyleSheet } from "react-native";

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
