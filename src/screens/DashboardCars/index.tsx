import React, { useEffect, useState } from 'react';
import { Text, FlatList, Platform } from 'react-native';
import { Dimensions, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer
} from "@n1ru4l/react-in-center-of-screen";

import {
  Container,
  Header,
  HeaderContent,
  ContentCars,
  ContentMenu,
  Content
} from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { CardCars } from '../../components/CardCars';

import { data } from '../../mocks';
import { SearchInput } from '../../components/SearchInput';

const { height: windowHeight } = Dimensions.get("window");
const windowPlatform = Platform.OS ==='ios' ? 1.5 : 1.33
const boxHeight = windowHeight / windowPlatform

export function DashboardCars(){
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [playFocus, setPlayFocus] = useState(true)

  const filterData = (searchText) => {
    const newData = data.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  }

  console.log(filteredData.length)
  const navigation = useNavigation();

  useFocusEffect(() => {
    setPlayFocus(false);
  },)

  return (
    <Container>
      <Header>
        <HeaderContent>
          <SearchInput
            onFilter={filterData}
          />
          <ContentMenu>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={30} color="white" />
            </TouchableOpacity>
          </ContentMenu>
        </HeaderContent>
      </Header>

      {
        filteredData.length > 0 ?
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
                  onScroll={ev => {
                    setOffsetY(ev.nativeEvent.contentOffset.y)
                  }}
                  keyExtractor={item => item.id}
                  renderItem={({ index, item }) => (
                    <IndexProvider index={index}>
                      {() => (
                        <View style={{ height: boxHeight, backgroundColor: item }}>
                          <InCenterConsumer>
                            {({ isInCenter }) =>
                              isInCenter ?
                                <ContentCars>
                                  <CardCars
                                    data={item}
                                    paused={false}
                                    playFocus={playFocus}
                                  />
                                </ContentCars>
                                :
                                <ContentCars>
                                  <CardCars
                                    data={item}
                                    paused={true}
                                    playFocus={playFocus}
                                  />
                                </ContentCars>
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
          :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: 'white', fontSize: 18 }}> Nenhum anúncio encontrado</Text>
          </View>
      }
    </Container>
  );
}
