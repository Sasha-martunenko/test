describe("Sign in 'Integrica' website,replenishing the client`s balance and check cash register, Examples", ()=>{
    const Sign_in_btn = ('.header__link')
    const Input_email = ('#login_email_input')
    const Input_password = ('#login_password_input')
    const Sign_in_end_btn = ('.btn')
    const Clients_button = ('.m-menu__nav > :nth-child(5) > .m-menu__link')
    const Settings_of_client = (':nth-child(1) > :nth-child(10) > .m-widget4__ext > .dropdown > .btn')
    const Replenishing_balance_btn = (':nth-child(1) > :nth-child(10) > .m-widget4__ext > .dropdown > .dropdown-menu > :nth-child(3)')
    const Input_sum = ('#account_sum')
    const Settings_of_second_client  = (':nth-child(2) > :nth-child(10) > .m-widget4__ext > .dropdown > .btn')
    const Replenishing_balance_second_btn = (':nth-child(2) > :nth-child(10) > .m-widget4__ext > .dropdown > .dropdown-menu > :nth-child(3)')
    const Save_button = ('.prioritized-modal > .modal-dialog > .modal-content > .modal-footer > .m-btn')
    const Cash_register_button = (':nth-child(8) > .m-menu__link')
    it("All test", ()=>{
        cy.viewport(1720, 980)
        cy.visit('https://integrica.com.ua/')
        cy.get(Sign_in_btn).click()
        cy.get(Input_email).type(Cypress.env('usermail'))
        cy.get(Input_password).type(Cypress.env('password'))
        cy.get(Sign_in_end_btn).click()
        cy.get(Clients_button).click()
        cy.get(Settings_of_client).click()
        cy.get(Replenishing_balance_btn).click()
        cy.get(Input_sum).type('5000')
        cy.get(Save_button).click()
        cy.get(Settings_of_second_client).click()
        cy.get(Replenishing_balance_second_btn).click()
        cy.get(Input_sum).type('5000')
        cy.get(Save_button).click()
        cy.get(Cash_register_button).click()
    })
})