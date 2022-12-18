from selenium import webdriver
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from custom_wait_condition import presence_of_elements_located_by_number
from pages.base_page import BasePage
from pages.elements.base_element import ElementObject, ElementsObject, PostElementsObjects
from pages.elements.post_block import PostBlock
from pages.internal_page import InternalPage
from pages.oxwall_locators import DashboardLocators


class DashboardPage(InternalPage):
    posts = PostElementsObjects(DashboardLocators.POST_BLOCK)
    new_post_text_field = ElementObject(DashboardLocators.POST_INPUT)
    send_button = ElementObject(DashboardLocators.SAND_BTN)

#    @property
#    def posts(self):
#        elms = self.find_elements(DashboardLocators.POST_BLOCK)
#        post_blocks = [PostBlock(el) for el in elms]
#        return post_blocks

    def count_posts(self):
        return len(self.posts)

    def create_new_text_post(self, input_text):
        self.new_post_text_field.click()
        self.new_post_text_field.send_keys(input_text)
        self.send_button.click()

    def wait_new_post(self, old_number_of_post: int):
        """ Wait new post appears
        :param old_number_of_post: amount posts before create new one
        :return:
        """

        new_number = old_number_of_post + 1
        new_list_of_posts = self.wait.until(
            presence_of_elements_located_by_number(DashboardLocators.POST_BLOCK, new_number),
            message=f"Not find {new_number} post elements")
        post_blocks = [PostBlock(el) for el in new_list_of_posts]
        return post_blocks

    def title(self):
        return self.driver.title



