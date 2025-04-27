const { test, expect } = require('@playwright/test');
const TodoPage = require('../pages/TodoPage');

test.describe('TodoMVC Functional Tests', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.navigate();
  });

  test('should add and complete a todo', async () => {
    await todoPage.addTodo('Learn Playwright');
    const todoItems = await todoPage.getTodoItems();
    expect(todoItems.length).toBe(1);

    await todoPage.completeTodo(0);
    const completed = await todoPage.page.$(`${todoPage.todoItems}.completed`);
    expect(completed).toBeTruthy();
  });

  test('should clear completed todos', async () => {
    await todoPage.addTodo('Task 1');
    await todoPage.addTodo('Task 2');
    await todoPage.completeTodo(0);
    await todoPage.clearCompleted();

    const todoItems = await todoPage.getTodoItems();
    expect(todoItems.length).toBe(1);
  });
});