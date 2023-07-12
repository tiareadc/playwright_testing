import { Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'
import ENV from "../utils/env"

export class LoginPage extends AbstractPage {
  readonly loginNavbar: Locator
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginBtn: Locator

  constructor (page: Page){
    super(page)
    this.loginNavbar = page.locator('#login2')
    this.usernameInput = page.locator('#loginusername')
    this.passwordInput = page.locator('#loginpassword')
    this.loginBtn = page.getByRole('button', { name: 'Log in' })
  }

  async visit(){
    await this.page.goto(ENV.BASE_URL)
  }

  async login(){
    await this.loginNavbar.click()
    await this.usernameInput.fill(ENV.USERNAME)
    await this.passwordInput.type(ENV.PASSWORD)
    await this.loginBtn.click()
  }
}