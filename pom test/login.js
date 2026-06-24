exports.login =class login{
      constructor(page){
        this.page= page,
        this.loginLink = ".ico-login",
        this.mail = "#Email",
        this.pwd = "#Password",
        this.loginButton = ".login-button"

      }

  //methods
  async gotopage(){
    await this.page.goto("https://demowebshop.tricentis.com/login")

  }
  //login page
  async loginpage(email , password){
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.mail).fill(email);
    await this.page.locator(this.pwd).fill(password);
    await this.page.locator(this.loginButton).click();


  }

}