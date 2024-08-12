import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VIEWED_ONBOARDING } from 'lib/async-storage';

export default function HomeScreen({ onReset }) {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem(VIEWED_ONBOARDING);
      onReset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={clearOnboarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});