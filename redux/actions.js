

export const addTodoAction = (data) => {
    return{
        type: 'ADD_TODO',
        payload: data
    } 
  }
export const deleteAction = (data) => {
    return{
        type: 'DELETE_ITEM',
        payload: data
    } 
  }
export const updateAction = (data) => {
    return{
        type: 'UPDATE_ITEM',
        payload: data
    } 
  }  
