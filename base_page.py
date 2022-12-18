from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait


class BasePage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(self.driver, 3, poll_frequency=0.1)
        self.action_chain = webdriver.ActionChains(self.driver)

#    def is_element_present(self, locator):
#        try:
#            self.driver.find_elemet(*locator)
#        except NoSuchElementException:
#           return False
#        return True

#    def find_element(self, locator):
  #      el = self.wait.until(ec.presence_of_element_located(locator),
 #                            message=f"No element with locator='{locator}'")
 #       return el

 #   def find_elements(self, locator):
#        el = self.wait.until(ec.presence_of_all_elements_located(locator),
#                             message=f"No element with locator='{locator}'")
 #       return el
#
#    def find_visible_elements(self, locator):
#       els = self.wait.until(ec.visibility_of_all_elements_located(locator),
#                              message=f"No visible elements with locator='{locator}'")
#        return els
#
#    def find_visible_element(self, locator):
#        el = self.wait.until(ec.visibility_of_element_located(locator),
#                            message=f"No visible element with locator='{locator}'")
#        return el

#    def find_clickable_element(self, locator):
#        el = self.wait.until(ec.element_to_be_clickable(locator),
#                             message=f"No clickable element with locator='{locator}'")
#        return el
