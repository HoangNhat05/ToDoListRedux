

const todoReducer = (state = '', action) => {
 // let todoList = [action.payload];
     //console.log(action);
    switch(action.type) {
      case 'ADD_TODO': return action.payload;
      default: return state;
    }
}
export default todoReducer