const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
// given
const Sign_in_btn = ('.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]')
const Input_user_email = ('#user')
const Login_button = ('#login')
const Input_password = ('#password')
const Login_btn = ('#login-submit')
// when
const Add_user_btn = (':nth-child(4) > .rta9kchj3lSXQk')
const Invite_users_btn = ('.js-invite-team-members')
const Input_name_user = ('.autocomplete-input')
const Click_on_correct_user = (':nth-child(5) > .member-container')
const Invite_correct_user_btn = ('.JbmVa7jDu50Wau')
const First_user = ('Test')
// when2
const Click_on_second_correct_user = ('TEST TEST')
const Invite_second_correct_user_btn = ('.JbmVa7jDu50Wau')
const Second_user = ('TEST TEST')
// when3
const Boards_button = ('.YhKKsoolp0DoaF > [href="/w/user19224570"]')
const Click_on_correct_board = ('.board-tile-details')
const Add_cart_to_need_to_make= (':nth-child(1) > .list > .card-composer-container > .open-card-composer')
const Input_name_cart = ('.list-card-composer-textarea')
const Settings_of_cart = ('.mod-right > .icon-lg')
const Add_users_btn = ('.js-mem-selector')
const Show_all_users = ('.subtle')
const Click_on_first_user = ('.js-org-members > .pop-over-member-list > :nth-child(1) > .name')
const Add_cart_btn = (':nth-child(1) > .nch-button')
const Add_second_cart = (':nth-child(2) > .list > .card-composer-container > .open-card-composer')
const Input_name_second_cart = ('.list-card-composer-textarea')
const Settings_of_second_cart = ('.mod-right > .icon-lg')
const Add_users_second_btn = ('.js-mem-selector')
const Click_on_second_user = ('.js-org-members > .pop-over-member-list > .item > .name')
// then
const Click_on_first_cart = (':nth-child(1) > .list > .list-cards > .list-card > .list-card-details')
const Click_on_users_btn = ('.js-change-card-members')
const Active_user = ('.active > .name')
const Clikc_on_second_cart = (':nth-child(2) > .list > .list-cards > .js-member-droppable > .list-card-details')
const Active_second_user = ('.active > .name')
const Close_active_user_panel = ('.pop-over-header-close-btn')
const Close_cart_btn = ('.icon-md')
const Close_second_active_user_panel = ('.pop-over-header-close-btn')
const Close_second_cart_btn = ('.icon-md')

Given("I as a logged user,and input all necessary data {string},{string}",(user_email,password)=>{
    cy.visit('https://trello.com/uk')
    cy.viewport(1720,800)
    cy.get(Sign_in_btn).click()

    cy.get(Input_user_email).type(user_email)
    cy.get(Login_button).click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.wait(3000)
    cy.get(Input_password).type(password)
    cy.get(Login_btn).click()
}),
When('As a user I am trying to send an invitation to a first user by name {string} I want to invite to my workspace',(users_name)=>{
  cy.get(Add_user_btn).click()
  cy.get(Invite_users_btn).click()
  cy.get(Input_name_user).type(users_name)
  cy.get(Click_on_correct_user).should('be.visible').click()
  cy.get(Invite_correct_user_btn).click()
  cy.reload()
  cy.contains(First_user).should('be.visible')
}),
When('As a user I am trying to send an invitation to a second user by name {string} I want to invite to my workspace',(second_user_name)=>{
  cy.get(Invite_users_btn).click()
  cy.get(Input_name_user).type(second_user_name)
  cy.contains(Click_on_second_correct_user).click()
  cy.get(Invite_second_correct_user_btn).click()
  cy.reload()
  cy.contains(Second_user).should('be.visible')
}),
When('As a user I am trying to create two cards for my board and add one user to each {string},{string}',(name_cart,name_second_cart)=>{
  cy.get(Boards_button).click()
  cy.get(Click_on_correct_board).click()
  cy.get(Add_cart_to_need_to_make).click()
  cy.get(Input_name_cart).type(name_cart)
  cy.get(Settings_of_cart).click()
  cy.get(Add_users_btn).click()
  cy.get(Show_all_users).click()
  cy.get(Click_on_first_user).should('be.visible').click()
  cy.get(Add_cart_btn).click()
  // second cart with one user creat
  cy.get(Add_second_cart).click()
  cy.get(Input_name_second_cart).type(name_second_cart)
  cy.get(Settings_of_second_cart).click()
  cy.get(Add_users_second_btn).click()
  cy.get(Show_all_users).click()
  cy.get(Click_on_second_user).should('be.visible').click()
  cy.get(Add_cart_btn).click()
}),
Then('As a user, I check that the users I added to the cards have been added',()=>{
  cy.get(Click_on_first_cart).click()
  cy.get(Click_on_users_btn).click()
  cy.get(Active_user).should('be.visible','have.class', 'icon-sm icon-check checked-icon')
  cy.get(Close_active_user_panel).click()
  cy.get(Close_cart_btn).click()
  cy.get(Clikc_on_second_cart).click()
  cy.get(Click_on_users_btn).click()
  cy.get(Active_second_user).should('be.visible','have.class','icon-sm icon-check checked-icon')
  cy.get(Close_second_active_user_panel).click()
  cy.get(Close_second_cart_btn).click()
})