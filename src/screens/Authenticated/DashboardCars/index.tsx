import { useRef, useState } from "react";
import { FlatList, Platform } from "react-native";

import { CardCars } from "../../../components/CardCars";
import { SearchInput } from "../../../components/SearchInput";
import { ModalSelect } from "../../../components/ModalSelect";

import { Dimensions, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


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

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
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

  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["25%", "50%", "80%"];

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  //filter flat list
  const filterData = (searchText) => {
    const newData = data.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };


  const handleSelectValueModal = (value) => {
    console.log(value);
    bottomSheetModalRef.current?.close()
  }

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Container>
          <Header>
            <HeaderContent>
              <SearchInput
                onFilter={filterData}
                type="Cars"
                handleOpenModal={handlePresentModal}
              />
              <ContentMenu>
                <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
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
                  scrollEnabled={!isOpen}
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
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 50 }}
            onDismiss={() => setIsOpen(false)}
          >
            <ScrollView
              contentContainerStyle={{paddingBottom:0}}
              showsVerticalScrollIndicator={false}
            >
              <ModalSelect
                handleSelectValue={handleSelectValueModal}
                type="Cars"
              />
            </ScrollView>
          </BottomSheetModal>
        </Container>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

