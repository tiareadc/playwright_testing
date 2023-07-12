import { test, expect, Page } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'

test.describe('e2e login', () => {
  let page: Page
  let loginPage: LoginPage

  test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
    loginPage = new LoginPage(page)
    await loginPage.visit()
  })

  test('Login successfullly', async () => {
    await loginPage.login()
    const logOutNavbar = page.locator('#logout2')
    await expect(logOutNavbar).toBeVisible()
  })

  test.afterAll(async () => {
    await page.close();
  })
  
})