import { View, Image, Text } from 'react-native';
import Margin from './Margin';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
`;
const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;
const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;
const NameText = styled.Text`
  font-weight: ${(props) => (props.isMe ? 'bold' : 'normal')};
  font-size: ${(props) => (props.isMe ? 16 : 15)}px;
`;
const IntroductionText = styled.Text`
  font-size: ${(props) => (props.isMe ? 12 : 11)}px;
  color: grey;
`;

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <Container>
      <ProfileImage source={{ uri }} size={size} />
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        {/* 그냥 introduction && 으로하면 introduction부분이 text로 바뀌면서
        컴포넌트로 감싸지 않은 텍스트라고 오류를 뱉는다.따라서 !!를 이용해서 boolean으로 바꿔준다.
        !!를 붙일경우 text의 길이가 1이상일때만 true로 변한다. */}
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText isMe={isMe}>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};
