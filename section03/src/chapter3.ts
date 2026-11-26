// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재합니다

// 1. 합집합 - Union
let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (string | number | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person; // type에도 적용 가능

let union1: Union1 = {
  name: 'ddd',
  color: 'ddd',
}

let union2: Union1 = {
  name: 'ddd',
  language: 'ddd'
}

let union3: Union1 = {
  name: 'ddd',
  color: 'ddd',
  language: 'ddd'
}

// 2.교집합 - Intersection 
let variable: number & string;

type Intersection = Dog & Person
let intersection1: Intersection = {
  name: "",
  color: "",
  language: ""
}