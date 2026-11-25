// any (특정 변수의 타입을 우리가 정확히 모를때)
let anyVar: any = 10;
anyVar = 'hello';
let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
// num = unknownVar; ---> any에서는 되었지만 unknown은 안됨

// 이런식으로 타입을 확실히 하였을때만 사용가능
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

// any보다는 unknown이 안전함