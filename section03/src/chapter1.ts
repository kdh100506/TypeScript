// unknown (전체집합)
function unkonwnExam() {
  let a: unknown = 'hello'; //업케스팅
  let unknownVar: unknown;
  // let str: string = unknownVar ---> 다운케스팅은 안됨
}

// never (공집합) ---> 모든 타입에 업케스팅이 가능함
function naverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

// void
function voidExam() {
  function voidFunc(): void {
    console.log('hi');
  }

  let voidVar: void = undefined;
}

// any (never를 제외한 모든 자료형의 슈퍼 타입, 서브 타입이 될수 있음)
// 예외적으로 자기가 다운케스팅이 될수도 있고 자기에게 다운케스팅이 오는것도 가능함.
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // neverVar = anyVar; ---> 불가능
}
