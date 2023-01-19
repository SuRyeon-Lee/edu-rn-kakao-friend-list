## ⛑안정영역에 구현하기

<br/>

### 방법1: [SafeAreaView](https://reactnative.dev/docs/safeareaview) 부모의 최상단 컴포넌트를 안전한 영역부터(노치와 상태바 부분을 제외한 영역) 그리게 해준다.

```js
import { SafeAreaView } from 'react-native';
import Header from './src/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}
```

<br/>

### 방법2: 라이브러리로 상단바와 하단바의 높이를 직업 알아내서 패딩이나 마진으로 조절하는 방법

- 라이브러리 이름은 [react-native-iphone-x-helper](https://github.com/ptelad/react-native-iphone-x-helper)인데, 현재 아카이빙 됨. (react-native-safe-area-context로 대체)
  최신모델은 이방법 못씀

- ❣️ 이 방식을 쓰는 이유: 하단 탭바를 그릴 때 SafeAreaView를 이용하면 하단까지 같이 떠버리니까 이상해서

```bash
  npm i react-native-iphone-x-helper --save
```

```js
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true); //안전영역으로 알아내려면 true
const bottomSpace = getBottomSpace();

console.log(`${Platform.OS}: ${statusBarHeight},${bottomSpace}`);
//ios: 44,34
//android: 24,0
```

<br/>

### 방법3: react-native-safe-area-context사용하기

- 사용법 git[https://github.com/th3rdwave/react-native-safe-area-context] 참고
- edges 라는 prop을 조절해서 원하는 엣지는 안전영역 적용을 풀 수 있다.

```bash
  npm install react-native-safe-area-context
```

```js
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// react-native의 SafeAreaView와 이름이 똑같으니 주의
export default function App() {
  return (
    {/*최상위 root SafeAreaView로 감싸기*/}
    <SafeAreaProvider>
      {/*안전영역에 만들어 사용할 컴포넌트 작성하기*/}
      <SafeAreaView edges={['right','left']}>
        <Header />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```

<br/>

## ✨Expo에서 기본 제공되는 아이콘 사용하기

- 어떤 아이콘이 있는지 [사이트](https://icons.expo.fyi/)에서 확인가능
- 사이트에서 아이콘 고르고 클릭하면 코드 복사 가능

```js
import { Ionicons } from '@expo/vector-icons';
<Ionicons name="ios-settings-outline" size={24} color="black" />;
```

<br/>

## ✨ScrollView와 FlatList

|                 ScrollView                  |                           FlatList                            |
| :-----------------------------------------: | :-----------------------------------------------------------: |
|         렌더를 한번에 다 처리한다.          |             화면에 보이는 필요한 부분만 렌더한다.             |
| 처리해야 할 데이터 양이 적은 경우 사용한다. | 데이터의 길이가 변할 수 있고, 데이터의 양을 모를 때 사용한다. |

- `ScrollView`는 스크롤을 빠르게 내리면, 데이터 처리속도가 스크롤을 내리는 속도를 따라가지 못해서
  일시적으로 흰색화면만 보이게 될수도있다.
- `FlatList`는 설정한 갯수만큼 화면에 보이도록 만드는 것도 가능하다.
- [참고1-ScrollView vs Flatlist](https://reactnative.dev/docs/scrollview)[참고2-Flatlist](https://reactnative.dev/docs/flatlist)[참고3](https://velog.io/@7p3m1k/react-native-%ED%83%9C%EA%B7%B8-ScrollView-FlatList)

<br/>
