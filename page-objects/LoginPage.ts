import { Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'
import ENV from "../utils/env"

export class LoginPage extends AbstractPage {
readonly usernameInput: Locator
readonly passwordInput: Locator
readonly loginBtn: Locator

constructor (page: Page){
  super(page)
  this.usernameInput = page.locator('#email')
  this.passwordInput = page.locator('#password')
  this.loginBtn = page.locator('#loginBtn')
}

async visit(){
  await this.page.goto(ENV.BASE_URL)
}

async login(){
    await this.usernameInput.type(ENV.USERNAME)
    await this.passwordInput.type(ENV.PASSWORD)
    await this.loginBtn.click()
  }

}