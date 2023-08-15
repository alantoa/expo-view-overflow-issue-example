import { StyleSheet, Text, View } from 'react-native';

import * as ExpoOverflowViewIssue from 'expo-overflow-view-issue';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoOverflowViewIssue.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
