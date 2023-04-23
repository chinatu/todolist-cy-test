import todoListPage from '../pageObjects/TodoListPage';

describe('Remove all todos', () => {
    it('Removes all todos from the list', () => {
        todoListPage.visit();

        const todos = ['New Todo 1', 'New Todo 2', 'New Todo 3'];
        todos.forEach(todo => {
            todoListPage.addTodoItem(todo);
        });

        todoListPage.removeTodoItem();
        todoListPage.removeTodoItem();
        todoListPage.removeTodoItem();


        todoListPage.getTodoListItem().should('not.exist');
    });
});