// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
let user: User = {
  id: 1,
  name: '이정환',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};

// 인덱스 스그니쳐
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'KO',
  UnitedState: 'USA',
  UnitedKingdom: 'UK',
};

type CountryNumberCodes = {
  [key: string]: (number | string) // value의 값이 문자열 또는 숫자
  Korea: number // 필수로 작성하여야 함
}

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}