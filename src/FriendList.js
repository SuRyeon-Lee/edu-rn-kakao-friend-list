import { ScrollView, View } from 'react-native';
import Profile from './Profile';
import Margin from './Margin';

export default (props) => {
  /*
   *Case 1. 삼항연산자
   */
  //   return props.isOpened ? (
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={{ paddingBottom: bottomSpace }}
  //     >
  //       {props.data.map((item, idx) => {
  //         return (
  //           <View key={idx}>
  //             <Profile
  //               uri={item.uri}
  //               name={item.name}
  //               introduction={item.introduction}
  //             />
  //             <Margin height={13} />
  //           </View>
  //         );
  //       })}
  //     </ScrollView>
  //   ) : null;

  /*
   *Case 2. if문으로 먼저 예외처리
   가독성이 좋아져서 많이 씀
   */
  //   if (!props.isOpened) {
  //     return null; //먼저 예외처리
  //   }
  //   return (
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={{ paddingBottom: bottomSpace }}
  //     >
  //       {props.data.map((item, idx) => {
  //         return (
  //           <View key={idx}>
  //             <Profile
  //               uri={item.uri}
  //               name={item.name}
  //               introduction={item.introduction}
  //             />
  //             <Margin height={13} />
  //           </View>
  //         );
  //       })}
  //     </ScrollView>
  //   )

  /*
   *Case 3. && 이용
   isOpened가 true면 다음으로 넘어가서 랜더링됨
   false && 1 = false -> 1을 체크하지 않음
   true && 2 = 2 -> 앞의 값이 true면 다음값으로 넘어감
   */
  return (
    props.isOpened && (
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.data.map((item, idx) => {
          return (
            <View key={idx}>
              <Profile
                uri={item.uri}
                name={item.name}
                introduction={item.introduction}
              />
              <Margin height={13} />
            </View>
          );
        })}
      </ScrollView>
    )
  );
};
