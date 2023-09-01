import { useRef, useState } from "react";
import { FlatList, Platform } from "react-native";

import { SearchInput } from "../../../components/SearchInput";
import { CardServices } from "../../../components/CardServices";
import { ModalSelect } from "../../../components/ModalSelect";

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

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { Services } from "../../../mocks";
import { useFocusScreen } from "../../../hooks/useFocusScreen";
import theme from "../../../styles/theme";


//Dimensions
const { height: windowHeight } = Dimensions.get("window");
const windowPlatform = Platform.OS === "ios" ? 1.5 : 1.22;
const boxHeight = windowHeight / windowPlatform;

export function DashboardServices() {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(Services);

  const {isPlaying} = useFocusScreen();
  const navigation = useNavigation();


  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["80%", "85%", "90%"];

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  //filter flat list
  const filterData = (searchText) => {
    const newData = Services.filter((item) => {
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
                type="Services"
                handleOpenModal={handlePresentModal}
              />
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
                  scrollEnabled={!isOpen}
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
                          }}
                        >
                          <InCenterConsumer>
                            {({ isInCenter }) =>
                              isInCenter ? (
                                <ContentProducts>
                                  <CardServices
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
                                  <CardServices
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
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 50, backgroundColor: `${theme.colors.line}` }}
            onDismiss={() => setIsOpen(false)}
          >
            <ScrollView
              contentContainerStyle={{ paddingBottom: 30 }}
              showsVerticalScrollIndicator={false}
            >
              <ModalSelect
                handleSelectValue={handleSelectValueModal}
                type="Services"
              />
            </ScrollView>
          </BottomSheetModal>
        </Container>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>

  );
}
