from confest_2 import driver
from confest_2 import sign_in_page
from confest_2 import dash_page
from confest_2 import main_page
from confest_2 import user
from locators import IntegralPageLocators
from value_objects.user import User


def test_sign_in(driver, sign_in_page, dash_page, main_page, user):
    # sing_in_page = SingInPage(driver)
    user = User(username="admin", password="pass")
    #assert main_page.is_element_present(IntegralPageLocators.SIGN_IN)
    main_page.sign_in_menu.click()
    assert sign_in_page.sign_in_button.get_attribute("value") == "Sign In"
    sign_in_page.input_username(user.username)
    sign_in_page.input_password(user.password)
    sign_in_page.press_sign_in()
    assert dash_page.title() == "Pieter - social networking"


def test_sign_in_submit(driver, sign_in_page, dash_page):
    # sing_in_page = SingInPage(driver)
    user = User(username="demo", password="demo")
    sign_in_page.input_username(user.username)
    sign_in_page.input_password(user.password)
    sign_in_page.submit()
    # dash_page = DashBoardPage(driver)
    assert dash_page.title() == "Sign in to Pieter - Find Friends Here!"


def test_sign_in_submit_password(driver, sign_in_page, dash_page):
    # sing_in_page = SingInPage(driver)
    user = User(username="demo", password="demo")
    sign_in_page.input_username(user.username)
    sign_in_page.submit()
    assert sign_in_page.driver.title == "Sign in to Pieter - Find Friends Here!"


def test_sign_in_wrong_password(driver, sign_in_page, dash_page):
    # sing_in_page = SingInPage(driver)
    user_with_wrong_pass = User(username="demo", password="demo")
    sign_in_page.input_username(user_with_wrong_pass.username)
    sign_in_page.input_password(user_with_wrong_pass.password)
    sign_in_page.submit()
    assert sign_in_page.driver.title == "Sign in to Pieter - Find Friends Here!"
