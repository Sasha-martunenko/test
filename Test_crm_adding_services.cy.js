describe("Sign in 'Integrica' website and add services, Examples", ()=>{
    const Sign_in_btn = ('.header__link')
    const Input_email = ('#login_email_input')
    const Input_password = ('#login_password_input')
    const Sign_in_end_btn = ('.btn')
    const Services_button = (':nth-child(10) > .m-menu__link')
    const Add_services_btn = ('.m-portlet__head-tools > .btn')
    const Input_title_of_services = ('#service_title')
    const Input_name_category_of_service  = ('#service-settings-form > :nth-child(1) > :nth-child(2) > .select-item-wrapper > .multiselect > .multiselect__tags')
    const Input_service_price = ('#service_min_price')
    const Input_cost_price = ('#service_cost_price')
    const Add_button = ('.modal.show > .modal-dialog > .modal-content > .modal-footer > .btn')
    const Create_new_category_btn = ('Депіляція')
    it("All test", ()=>{
        cy.viewport(1720, 980)
        cy.visit('https://integrica.com.ua/')
        cy.get(Sign_in_btn).click()
        cy.get(Input_email).type(Cypress.env('usermail'))
        cy.get(Input_password).type(Cypress.env('password'))
        cy.get(Sign_in_end_btn).click()
        cy.get(Services_button).click()
        cy.get(Add_services_btn).click()
        cy.get(Input_title_of_services).type(Cypress.env('title_services'))
        cy.get(Input_name_category_of_service).type(Cypress.env('name_category'))
        cy.contains(Create_new_category_btn).should('be.visible').click()
        cy.get(Input_service_price).clear().type('1500')
        cy.get(Input_cost_price).clear().type('500')
        cy.get(Add_button).click()
    })
})