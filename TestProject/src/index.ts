import { createInterface } from 'node:readline/promises';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

type Todo = {
  id: number;
  title: string;
  state: string;
  memo?: string;
};

let idCount = 0;
let todoList: Todo[] = [];

async function createTodo(): Promise<void> {
  let title: string;
  let memo: string;

  console.log('===== Todo 생성 =====');

  while (true) {
    title = await rl.question('title: ');
    if (typeof title === 'undefined') {
      continue;
    }
    break;
  }

  memo = await rl.question('memo(생략하려면 Enter): ');
  console.log();

  todoList.push({
    id: idCount++,
    title: title,
    state: '미완료',
    memo: memo,
  });

  return;
}

function showAllTodo(): void {
  console.log('===== 전체 Todo =====');
  if (todoList.length === 0) {
    console.log('생성된 Todo가 없습니다.\n');
  }
  for (let index = 0; index < todoList.length; index++) {
    if (todoList[index].memo !== '') {
      console.log(`id: ${todoList[index].id}`);
      console.log(`title: ${todoList[index].title}`);
      console.log(`state: ${todoList[index].state}`);
      console.log(`memo: ${todoList[index].memo}`);
      console.log();
    } else {
      console.log(`id: ${todoList[index].id}`);
      console.log(`title: ${todoList[index].title}`);
      console.log(`state: ${todoList[index].state}`);
      console.log();
    }
  }
}

function showCheckedTodo(): void {
  let nullCheck: number = 0;
  console.log('===== 완료 Todo =====');
  for (let index = 0; index < todoList.length; index++) {
    if (todoList[index].memo !== '' && todoList[index].state === '완료') {
      console.log(`id: ${todoList[index].id}`);
      console.log(`title: ${todoList[index].title}`);
      console.log(`state: ${todoList[index].state}`);
      console.log(`memo: ${todoList[index].memo}`);
      console.log();
      nullCheck++;
    } else if (todoList[index].memo === '' && todoList[index].state === '완료') {
      console.log(`id: ${todoList[index].id}`);
      console.log(`title: ${todoList[index].title}`);
      console.log(`state: ${todoList[index].state}`);
      console.log();
      nullCheck++;
    }
  }
  if (nullCheck === 0) {
    console.log('완료된 Todo가 없습니다.\n');
  }
}

function showNoCheckedTodo(): void {
  let nullCheck: number = 0;
  console.log('===== 미완료 Todo =====');
  for (let index = 0; index < todoList.length; index++) {
    if (todoList[index].memo !== '' && todoList[index].state === '미완료') {
      console.log(`id: ${todoList[index].id}`);
      console.log(`title: ${todoList[index].title}`);
      console.log(`state: ${todoList[index].state}`);
      console.log(`memo: ${todoList[index].memo}`);
      console.log();
      nullCheck++;
    } else if (todoList[index].memo === '' && todoList[index].state === '미완료') {
      console.log(`id: ${todoList[index].id}`);
      console.log(`title: ${todoList[index].title}`);
      console.log(`state: ${todoList[index].state}`);
      console.log();
      nullCheck++;
    }
  }
  if (nullCheck === 0) {
    console.log('미완료된 Todo가 없습니다.\n');
  }
}

async function showTodo() {
  if (todoList.length === 0) {
    console.log('등록된 할 일이 없습니다.\n');
    return;
  }
  while (true) {
    console.log('===== Todo 조회 =====');
    const choice: string = (
      await rl.question('1.전체 보기   2.미완료 보기   3.완료 보기\nchoice: ')
    ).trim();
    if (choice === '1') {
      console.log();
      showAllTodo();
    } else if (choice === '2') {
      console.log();
      showNoCheckedTodo();
    } else if (choice === '3') {
      console.log();
      showCheckedTodo();
    } else {
      console.log('올바른 입력이 아닙니다. 다시 선택하세요.\n');
      continue;
    }
    break;
  }
}

async function checkTodo() {
  console.log('===== 완료 처리 =====');
  let choice: string;
  while (true) {
    choice = await rl.question('상태를 완료로 변경할 Todo의 id를 입력해 주세요.\ninput: ');
    if (Number(choice) >= todoList.length || Number(choice) < 0) {
      console.log('존재하지 않는 id 입니다.');
      continue;
    } else if (todoList[Number(choice)].state === '완료') {
      console.log('이미 완료된 Todo입니다.');
    }
    break;
  }
  console.log();
  todoList[Number(choice)].state = '완료';
}

async function main() {
  while (true) {
    const choice = await rl.question('===== MENU =====\n1. Todo추가   2.Todo조회   3.완료 처리   0.종료\nchoice: ');
    if (choice === '1') {
      console.log();
      await createTodo();
      continue;
    } else if (choice === '2') {
      console.log();
      await showTodo();
      continue;
    } else if (choice === '3') {
      console.log();
      await checkTodo();
      continue;
    } else if (choice === '0') {
      break;
    } else {
      console.log('잘못된 입력입니다. 다시 선택하세요.\n');
      continue;
    }
  }
  rl.close();
  return;
}

main();
