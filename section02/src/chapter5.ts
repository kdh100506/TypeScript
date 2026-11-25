// enum 타입(여러가지 값들에 각각 이름을 부여해 열거해 두고 사용하는 타입)
// enum은 컴파일해도 사라지지 않음
enum Role {
  ADMIN = 0, // 숫자를 할당 안해도 0번부터 자동으로 인덱스가 생김 (시작이 10이면 그 뒤는 +1 / 중간에도 변경가능)
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, // 0번은 관리자
  Language: Language.korean
};
const user2 = {
  name: '홍길동',
  role: Role.USER, // 1번은 일반유저
};
const user3 = {
  name: '아무개',
  role: Role.GUEST, // 2번은 게스트
};

console.log(user1, user2, user3);
