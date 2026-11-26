// 타입 추론
let a = 10;
let b = 'hello';
let c = {
  id: 1,
  name: '이정환',
  profile: {
    nickname: 'winterlood',
  },
  url: ['hhtps://winterlood.com'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return 'hello';
}

let d; // 암묵적인 any타입 ---> 들어가는 값의 타입에 따라 타입이 변경됨
d = 10;
d = 'string';

const num = 10; // const로 선언한것은 타입 추론이 타입 리터럴 형식으로 됨
const str = 'hello';

let arr = [1, 'hello']; // 배열로 초기화하면 최적의 공통 타입으로 추론



