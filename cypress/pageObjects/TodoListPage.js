class TodoListPage {
    visit() {
        cy.visit('https://chinatu-todo-list.netlify.app/');
    }

    addTodoItem(todo) {
        cy.get('#todoInput').type(todo);
        cy.get("div[class=\'form\'] button").click();
    }

     getTodoListItem() {
        return cy.get("div[class='container'] div:nth-child(1) li:nth-child(1)");
    }

    removeTodoItem() {
        cy.get('#todoCheckBox').first().click();
    }

    // removeAllTodoItems() {
    //     cy.get('#remove-all-button').click();
    // }
}

export default new TodoListPage();
