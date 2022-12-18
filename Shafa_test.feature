Feature: Feature crm
    User as an administrator can add other users and clients
    Scenario: Sign in account,add product and check that this product been created with all assertions
    Given I as a logged user,and input all necessary data '<user_email>','<password>'
    When As a usrre i triyng adding product with all necessary data '<product_name>','<product_description>','<number_of_product>','<product_price>','<name_brend>'
    Then Check on truth
    Then Check that test function have correct own property
    Then Check that test function have correct own property descrtiption
    Then Check that test function have correct keys
    Then Check that test function to throw TypeError
    Then Check that value in test function to be one of a list of numbers
    Then Check that value in test function close to a two numbers 
    Then Check that value in test function be greater than correct number 
    Then Check that value in test function be at least this number
    Then Check that value in test function be within two numbers
    Then Check that after performing first test function,the other increases
    Then Check that after performing first test function,the other decreases
    Then Check that after performing first test function,the other change 
    Then Check that test function respond to correct data 
    Then Check that test function itself respond to correct data but don`t respond to first data
    Then Check that test function satisfy to correct number 
    Then Check that name of created product not be undefined
    Then Check that name of created product have correct property 
    Then Check that name of created product have correct deep property 
    Then Check that name of created product be ok 
    Then Check that name of created product have correct lenght of at most
    Then Check that name of created product have correct kenght of
    Then Check that name of created product to equal 
    Then Check that name of created product to not equal some data
    Then Check that name of created product to deep equal 
    Then Check that size of created product not be null
    Then Check that size of created product to exist 
    Then Check that size of created product have ordered members
    Then Check that size of created product include correct number
    Then Check that size of created product include second correct number
    Then Check that price of created product not be false 
    Then Check that price of created product to equal 
    Then Check that name of brand of created product to deep equal
    Then Check that classname of brand of created product to match 
    Then Check that category of created product be a string
    Then Check that category of created product be one of a list with containers of element of category


 Examples:
    | user_email  | password    | product_name |product_description                                   |number_of_product|product_price|name_brend|
    | Qa123       | Luhude69    | Пальто       |Пальто чоловіче,комір з V-подібними лацканами         |10               |2500         |Mango     |