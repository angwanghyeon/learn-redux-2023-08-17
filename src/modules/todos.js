const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;
export const addTodo = text => ({
  type:ADD_TODO,
  todo : {
    id : nextId++,
    text
  }
});

export const toggleTodo = id => ({
  type:TOGGLE_TODO,
  id
})

const initState = [
  // {
  //   id:1,
  //   text:'예시',
  //   done:false
  // }
] ;

export default function todos(state=initState, action){
  switch(action.type){
    case ADD_TODO : 
      return state.push(action.todo);
    case TOGGLE_TODO :
      return state.map(
        todo => todo.id === action.id ? 
        {...todo, done:!todo.done} : todo
      )
    default :
      return state;
  }
}