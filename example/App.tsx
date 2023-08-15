import { StyleSheet, Text, View } from "react-native";

import { ExpoOverflowViewIssueView } from "expo-overflow-view-issue";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native View</Text>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#000",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: "red",
            position: "absolute",
            right: -20,
            top: -10,
          }}
        ></View>
      </View>
      <Text>Expo View</Text>
      <ExpoOverflowViewIssueView
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#000",
          marginVertical: 20,
        }}
        name="ExpoOverflowViewIssueView"
      >
        <View
          style={{
            width: 40,
            height: 20,
            backgroundColor: "red",
            position: "absolute",
            right: -20,
            top: -10,
          }}
        />
      </ExpoOverflowViewIssueView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
