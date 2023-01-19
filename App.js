// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  // Platform,
  // SafeAreaView,
  StyleSheet,
  // Text,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { friendProfiles, myProfile } from './src/data';
import Division from './src/Division';
// import FriendList from './src/FriendList';
import FriendSection from './src/FriendSection';
import Header from './src/Header';
import Margin from './src/Margin';
import Profile from './src/Profile';
import TabBar from './src/TabBar';

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: 'white' }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={isOpened ? friendProfiles : []} //배열형태의 총 데이터
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(_, index) => index} //renderItem의 key값 없앨 수 있음
        stickyHeaderIndices={[0]} //고정되어야 하는 header 지정, header가 하나밖에 없음
        ItemSeparatorComponent={ItemSeparatorComponent} // 함수, renderItem에 serperator 안넣어도 됨
        renderItem={renderItem} //함수, data만큼 map시켜서 뿌려줄 아이템
        ListHeaderComponent={ListHeaderComponent} //함수,map되지 않는 위 영역
        ListFooterComponent={ListFooterComponent} //함수,map되지 않는 아래 영역
        showsVerticalScrollIndicator={false} //boolean,스크롤바
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
      {/* 같이 스크롤 되면 안되는 별개의 부분 빼줌 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
  },
});
