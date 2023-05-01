import React, {useRef, useState} from 'react';
import { View, Dimensions, FlatList, ViewToken} from 'react-native';
import { Bullet } from '../../components/Bullet';
// import Video from 'react-native-video';

import { Video, ResizeMode } from 'expo-av';

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
  styles,
} from './styles';

interface Props {
 paused: boolean;
 imagesUrl: {
   id: string;
   photo: string;
   type: string;
 }[];
}

interface ChangeImageProps{
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

const windowWidth = Dimensions.get("window").width;
const windowHeight =  Dimensions.get("window").width;

export function ImageSlider({imagesUrl, paused}: Props){
  const [imageIndex, setimageIndex] = useState(0);
  const video = useRef(null)

  const indexChanged = useRef((info:ChangeImageProps) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = info.viewableItems[0].index!
    setimageIndex(index)
  })

  return (
    <Container>
      <FlatList
        data={imagesUrl}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 40,
        }}
        keyExtractor={item => item.id}
        renderItem={({ item, index}) => (
          <CarImageWrapper>
            { item.type === "image" ?
              <CarImage source={{ uri: item.url }} />
              :
              <View style={{ width: windowWidth, height: windowHeight, position: "relative" }}>
                {/* <Video
                  ref={video}
                  style={styles.video}
                  source={item.url}
                  paused={imageIndex !== index || paused}
                  resizeMode={ResizeMode.COVER}
                /> */}

                <Video
                  ref={video}
                  style={styles.video}
                  source={item.url}
                  shouldPlay={imageIndex === index && !paused}
                  volume={1}
                  useNativeControls
                  resizeMode={ResizeMode.COVER}
                  isLooping
                />
              </View>
            }
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />

      <ImageIndexes>
        {
          imagesUrl.map((item , index) => (
            <Bullet
              key={String(item.id)}
              item={item.type}
              actived={index !== imageIndex}
            />
          ))
        }
      </ImageIndexes>
    </Container>
  );

}


// const styles = StyleSheet.create({
//   container: {
//     border: 'none',
//     justifyContent: 'center',
//   },
//   video: {
//     alignSelf: 'center',
//     width: 390,
//     height: 250,
//     border: 'none',
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

{/* <Video
ref={video}
style={styles.video}
source={item.url}
usePoster
isLooping
volume={1}
useNativeControls
resizeMode={ResizeMode.COVER}
onPlaybackStatusUpdate={status => setStatus({ status })} /><View style={styles.buttons}>
<Button
  title={status.isPlaying ? 'Pause' : 'Play'}
  onPress={handleVideo} />
</View> */}
