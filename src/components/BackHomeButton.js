import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

export default function BackHomeButton() {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Link href="/" style={styles.buttonText}>
          Back Home
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});