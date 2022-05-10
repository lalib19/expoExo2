import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <View style={styles.container2}>
      </View>
      <View style={styles.container3}>
      </View>
      <View style={styles.container4}>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  container2: {
    flex: 3,
    backgroundColor: "green",
  },
  container3: {
    flex: 2,
    backgroundColor: 'red',
  },
  container4: {
    flex: 1,
    backgroundColor: 'blue',
  },

});
