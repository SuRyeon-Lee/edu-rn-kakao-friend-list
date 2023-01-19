import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ name }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 10 }} //있든없든 스타일링의 변화는 없고 터치범위만 넓어짐
      style={{ paddingHorizontal: 6 }}
    >
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>친구</Text>

        <View style={{ flexDirection: 'row' }}>
          <IconButton name="search-outline" />
          <IconButton name="person-add-outline" />
          <IconButton name="md-musical-notes-outline" />
          <IconButton name="ios-settings-outline" />
        </View>
      </View>
    </>
  );
};
