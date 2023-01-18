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

## ✨Expo에서 기본 제공되는 아이콘 사용하기

- 어떤 아이콘이 있는지 [사이트](https://icons.expo.fyi/)에서 확인가능
- 사이트에서 아이콘 고르고 클릭하면 코드 복사 가능

```js
import { Ionicons } from '@expo/vector-icons';
<Ionicons name="ios-settings-outline" size={24} color="black" />;
```
