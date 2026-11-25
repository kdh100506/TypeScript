// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 가능(업케스팅)
// num2 = num1 ---> 불가능(다운케스팅)

// 객체 타입간의 호환성 ---> 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: '노란색',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog; // 가능(업케스팅)
// dog = animal ---> 불가능(다운케스팅)

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한입 크기로 잘라먹는 리엑트',
  price: 3300,
  skill: 'reactjs',
};

book = programmingBook; // 가능(업케스팅)
// programmingBook = book ---> 불가능(다운케스팅)

// 초과 프러퍼티 검사
let book2: Book = {
  name: '한입 크기로 잘라먹는 리엑트',
  price: 3300,
  // skill: 'reactjs', ---> 객체리터럴 형식으로 하면 초과 프러퍼티 검사로 인하여 불가능
};

let book3: Book = programmingBook // 객체리터럴로 하는것이 아니라서 초과 프러퍼티 검사를 하지 않아서 가능

function func(book: Book) {}

// func({
//   name: '한입 크기로 잘라먹는 리엑트',
//   price: 3300,
//   skill: 'reactjs'
// }); ---> 함수의 매개변수에서도 초과 프러퍼티 검사를 하여서 불가능

func(programmingBook); // 객체리터럴로 하는것이 아니라서 초과 프러퍼티 검사를 하지 않아서 가능