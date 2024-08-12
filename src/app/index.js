import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

const pages = [
  'sticker-smash',
  'onboarding',
];

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        {pages.map((label) => (
          <TouchableOpacity key={label}>
            <Link href={`/${label}`}>{label}</Link>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
