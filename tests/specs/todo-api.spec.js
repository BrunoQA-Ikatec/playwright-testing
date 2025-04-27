const { test, expect } = require('@playwright/test');

test.describe('TodoMVC API Simulation', () => {
  test('should intercept and mock script response', async ({ page }) => {
    // Intercepta solicitações de scripts JavaScript
    await page.route('**/*.js', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/javascript',
        body: 'console.log("Mocked script");',
      });
    });

    // Sincroniza navegação com interceptação
    const [response] = await Promise.all([
      page.waitForResponse('**/*.js'),
      page.goto('https://todomvc.com/examples/react/dist/'),
    ]);

    // Verifica se a solicitação foi interceptada
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('Mocked script');
  });
});