import AppText from './AppText';
import {View, FlatList, TouchableOpacity} from 'react-native';

const SectionHeaderComponent = ({
  title,
  onSeeMore,
}: {
  title: string,
  onSeeMore?: Function,
}) => {
  return (
    <View>
      <View className="flex-row justify-between align-middle">
        <AppText className="pb-1 text-xl font-bold">{title}</AppText>
        {onSeeMore && (
          <TouchableOpacity onPress={onSeeMore}>
            <AppText className="pb-1 text-xl font-bold text-orange-200">
              See All
            </AppText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SectionHeaderComponent;
