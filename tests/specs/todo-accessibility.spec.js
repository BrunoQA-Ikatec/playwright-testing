const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const TodoPage = require('../pages/TodoPage');

test.describe('TodoMVC Accessibility Tests', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.navigate();
  });

  test('should check for accessibility violations', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa']) // Verifica conformidade com WCAG 2.0/2.1 A e AA
      .analyze();

    // Loga as violações para depuração
    if (results.violations.length > 0) {
      console.log('Accessibility violations:', results.violations);
    }

    // Verifica apenas violações críticas ou graves
    const criticalViolations = results.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );
    expect(criticalViolations.length).toBe(0);
  });
});