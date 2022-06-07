

const todoReducer = (state = '', action) => {
 
    switch(action.type) {
      case 'ADD_TODO': return action.payload;
      case 'DELETE_ITEM': return action.payload;
      case 'UPDATE_ITEM': return action.payload;
      default: return state;
    }
}
export default todoReducer