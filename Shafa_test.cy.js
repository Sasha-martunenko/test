const { Given,When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const Change_Language = ('.XnZKM8ymSoMwxqHKYxT3')
const Sign_in_btn = ('._1C8R7Ed8PZh8800Q5y1A > [href="/uk/login"]')
const Input_user_phone = (':nth-child(2) > .Fijv8ChRIU30cAzthBF7')
const Input_password = (':nth-child(4) > .Fijv8ChRIU30cAzthBF7')
const Sign_in_btn_again = ('.v0Mx_P3TVyxStZK-mPQB')
const Profile_panel = ('._1onCmMty-awZVo2WdHGN')
const Items_btn = ('[href="/uk/my/clothes"]')
const Add_product = ('.Ncu7oXWgq_vqjCRP9O0E > .v0Mx_P3TVyxStZK-mPQB')
const Photo_upload_button = ('.b-add-product__button-wrapper > .b-button')
const Add_photo_btn = (':nth-child(1) > .b-image-upload___item-inner > #upload-img')
const Input_product_name = ('#product-name')
const Input_dropuct_description = ('#product-description')
const Product_condition = ('#product-condition > .css-1udli2t-control')
const Choice_product_condition = ('#react-select-2-option-0')
const Choice_section = (':nth-child(4) > .b-info-columns > :nth-child(2)')
const Input_brand_of_product = (':nth-child(2) > .css-dyr6gj-container > .css-1udli2t-control > .css-1hwfws3')
const Choice_brend = ('#react-select-3-option-0')
const Choice_first_shade = (':nth-child(1) > .b-choose-color__color')
const Choice_second_shade = (':nth-child(2) > .b-choose-color__color')
const Input_number_of_product = ('.b-product-count__left_part > .b-info-columns__left-part > .b-form-input')
const Input_product_price = ('#price')
const Add_product_button = ('.b-add-product__footer > .b-button')
const Choice_category = ('.b-choose-category__list > :nth-child(1)')
const Choice_correct_category = (':nth-child(2) > .b-tree > .b-tree__link')
const Choice_size = ('._3d9l71nl_6Tr6uNZZ9GJ > :nth-child(3)')
const Click_on_my_product = ('._1YGuRJhMUXWU-IW6GMuk')
const Name_of_product = ('.b-product__title')
const Brand_title = ('.b-product-brand__title')
const Size = ('.b-properties__size')
const Main_info = ('.b-product__main-info')
const Price = ('.b-product__price')
const Category = ('.b-category') 
function Qa () {}


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
}),
When("As a usrre i triyng adding product with all necessary data {string},{string},{string},{string},{string}", (product_name,product_description,number_of_product,product_price,name_brend)=>{
    cy.get(Add_product).click()
    cy.get(Change_Language).click()
    cy.get(Photo_upload_button).click()
    cy.get(Add_photo_btn).selectFile('cypress/fixtures/images/image.jpg',{action: 'drag-drop'})
    cy.get(Input_product_name).type(product_name)
    cy.get(Input_dropuct_description).type(product_description)
    cy.get(Product_condition).click()
    cy.get(Choice_product_condition).click()
    cy.get(Input_brand_of_product).type(name_brend)
    cy.get(Choice_brend).click()
    cy.get(Choice_section).click()
    cy.get(Choice_category).click()
    cy.get(Choice_correct_category).click()
    cy.get(Choice_size).click()
    cy.get(Choice_first_shade).click()
    cy.get(Choice_second_shade).click()
    cy.get(Input_number_of_product).clear().type(number_of_product)
    cy.get(Input_product_price).type(product_price)
    cy.get(Add_product_button).click()
    cy.wait(3000)
    cy.get(Profile_panel).click()
    cy.get(Items_btn).should('be.visible').click({scrollBehavior:false})
    cy.get(Click_on_my_product).click()
})


Then("Check on truth", ()=>{    
    expect(true).to.be.true
})

const a = {p:1, c:2}
Then("Check that test function have correct own property",()=>{
    expect(a).to.have.ownProperty('p', 1)
})

Then("Check that test function have correct own property descrtiption",()=>{
    expect(a).to.have.ownPropertyDescriptor('p')
})

Then("Check that test function have correct keys",()=>{
    expect(a).to.have.keys('p','c')
})

Then("Check that test function to throw TypeError",()=>{
    const Foo = () =>{
        throw TypeError()
    }
    expect(Foo).to.throw()
})

var value = 1
Then("Check that value in test function to be one of a list of numbers",()=>{
    expect(value).to.be.oneOf([1,2,3])
})

var value = 1
Then("Check that value in test function close to a two numbers",()=>{
    expect(value).to.closeTo(0.5, 1)
})

var value = 1;
Then("Check that value in test function be greater than correct number",()=>{
    expect(value).to.be.greaterThan(0.5)
})

var value = 1
Then("Check that value in test function be at least this number",()=>{
    expect(value).to.be.at.least(1)
})

var value = 1
Then("Check that value in test function be within two numbers",()=>{
    expect(value).to.be.within(0.9,1.1)
})

var value = 1
,AddTwo = function() {value +=2}
,GetValue = function() {return value};
Then("Check that after performing first test function,the other increases",()=>{
    expect(AddTwo).to.increase(GetValue).by(2)
})

var second_value = 1
,Addtwo = function() {second_value -=2}
,Getvalue = function() {return second_value};
Then("Check that after performing first test function,the other decreases",()=>{
    expect(Addtwo).to.decrease(Getvalue).by(2)
})

var product = ''
 ,AddProduct = function() {product += '.'}
 ,GetProduct = function() {return product};

Then("Check that after performing first test function,the other change",()=>{
    expect(AddProduct).to.change(GetProduct)
})

Then("Check that test function respond to correct data",()=>{
    Qa.prototype.junior = function () {}
    expect(Qa).to.respondTo('junior')
})

Then("Check that test function itself respond to correct data but don`t respond to first data",()=>{
    Qa.minor = function () {}
    expect(Qa).itself.to.respondTo('minor').but.not.respondTo('junior')
})

Then("Check that test function satisfy to correct number",()=>{
    expect(1).to.satisfy(function(num) {
        return num > 0
    }) 
})

Then("Check that name of created product not be undefined",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div[0]).to.not.be.undefined
    })
})

Then("Check that name of created product have correct property",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div[0]).to.have.property('title')
    })
})

Then("Check that name of created product have correct deep property",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div[0]).to.have.deep.property('title')
    })
})

Then("Check that name of created product be ok",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div.text()).to.be.ok
    })
})

Then("Check that name of created product have correct lenght of at most",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div.text()).to.have.length.of.at.most(12)
    })
})

Then("Check that name of created product have correct kenght of",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div).to.have.lengthOf(1)
    })
})

Then("Check that name of created product to equal",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div[0]).to.equal($div[0])
    })
})

Then("Check that name of created product to not equal some data",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div.text()).to.not.equal('Куртка')
    })
})

Then("Check that name of created product to deep equal",()=>{
    cy.get(Name_of_product).then($div =>{
        expect($div[0]).to.deep.equal($div[0])
    })
})

Then("Check that size of created product not be null",()=>{
    cy.get(Size).then($div =>{
        expect($div).to.not.be.null
    })
})

Then("Check that size of created product to exist",()=>{
    cy.get(Size).then($div =>{
        expect($div).to.exist
    })
})

Then("Check that size of created product have ordered members",()=>{
    cy.get(Size).then($div =>{
        expect([38,46]).to.have.ordered.members([38,46])
    })
})

Then("Check that size of created product include correct number",()=>{
    cy.get(Size).then($div =>{
        expect($div.text()).to.include(38)
    })
})

Then("Check that size of created product include second correct number",()=>{
    cy.get(Size).then($div =>{
        expect($div.text()).to.include(46)
    })
})

Then("Check that price of created product not be false",()=>{
    cy.get(Price).then($span=>{
        expect($span).to.not.be.false
    })
})

Then("Check that price of created product to equal",()=>{
    cy.get(Price).then($span=>{
        expect($span[0]).to.be.equal($span[0])
    })
})

Then("Check that name of brand of created product to deep equal",()=>{
    cy.get(Brand_title).then($div =>{
        expect($div.text()).to.deep.equal($div.text())
    })
})

Then("Check that classname of brand of created product to match",()=>{
    cy.get(Brand_title).then($div =>{
        const className = $div[0].className
        expect(className).to.match(/-brand/)
    })
})

Then("Check that category of created product be a string",()=>{
    cy.get(Category).then($div =>{
        expect($div.text()).to.be.a('string')
    })
})

Then("Check that category of created product be one of a list with containers of element of category",()=>{
    cy.get(Category).then($div =>{
        expect($div[0]).to.be.oneOf([$div,$div[0]])
    })
})
