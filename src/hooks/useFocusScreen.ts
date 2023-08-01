import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';

export const useFocusScreen = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  useFocusEffect(
    useCallback(() => {
      setIsPlaying(true);
      return () => {
        setIsPlaying(false);
      };
    }, [])
  );
  return { isPlaying };
};


