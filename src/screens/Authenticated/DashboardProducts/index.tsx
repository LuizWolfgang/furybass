import { useState } from "react";

import { SearchInput } from "../../../components/SearchInput";
import { CardProducts } from "../../../components/CardProducts";

import { FlatList, Platform } from "react-native";
import { Dimensions, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer,
} from "@n1ru4l/react-in-center-of-screen";

import {
  Container,
  Header,
  HeaderContent,
  ContentProducts,
  ContentMenu,
  Content,
  ViewEmptyComponent,
  TextEmpty
} from "./styles";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Products } from "../../../mocks";
import { useFocusScreen } from "../../../hooks/useFocusScreen";

//Dimensions
const { height: windowHeight } = Dimensions.get("window");
const windowPlatform = Platform.OS === "ios" ? 1.5 : 1.33;
const boxHeight = windowHeight / windowPlatform;

export function DashboardProducts() {
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
        <HeaderContent>
          <SearchInput onFilter={filterData} />
          <ContentMenu>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
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
          centerYStart={(windowHeight * 0.7) / 4}
          centerYEnd={(windowHeight * 0.55) / 1}
        >
          {({ setOffsetY }) => (
            <FlatList
              data={filteredData}
              contentContainerStyle={{ paddingTop:20, paddingBottom:50 }}
              onScroll={(ev) => {
                setOffsetY(ev.nativeEvent.contentOffset.y);
              }}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={(
                <ViewEmptyComponent>
                  <TextEmpty>Ops, anúncio não encontrado ☹️</TextEmpty>
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
                            <ContentProducts>
                              <CardProducts
                                data={item}
                                paused={
                                  false
                                }
                                playFocus={
                                  isPlaying
                                }
                              />
                            </ContentProducts>
                          ) : (
                            <ContentProducts>
                              <CardProducts
                                data={item}
                                paused={
                                  true
                                }
                                playFocus={
                                  isPlaying
                                }
                              />
                            </ContentProducts>
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
