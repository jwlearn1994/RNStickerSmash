import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loading from 'components/Loading';
import Carousel from 'containers/onboarding/Carousel';
import HomeScreen from 'containers/onboarding/HomeScreen';

import { VIEWED_ONBOARDING } from 'lib/async-storage';

export default function OnboardingPage() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const viewed = await AsyncStorage.getItem(VIEWED_ONBOARDING);
      setViewedOnboarding(viewed === 'true');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading
        ? <Loading />
        : viewedOnboarding
          ? <HomeScreen onReset={() => setViewedOnboarding(false)} />
          : <Carousel onComplete={() => setViewedOnboarding(true)} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
