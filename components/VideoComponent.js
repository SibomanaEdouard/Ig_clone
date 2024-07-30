import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoComponent = ({ uri }) => {
  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        ref={videoRef}
        source={{ uri }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        style={{ width: '100%', height: 200 }}
      />
      <View>
        <TouchableOpacity
          onPress={() =>
            status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync()
          }
        >
          <Text>{status.isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoComponent;
