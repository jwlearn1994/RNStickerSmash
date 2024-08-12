import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Button({ label, theme, onPress }) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, primaryButtonStyles.buttonContainer]}>
        <Pressable
          style={[styles.button, primaryButtonStyles.button]}
          onPress={onPress}
        >
          <Ionicons
            name="image-outline"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, primaryButtonStyles.buttonText]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const primaryButtonStyles = {
  buttonContainer: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
  },
  button: {
    backgroundColor: "#fff",
  },
  buttonText: {
    color: '#25292e',
  },
};

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
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});