import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',

  use: {
    baseURL: 'http://localhost:8100',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  webServer: {
    command: 'ionic serve --no-open',
    url: 'http://localhost:8100',
    reuseExistingServer: true,
    timeout: 120000
  }
});