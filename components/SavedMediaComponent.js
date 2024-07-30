import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import useStore from '../store/UserStore';
import VideoComponent from './VideoComponent';

const SavedMediaComponent = () => {
  const savedMedia = useStore((state) => state.savedMedia);

  return (
    <ScrollView>
      {savedMedia.map((media, index) => (
        <View key={index} style={{ marginBottom: 16 }}>
          {media.type === 'photo' ? (
            <Image source={{ uri: media.uri }} style={{ width: '100%', height: 200 }} />
          ) : (
            <VideoComponent uri={media.uri} />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default SavedMediaComponent;
