import * as ImagePicker from 'expo-image-picker';

export default function useImagePicker() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    } else {
      return null;
    }
  };

  return {
    pickImageAsync,
  };
}