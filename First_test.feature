Feature: Feature crm
    User as an administrator can add other users and clients
    Scenario: Sign in and invite users to carts and check that this users been invited
    Given I as a logged user,and input all necessary data '<user_email>','<password>'
    When As a user I am trying to send an invitation to a first user by name '<users_name>' I want to invite to my workspace
    When As a user I am trying to send an invitation to a second user by name '<second_user_name>' I want to invite to my workspace
    When As a user I am trying to create two cards for my board and add one user to each '<name_cart>','<name_second_cart>'
    Then As a user, I check that the users I added to the cards have been added
 Examples:
    | user_email                | password    | users_name |second_user_name|name_cart|name_second_cart|
    | martinenko3841@gmail.com  | Luhude69    | Test       |TEST TEST       |workspace|workspace_2     |