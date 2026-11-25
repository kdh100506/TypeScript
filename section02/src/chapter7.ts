// void (아무것도 없다라는 뜻)

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void = undefined; // undefined만 넣을수 있음 (다만 엄격한 null 검사를 끄면 null도 넣을수 있음)

// never (존재하지 않는 불가능한 또는 모순적인 타입)
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never; // never은 null, undefined, any 모두 못담음
