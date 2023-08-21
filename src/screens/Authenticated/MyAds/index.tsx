import { useState } from "react";

import { SearchInput } from "../../../components/SearchInput";
import { CardProducts } from "../../../components/CardProducts";

import { FlatList, Platform } from "react-native";
import { Dimensions, View } from "react-native";

import { Entypo } from '@expo/vector-icons';

import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer,
} from "@n1ru4l/react-in-center-of-screen";

import {
  Container,
  Header,
  ContentAd,
  Content,
  ViewEmptyComponent,
  TextEmpty,
  TouchIcon,
  ContentTitle,
  Title,
  TouchAddAd,
  TextAddAd
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Products } from "../../../mocks";
import { useFocusScreen } from "../../../hooks/useFocusScreen";
import { CardAds } from "../../../components/CardAds";

//Dimensions
const { height: windowHeight } = Dimensions.get("window");
const windowPlatform = Platform.OS === "ios" ? 1.5 : 1.33;
const boxHeight = windowHeight / windowPlatform;

export function Myads() {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(Products);

  const {isPlaying} = useFocusScreen();
  const navigation = useNavigation();


  //filter flat list
  const filterData = (searchText) => {
    const newData = Products.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  return (
    <Container>
      <Header>
        <TouchIcon onPress={() => navigation.goBack()} >
          <Entypo name="chevron-with-circle-left" size={24} color="white" />
        </TouchIcon>
        <ContentTitle>
          <Title>Meus anúncios</Title>
        </ContentTitle>
      </Header>

      <Content>
        <OffsetYProvider
          columnsPerRow={1}
          listItemHeight={boxHeight}
          centerYStart={(windowHeight * 0.7) / 4}
          centerYEnd={(windowHeight * 0.55) / 1}
        >
          {({ setOffsetY }) => (
            <FlatList
              data={Products}
              contentContainerStyle={{ paddingTop:20, paddingBottom:50 }}
              onScroll={(ev) => {
                setOffsetY(ev.nativeEvent.contentOffset.y);
              }}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={(
                <ViewEmptyComponent>
                  <TextEmpty>Ops, você não possui nenhum anúncio ☹️</TextEmpty>
                  <TouchAddAd onPress={() => navigation.navigate('createAd')}>
                    <TextAddAd>
                        Clique aqui para anunciar
                    </TextAddAd>
                  </TouchAddAd>
                </ViewEmptyComponent>
              )}
              keyExtractor={(item) => item.id}
              renderItem={({ index, item }) => (
                <IndexProvider index={index}>
                  {() => (
                    <View
                      style={{
                        height: boxHeight,
                        backgroundColor: item,
                      }}
                    >
                      <InCenterConsumer>
                        {({ isInCenter }) =>
                          isInCenter ? (
                            <ContentAd>
                              <CardAds
                                data={item}
                                paused={
                                  false
                                }
                                playFocus={
                                  isPlaying
                                }
                              />
                            </ContentAd>
                          ) : (
                            <ContentAd>
                              <CardAds
                                data={item}
                                paused={
                                  true
                                }
                                playFocus={
                                  isPlaying
                                }
                              />
                            </ContentAd>
                          )
                        }
                      </InCenterConsumer>
                    </View>
                  )}
                </IndexProvider>
              )}
            />
          )}
        </OffsetYProvider>
      </Content>
    </Container>
  );
}
