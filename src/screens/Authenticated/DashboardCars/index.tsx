import React, { useState } from "react";
import { FlatList, Platform } from "react-native";
import { Dimensions, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CardCars } from "../../../components/CardCars";
import { SearchInput } from "../../../components/SearchInput";
import { useFocusScreen } from "../../../hooks/useFocusScreen";

import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer,
} from "@n1ru4l/react-in-center-of-screen";

import {
  Container,
  Header,
  HeaderContent,
  ContentCars,
  ContentMenu,
  Content,
  ViewEmptyComponent,
  TextEmpty,
} from "./styles";

import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { data } from "../../../mocks";

const { height: windowHeight } = Dimensions.get("window");
const windowPlatform = Platform.OS === "ios" ? 1.5 : 1.33;
const boxHeight = windowHeight / windowPlatform;

export function DashboardCars() {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(data);

  const {isPlaying} = useFocusScreen();
  const navigation = useNavigation();

  //filter flat list
  const filterData = (searchText) => {
    const newData = data.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <SearchInput onFilter={filterData} type="Cars"/>
          <ContentMenu>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons name="menu" size={30} color="white" />
            </TouchableOpacity>
          </ContentMenu>
        </HeaderContent>
      </Header>
      <Content>
        <OffsetYProvider
          columnsPerRow={1}
          listItemHeight={boxHeight}
          centerYStart={(windowHeight * 1) / 3}
          centerYEnd={(windowHeight * 2) / 3}
        >
          {({ setOffsetY }) => (
            <FlatList
              data={filteredData}
              contentContainerStyle={{ paddingTop:20 }}
              onScroll={(ev) => {
                setOffsetY(ev.nativeEvent.contentOffset.y);
              }}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={(
                <ViewEmptyComponent>
                  <TextEmpty>Ops, anúncio não encontrado ☹️</TextEmpty>
                </ViewEmptyComponent>
              )}
              renderItem={({ index, item }) => (
                <IndexProvider index={index}>
                  {() => (
                    <View
                      style={{
                        height: boxHeight,
                      }}
                    >
                      <InCenterConsumer>
                        {({ isInCenter }) =>
                          isInCenter ? (
                            <ContentCars>
                              <CardCars
                                data={item}
                                paused={
                                  false
                                }
                                playFocus={
                                  isPlaying
                                }
                              />
                            </ContentCars>
                          ) : (
                            <ContentCars>
                              <CardCars
                                data={item}
                                paused={
                                  true
                                }
                                playFocus={
                                  isPlaying
                                }
                              />
                            </ContentCars>
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
