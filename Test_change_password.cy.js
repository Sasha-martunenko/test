describe("Sign in account and change paswword", ()=>{
    const Input_user_phone = ('.login-page > .login-box > .login-tabs > .login-tabs__content > .active > .login-form > #loginForm > .standard-login-box > :nth-child(2) > .focusbox > #userEmail')
    const Input_user_password = ('.login-page > .login-box > .login-tabs > .login-tabs__content > .active > .login-form > #loginForm > .standard-login-box > :nth-child(3) > .focusbox > [data-cy="login_input_password"]')
    const Click_sign_in_button = ('.login-page > .login-box > .login-tabs > .login-tabs__content > .active > .login-form > #loginForm > .standard-login-box > #se_userLogin')
    const Click_on_close_alert_btn = ('button[class="css-spwpto"]')
    const Click_on_olx_logo = ('.css-1kpgv52')
    const Click_showe_more = ('#topLoginLink')
    const Click_on_settings_btn = ('#login-box-settings')
    const Change_password_btn = ('[data-id="password"]')
    const Input_current_password = ('#se_chPassword')
    const Input_new_password = ('#se_chRepeatPassword')
    const Click_save_change_password = ('#passwordInput')

    it("Sign in account and change password", ()=>{
        cy.visit("https://www.olx.ua/uk/account/?ref%5B0%5D%5Baction%5D=myaccount&ref%5B0%5D%5Bmethod%5D=index")
        cy.viewport(1720, 980)
        cy.get(Input_user_phone).type("0687664945")
        cy.get(Input_user_password).type("Luhude69")
        cy.get(Click_sign_in_button).click()
        cy.wait(8000)
        cy.get(Click_on_close_alert_btn).click()
        cy.get(Click_on_olx_logo).click()
        cy.get(Click_showe_more).trigger('mouseover')
        cy.get(Click_on_settings_btn).click()
        cy.get(Change_password_btn).click()
        cy.get(Input_current_password).type('Luhude6900')
        cy.get(Input_new_password).type('Luhude69')
        cy.get(Click_save_change_password).click()
    }) 
})