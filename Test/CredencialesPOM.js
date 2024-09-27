exports.loginPage=class loginPagePOM {
    
    constructor (page) {
        this.page=page
        this.username_texbox=page.getByPlaceholder('Username')
        this.password_texbox=page.getByPlaceholder('Password')
        this.login_button=page.getByRole('button', { name: 'Login'})
    }
     async goToLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     }

    async login(username,password) {
        await this.username_texbox.fill(username);
        await this.password_texbox.fill(password);
        await this.login_button.click();
    }
};