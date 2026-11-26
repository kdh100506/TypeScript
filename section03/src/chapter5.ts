// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = '이정환';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <--- 단언식
// A as B <--- A가 B의 슈퍼타입이거나 서브타입이여야함

let num1 = 10 as never; // num1이 never의 슈퍼타입
let num2 = 10 as unknown; // num2가 unknown의 서브타입
// let num3 = 10 as string ---> num3와 string은 겹치는 것이 없음
let num4 = 10 as unknown as string; // num4는 unknown의 슈퍼타입이고 unknown은 string의 서브 타입이기 때문에

// const 단언
let num5 = 10 as const; // const로 선언 한것과 동일한 효과를 보게함 ---> 타입이 리터럴 형식로 변경

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const; // 프러퍼티의 값을 수정할수 없게 리터럴 형식으로 변경됨

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글 1',
  author: '이정환',
};

const len: number = post.author!.length; // !는 Non Null연산자 null, undefined가 아닐것이라고 믿게 만듬
