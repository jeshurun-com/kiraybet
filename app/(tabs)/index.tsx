import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import SearchButton from "@/components/ui/HomeSearchButton";
export default function Index() {
  return (
    <View style={styles.container}>
      <SearchButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 42,
  },
});
