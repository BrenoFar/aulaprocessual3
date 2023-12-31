import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Counter from './components/Counter';

export default function App() {
  return (
    <SafeAreaView style={styles.container}> // 
      <StatusBar style="light" backgroundColor='#AD6200' />
      <View>
        <Counter/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC300',

  },
});
