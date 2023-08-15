import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Category,
  Name,
  TouchIcon,
  ContentTitle,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function SubCategorySelect(){
  const navigation = useNavigation();
  const route = useRoute()

  const { item } = route.params as any;

  function handleCategorySelect(category: Category){
    navigation.navigate('createAd', { item: category})
  }

  return (
    <Container>
      <Header>
        <TouchIcon onPress={() => navigation.goBack()} >
          <Entypo name="chevron-with-circle-left" size={24} color="white" />
        </TouchIcon>
        <ContentTitle>
          <Title>{item.name}</Title>
        </ContentTitle>
      </Header>

      <FlatList
        data={item.subcategories}
        style={{ flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={item.key === item.key}
          >
            <Name>{item.name}</Name>
          </Category>
        )}
      />
    </Container>
  )
}
