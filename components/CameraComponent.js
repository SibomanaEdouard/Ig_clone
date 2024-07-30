import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraComponent = ({ onMediaCaptured }) => {
  const [cameraType, setCameraType] = useState('back');
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices[cameraType];

  if (!device) return <Text>Loading...</Text>;

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto();
    onMediaCaptured({ type: 'photo', uri: photo.path });
  };

  const recordVideo = async () => {
    const video = await camera.current.startRecording({
      onRecordingFinished: (video) => onMediaCaptured({ type: 'video', uri: video.path }),
    });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} device={device} ref={camera} isActive={true} />
      <View style={styles.controls}>
        <TouchableOpacity onPress={takePhoto} style={styles.button}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={recordVideo} style={styles.button}>
          <Text style={styles.buttonText}>Record Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    margin: 8,
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default CameraComponent;
