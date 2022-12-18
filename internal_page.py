from locators import IntegralPageLocators
from pages.base_page import BasePage
from pages.elements.base_element import ElementObject


class InternalPage(BasePage):
    sign_in_menu = ElementObject(IntegralPageLocators.SIGN_IN)
    sign_up_menu = ElementObject(IntegralPageLocators.SIGN_UP)
    main_menu = ElementObject(IntegralPageLocators.MAIN_MENU)
    member_menu = ElementObject(IntegralPageLocators.MEMBERS_MENU)
    dashboard_menu = ElementObject(IntegralPageLocators.DASHBOARD_MENU)
    user_menu = ElementObject(IntegralPageLocators.USER_MENU)
    user_icon = ElementObject(IntegralPageLocators.USER_ICON)
    massage_menu = ElementObject(IntegralPageLocators.MASSAGE)

    def open_sign_in_form(self):
        self.sign_in_menu.click()

    def sign_out(self):
        # TODO
        pass
