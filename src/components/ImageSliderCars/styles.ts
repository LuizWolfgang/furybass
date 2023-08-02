import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";

const DIMENSIONS = Dimensions.get("screen").height;
export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ImageIndexes = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
`;

export const CarImageWrapper = styled.View`
    width: ${Dimensions.get("window").width}px;
    justify-content: center;
    align-items: center;
`;
export const CarImage = styled.Image`
    width: 100%;
    height: 100%;
`;
export const styles = StyleSheet.create({
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
