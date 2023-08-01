import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Entypo } from '@expo/vector-icons';
import { categories } from '../../../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Name,
} from './styles';
import { useNavigation } from '@react-navigation/native';


interface Category {
  key: string;
  name: string;
}

// interface Props {
//   category: Category;
//   setCategory: (category: Category) => void;
//   closeSelectCategory: () => void;
// }

export function CategorySelect(){
  const navigation = useNavigation();

  function handleCategorySelect(category: Category){
    navigation.navigate('subCategories' , {item:category})
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={categories.key === item.key}
          >
            <Name>{item.name}</Name>
            <Entypo name="chevron-right" size={24} color="black" />
          </Category>
        )}
      />
    </Container>
  )
}
