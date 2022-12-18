const { Given,When } = require("@badeball/cypress-cucumber-preprocessor");
const Change_Language = ('.XnZKM8ymSoMwxqHKYxT3')
const Sign_in_btn = ('._1C8R7Ed8PZh8800Q5y1A > [href="/uk/login"]')
const Input_user_phone = (':nth-child(2) > .Fijv8ChRIU30cAzthBF7')
const Input_password = (':nth-child(4) > .Fijv8ChRIU30cAzthBF7')
const Sign_in_btn_again = ('.v0Mx_P3TVyxStZK-mPQB')
const Profile_panel = ('._1onCmMty-awZVo2WdHGN')
const Items_btn = ('[href="/uk/my/clothes"]')
const Click_on_my_product = ('._1YGuRJhMUXWU-IW6GMuk')
const Name_of_product = ('.b-product__title')
const Brand_title = ('.b-product-brand__title')
const Size = ('.b-properties__size')
const Main_info = ('.b-product__main-info')
const Price = ('.b-product__price')
const Category = ('.b-category')
const Colors = (':nth-child(2) > .b-properties__value > .b-properties__list')
const a = {p:1, c:2}
const Foo = () =>{
    throw TypeError()
}
function Qa () {} 
var product = ''
 ,AddProduct = function() {product += '.'}
 ,GetProduct = function() {return product};
var value = 1
,AddTwo = function() {value +=2}
,GetValue = function() {return value};
var second_value = 1
,Addtwo = function() {second_value -=2}
,Getvalue = function() {return second_value};

Given("I as a logged user,and input all necessary data {string},{string}", (user_email,password)=>{
    cy.visit('https://shafa.ua/')
    cy.viewport(1720,800)
    cy.get(Sign_in_btn).click()
    cy.get(Input_user_phone).type(user_email)
    cy.get(Input_password).type(password)
    cy.get(Sign_in_btn_again).click()
    cy.wait(2000)
    cy.get(Profile_panel).click()
    cy.get(Items_btn).should('be.visible').click({scrollBehavior:false})
    cy.wait(3000)
    cy.get(Click_on_my_product).click()
}),
When("Start assertions",()=>{
    cy.get(Main_info).then(x =>{
        expect(true).to.be.true
    })
        expect(a).to.have.ownProperty('p', 1)
        expect(a).to.have.ownPropertyDescriptor('p')
        expect(a).to.have.keys('p','c')
        expect(Foo).to.throw()
        expect(AddTwo).to.increase(GetValue).by(2)
        expect(Addtwo).to.decrease(Getvalue).by(2)
        expect(AddProduct).to.change(GetProduct)
        Qa.prototype.junior = function () {}
        Qa.minor = function () {}
        expect(Qa).to.respondTo('junior')
        expect(Qa).itself.to.respondTo('minor').but.not.respondTo('junior')
        expect(1).to.satisfy(function(num) {
            return num > 0
        }) 

    cy.get(Name_of_product).then($div =>{
        expect($div[0]).to.not.be.undefined
        expect($div[0]).to.have.property('title')
        expect($div[0]).to.have.deep.property('title')
        expect($div.text()).to.be.ok
        expect($div.text()).to.have.length.of.at.most(12)
        expect($div).to.have.lengthOf(1)
        expect($div[0]).to.equal($div[0])
        expect($div.text()).to.not.equal('Куртка')
        expect($div[0]).to.deep.equal($div[0])

    })
    cy.get(Size).then($div =>{
        expect($div).to.not.be.null
        expect($div).to.exist
        expect([38,46]).to.have.ordered.members([38,46])
        expect($div.text()).to.include(38)
        expect($div.text()).to.include(46)
    })
    cy.get(Price).then($span=>{
        expect($span).to.not.be.false
        expect($span[0]).to.be.equal($span[0])
        expect(2500).to.be.oneOf([24,2500,2501])
        expect(2500).to.closeTo(2499, 1)
        expect(2500).to.be.greaterThan(1000)
        expect(2500).to.be.at.least(2500)
        expect(2500).to.be.within(2499,2501)
    })
    cy.get(Brand_title).then($div =>{
        expect($div.text()).to.deep.equal($div.text())
        const className = $div[0].className
        expect(className).to.match(/-brand/)
    })
    cy.get(Category).then($div =>{
        expect($div.text()).to.be.a('string')
        expect($div[0]).to.be.oneOf([$div,$div[0]])
    })
    
})