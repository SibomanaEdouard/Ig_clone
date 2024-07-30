import React from 'react';
import { View } from 'react-native';
import CameraComponent from '../components/CameraComponent';
// import useStore from '../store/useStore';
import useStore from '../store/UserStore';

const CaptureScreen = ({ navigation }) => {
  const addMedia = useStore((state) => state.addMedia);

  const handleMediaCaptured = (media) => {
    addMedia(media);
    navigation.navigate('Saved');
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraComponent onMediaCaptured={handleMediaCaptured} />
    </View>
  );
};

export default CaptureScreen;
