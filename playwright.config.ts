import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

    testMatch:  /.*.ts/,
    timeout: 30000,
    retries: 0,
    testDir: 'tests',
    workers: 1,
    use: {
        headless: true,
        viewport: { width: 1440, height: 900},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'only-on-failure',
        launchOptions: {
            slowMo: 50,
        }
    },
    projects: [
        {
            name: 'E2E',
            use: {browserName: 'chromium'},
        },
    ]
};

export default config;