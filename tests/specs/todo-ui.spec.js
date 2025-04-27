const { test, expect } = require('@playwright/test');
const TodoPage = require('../pages/TodoPage');

test.describe('TodoMVC UI Tests', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.navigate();
  });

  test('should display correct page title', async () => {
    const title = await todoPage.getPageTitle();
    expect(title).toBe('TodoMVC: React');
  });

  test('should display correct todo count', async () => {
    await todoPage.addTodo('Task 1');
    await todoPage.addTodo('Task 2');
    const count = await todoPage.getTodoCount();
    expect(count).toBe(2);
  });
});