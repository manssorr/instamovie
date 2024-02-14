import React, {useEffect, useState, PropsWithChildren} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Loading from './Loading';

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
  noSeeMore,
  OnPressSeeMore,
  ...props
}: IProps<T>) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <View {...props}>
      <View className="flex-row justify-between align-middle">
        <AppText className="pb-1 text-lg font-bold">{headerTitle}</AppText>
        {noSeeMore && (
          <TouchableOpacity onPress={OnPressSeeMore}>
            <AppText className="pb-1 text-lg font-bold text-orange-200">
              See All
            </AppText>
          </TouchableOpacity>
        )}
      </View>
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
