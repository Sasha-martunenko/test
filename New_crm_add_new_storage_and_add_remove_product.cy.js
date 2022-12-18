describe("Sign in 'Integrica' website,add storage and add remove product operation, Examples", ()=>{
    const Sign_in_btn = ('.header__link')
    const Input_email = ('#login_email_input')
    const Input_password = ('#login_password_input')
    const Sign_in_end_btn = ('.btn')
    const Show_more_on_storage = (':nth-child(7) > [href="#"] > .m-menu__ver-arrow')
    const Storage_button = ('.m-menu__item--open > .m-menu__submenu > .m-menu__subnav > :nth-child(5) > .m-menu__link > .m-menu__link-text')
    const Add_storage_button = ('.m-portlet__head-tools > .btn')
    const Input_name_of_storage  = ('#warehouse_title')
    const Employee_selection_btn = (':nth-child(3) > .select-item-wrapper > .multiselect > .multiselect__select')
    const Employee_attachment_btn = ('Олександр')
    const Add_storage_end_btn = ('.show > .modal-dialog > .modal-content > .modal-footer > .btn')
    const Operations_button = ('.m-menu__item--open > .m-menu__submenu > .m-menu__subnav > :nth-child(2) > .m-menu__link > .m-menu__link-text')
    const Choice_operatoins  = ('#client-actions')
    const Click_on_correct_operation = ('.dropdown > .dropdown-menu > :nth-child(4)')
    const Choise_product_button = ('#product-operations-form > :nth-child(1) > .m-alert__text > .row > .col-12 > .select-item-wrapper > .multiselect > .multiselect__select')
    const Click_on_correct_product = ('Парфумована вода для жінок Lacoste Pour Femme 50 мл / RFH-819582')
    const Input_number_of_product = (':nth-child(3) > .input-group > .form-control')
    const From_storage_button =('.m-alert__text > :nth-child(1) > .select-item-wrapper > .multiselect > .multiselect__select')
    const Click_on_first_storage = ('//*[@id="product-operations-form"]/div[2]/div/div[1]/div/div/div[3]/ul/li[2]/span')
    const To_storage_button = ('.mt-3 > .select-item-wrapper > .multiselect > .multiselect__select') 
    const Click_on_second_storage = ('//*[@id="product-operations-form"]/div[2]/div/div[2]/div/div/div[3]/ul/li[1]/span')
    const Clikc_on_remove_button = ('.show > .modal-dialog > .modal-content > .modal-footer > .btn')
    it("All test", ()=>{
        cy.viewport(1720, 980)
        cy.visit('https://integrica.com.ua/')
        cy.get(Sign_in_btn).click()
        cy.get(Input_email).type(Cypress.env('usermail'))
        cy.get(Input_password).type(Cypress.env('password'))
        cy.get(Sign_in_end_btn).click()
        cy.get(Show_more_on_storage).click()
        cy.get(Storage_button).click()
        cy.get(Add_storage_button).click()
        cy.get(Input_name_of_storage).type(Cypress.env('new_storage'))
        cy.get(Employee_selection_btn).click()
        cy.contains(Employee_attachment_btn).should('be.visible').click()
        cy.get(Add_storage_end_btn).click()
        cy.get(Operations_button).click()
        cy.get(Choice_operatoins).click()
        cy.get(Click_on_correct_operation).click()
        cy.get(Choise_product_button).click()
        cy.contains(Click_on_correct_product).should('be.visible').click()
        cy.get(Input_number_of_product).clear().type('20')
        cy.get(From_storage_button).click()
        cy.xpath(Click_on_first_storage).click()
        cy.get(To_storage_button).click()
        cy.xpath(Click_on_second_storage).click()
        cy.get(Clikc_on_remove_button).click()
    })
})