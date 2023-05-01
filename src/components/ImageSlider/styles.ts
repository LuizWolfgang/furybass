import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

interface ImageIndexProps{
    actived: boolean;
}

export const Container = styled.View`

`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: center ;
  padding: 5px ;
`

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  justify-content: center;
  align-items: center;

`
export const CarImage = styled.Image`
    width: 100%;
    height: 96%;
    border-radius: 10px;

`
export const styles = StyleSheet.create({
  slide: {
    width: '100%',
    height: '97%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5

  },
  image: {
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
