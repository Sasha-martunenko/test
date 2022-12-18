Feature:  Assertions
        Assertions
        Scenario: All assertions
        Given I as a logged user,and input all necessary data '<user_email>','<password>'
        When Start assertions
        Examples:
    | user_email  | password    |
    | Qa123       | Luhude69    |