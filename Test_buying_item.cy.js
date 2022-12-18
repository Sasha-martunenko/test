describe("Sign in account and buying item", ()=>{
    const Input_user_phone = ('.login-page > .login-box > .login-tabs > .login-tabs__content > .active > .login-form > #loginForm > .standard-login-box > :nth-child(2) > .focusbox > #userEmail')
    const Input_user_password = ('.login-page > .login-box > .login-tabs > .login-tabs__content > .active > .login-form > #loginForm > .standard-login-box > :nth-child(3) > .focusbox > [data-cy="login_input_password"]')
    const Click_sign_in_button = ('.login-page > .login-box > .login-tabs > .login-tabs__content > .active > .login-form > #loginForm > .standard-login-box > #se_userLogin')
    const Click_on_close_alert_btn = ('button[class="css-spwpto"]')
    const Click_on_olx_logo = ('.css-1kpgv52')
    const Input_name_of_item = ('[data-cy="homepage_input_textsearch"]')
    const Click_on_search_btn = ('[data-cy="homepage_button_search"]')
    const Click_on_corect_item = (':nth-child(10) > .css-rc5s2u > .css-qfzx1y > .css-1venxj6 > .css-1apmciz > .css-u2ayx9 > .css-1pvd0aj-Text')
    const Buying_item = ('[data-test="button-buy"]')

    it("Sign in account and buying item", ()=>{
        cy.visit("https://www.olx.ua/uk/account/?ref%5B0%5D%5Baction%5D=myaccount&ref%5B0%5D%5Bmethod%5D=index")
        cy.viewport(1720, 980)
        cy.get(Input_user_phone).type("0687664945")
        cy.get(Input_user_password).type("Luhude69")
        cy.get(Click_sign_in_button).click()
        cy.wait(8000)
        cy.get(Click_on_close_alert_btn).click()
        cy.get(Click_on_olx_logo).click()
        cy.get(Input_name_of_item).type("asus nitro 5")
        cy.get(Click_on_search_btn).click()
        cy.get(Click_on_corect_item).click()
        cy.get(Buying_item).click()
    })
}) 
  