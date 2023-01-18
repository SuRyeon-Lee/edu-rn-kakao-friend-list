import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: 'grey' }}>친구 {props.friendProfileLen}</Text>
      {/* 
        Button 컴포넌트는 안드로이드와 ios에서 다르게 보이기 때문에
        관리하는데에 어려움이 있으므로 TouchableOpacity사용*/}
      <TouchableOpacity onPress={props.onPressArrow}>
        <MaterialIcons
          name={props.isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="lightgrey"
        />
      </TouchableOpacity>
    </View>
  );
};
