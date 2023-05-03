import React, { useState } from 'react';
import { StatusBar, FlatList, Platform } from 'react-native';
import { Dimensions, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer
} from "@n1ru4l/react-in-center-of-screen";

const { height: windowHeight } = Dimensions.get("window");
console.log(windowHeight);
const windowPlatform = Platform.OS ==='ios' ? 1.5 : 1.33
const boxHeight = windowHeight / windowPlatform

import {
  Container,
  Header,
  HeaderContent,
  ContentCars,
  ContentMenu,
  Content
} from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { CardCars } from '../../components/CardCars';

import { data } from '../../mocks';
import { SearchInput } from '../../components/SearchInput';

export function DashboardCars(){
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (searchText) => {
    console.log('to aqui')
    const newData = data.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  }

  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
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
                  setOffsetY(ev.nativeEvent.contentOffset.y);
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
                                />
                              </ContentCars>
                              :
                              <ContentCars>
                                <CardCars
                                  data={item}
                                  paused={true}
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
      }
    </Container>
  );
}
