import AppText from './AppText';
import {View, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';

const SectionHeaderComponent = ({
  title,
  onSeeMore,
  style: $styleOverride,
}: {
  title: string,
  onSeeMore?: Function,
  style?: StyleProp<ViewStyle>,
}) => {
  return (
    <View
      className="flex-row justify-between align-middle"
      style={$styleOverride}>
      <AppText className="pb-1 text-xl font-bold">{title}</AppText>
      {onSeeMore && (
        <TouchableOpacity onPress={onSeeMore}>
          <AppText className="pb-1 text-xl font-bold text-orange-200">
            See All
          </AppText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeaderComponent;
