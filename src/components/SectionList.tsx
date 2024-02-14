import React, {useEffect, useState, PropsWithChildren} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Loading from './Loading';
import SectionHeaderComponent from './SectionHeaderComponent';

interface IProps<T> extends PropsWithChildren<any> {
  data?: T[];
  RenderItem: React.FC<{item: T}>;

  headerTitle: string;

  noSeeMore?: boolean;
  OnPressSeeMore?: () => void;

  isLoading: boolean;
}

const SectionList = <T extends unknown>({
  data,
  RenderItem,
  isLoading,
  headerTitle,
  // noSeeMore,
  OnPressSeeMore,
  ...props
}: IProps<T>) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <View {...props}>
      <SectionHeaderComponent title={headerTitle} onSeeMore={OnPressSeeMore} />
      <FlatList
        data={data}
        renderItem={({item}) => <RenderItem item={item} />}
        ListEmptyComponent={<AppText>No data</AppText>}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{gap: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionList;
