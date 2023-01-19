import { View, Image, Text } from 'react-native';
import Margin from './Margin';

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri }}
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.4,
        }}
      />
      <View style={{ justifyContent: 'center', marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: isMe ? 'bold' : undefined,
            fontSize: isMe ? 16 : 15,
          }}
        >
          {name}
        </Text>
        {/* 그냥 introduction && 으로하면 introduction부분이 text로 바뀌면서
        컴포넌트로 감싸지 않은 텍스트라고 오류를 뱉는다.따라서 !!를 이용해서 boolean으로 바꿔준다.
        !!를 붙일경우 text의 길이가 1이상일때만 true로 변한다. */}
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <Text style={{ fontSize: isMe ? 12 : 11, color: 'grey' }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
