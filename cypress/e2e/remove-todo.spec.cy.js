import todoListPage from '../pageObjects/TodoListPage';

describe('Remove a todo', () => {
    it('Removes a todo from the list', () => {
        todoListPage.visit();

        const todo = 'New Todo';
        todoListPage.addTodoItem(todo);

        todoListPage.removeTodoItem();

        todoListPage.getTodoListItem().should('not.exist');
    });
});