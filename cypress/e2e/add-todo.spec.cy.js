import todoListPage from '../pageObjects/TodoListPage';

describe('Add a new todo', () => {
  it('Adds a new todo to the list', () => {
    todoListPage.visit();

    const todo = 'New Todo';
    todoListPage.addTodoItem(todo);

    todoListPage.getTodoListItem().should('contain', todo);
  });
});