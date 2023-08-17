import {createStore} from 'redux';

const initState = {
  counter:0,
  text:' ',
  list:[]
}

//액션타입
//미리 상수로 지정해놓기
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 함수 정의

function increase(){
  return{
    type: INCREASE
  }
}
const decrease = () => ({
    type:DECREASE
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = item => ({
  type:ADD_TO_LIST,
  item
})

//리듀서 만들기
//state의 기본값도 설정
function reducer(state=initState, action){
  switch(action.type){
    case INCREASE :
      return {
        //복제한번
        ...state,
        //객체 안에 요소를 재설정
        counter : state.counter + 1
      }

    case DECREASE :
      return {
        ...state,
        counter : state.counter - 1 
        }
    case CHANGE_TEXT :
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST :
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default :
    return state;
  }
}
const store = createStore(reducer);

console.log(store.getState());

//리스너는 스토어의 상태가 변경되면 호출

const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('마이크테스트'));
store.dispatch(addToList({id:1, text:'이거슨 입에서 나는 소리가 아니여'}));