class TodoPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://todomvc.com/examples/react/dist/';
    this.inputField = 'input[class="new-todo"]';
    this.todoList = 'section.todoapp ul.todo-list';
    this.todoItems = 'section.todoapp ul.todo-list li';
    this.completeCheckbox = 'input[class="toggle"]';
    this.deleteButton = 'button[class="destroy"]';
    this.clearCompletedButton = 'button[class="clear-completed"]';
    this.todoCount = 'span[class="todo-count"]';
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async addTodo(text) {
    await this.page.fill(this.inputField, text);
    await this.page.press(this.inputField, 'Enter');
  }

  async getTodoItems() {
    return await this.page.$$(this.todoItems);
  }

  async completeTodo(index) {
    const checkboxes = await this.page.$$(this.completeCheckbox);
    await checkboxes[index].click();
  }

  async deleteTodo(index) {
    const todos = await this.getTodoItems();
    await todos[index].hover();
    const deleteButtons = await this.page.$$(this.deleteButton);
    await deleteButtons[index].click();
  }

  async clearCompleted() {
    await this.page.click(this.clearCompletedButton);
  }

  async getTodoCount() {
    const countText = await this.page.textContent(this.todoCount);
    return parseInt(countText.match(/\d+/)[0], 10);
  }

  async getPageTitle() {
    return await this.page.title();
  }
}

module.exports = TodoPage;