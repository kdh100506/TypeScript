// object
let user: {
  id?: number; // 선텍적 프러퍼티
  name: string;
} = {
  id: 1,
  name: '이정환',
};

let config: {
  readonly apiKey: string; // 변경 불가능한 프러퍼티
} = {
  apiKey: 'MY API KEY',
};
