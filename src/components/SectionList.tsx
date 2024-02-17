import React, {useEffect, useState, PropsWithChildren} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Loading from './Loading';
import SectionHeaderComponent from './SectionHeaderComponent';
import Error from './Error';
import {errors} from '../utils/CONSTANTS';

interface IProps<T> extends PropsWithChildren<any> {
  data?: T[];
  RenderItem: React.FC<{item: T}>;

  headerTitle: string;

  noSeeMore?: boolean;
  OnPressSeeMore?: () => void;

  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const SectionList = <T extends unknown>({
  data,
  RenderItem,

  isLoading,
  isError,
  errorMessage,

  headerTitle,
  // noSeeMore,
  OnPressSeeMore,
  ...props
}: IProps<T>) => {
  return (
    <View className="flex-1" {...props}>
      <SectionHeaderComponent title={headerTitle} onSeeMore={OnPressSeeMore} />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error customText={errorMessage} />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <RenderItem item={item} />}
          ListEmptyComponent={<Error customText={errors.EMPTY} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{gap: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default SectionList;
