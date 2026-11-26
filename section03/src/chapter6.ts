// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 좁히는 방법

type Person = {
  name: string;
  age: number;
}

// value ---> number : toFixed
// value ---> string : toUpperCase
// value ---> Date : getTime
// value ---> Person : name은 age살 입니다,
function func(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed()); // value에 number밖에 못오기 때문에 value의 타입을 number로만 추론
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if(value instanceof Date) { // typeof는 null도 object를 반환함 ---> instanceof 사용
    console.log(value.getTime())
  } else if (value && 'age' in value) { // instanceof는 직접 만든 객체 타입에는 적용되지 않음 ---> in 사용
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }
}
