import { legacy_createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// store : data(state)를 넣는곳 , data 넣기위한 장소 생성
// reducer는 function 이며 data를 수정하는곳
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

// data 저장하는곳
const countStore = legacy_createStore(countModifier);

// dispatch를 통해 action을 전달할수 있음
add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

const onChange = () => {
  number.innerText = countStore.getState();
  console.log(countStore.getState());
};

// subscribe : store 안에 있는 변화를 알 수 있게 해줌
countStore.subscribe(onChange);
