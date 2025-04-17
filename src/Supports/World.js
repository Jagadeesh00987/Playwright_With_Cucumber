require('dotenv').config();
const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.loginPageform = null;
    this.signup = null;
    this.product= null;
    this.search = null;
    this.filter=null;
    this.baseUrl = process.env.BASE_URL;
    this.username = process.env.LOGIN_USER;
    this.password = process.env.LOGIN_PASS;
  }
}

setWorldConstructor(CustomWorld);