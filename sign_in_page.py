from selenium import webdriver
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from custom_wait_condition import presence_of_elements_located_by_number
from pages.base_page import BasePage
from pages.elements.base_element import ElementObject
from pages.oxwall_locators import SigInLocators
from value_objects.user import User


class SignInPage(BasePage):
    login_elem = ElementObject(SigInLocators.USERNAME_FIELD)
    pass_elem = ElementObject(SigInLocators.PASSWORD_FIELD)
    sign_in_button = ElementObject(SigInLocators.SIGN_IN_BTN)

    def input_username(self, username):
        # self.login_elem.input(username)
        self.login_elem.clear()
        self.login_elem.send_keys(username)

    def input_password(self, password):
        self.pass_elem.clear()
        self.pass_elem.send_keys(password)

    def press_sign_in(self):
        self.sign_in_button.click()

    def submit(self):
        # TODO press Enter
        pass

    def sign_in(self, user: User):
        self.input_username(user.username)
        self.input_password(user.password)
        self.press_sign_in()
