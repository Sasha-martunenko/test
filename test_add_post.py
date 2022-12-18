import time
import pytest
import json
#from confest import config
from confest_2 import main_page
from confest_2 import driver
from confest_2 import dash_page
from confest_2 import sign_in_user
from confest_2 import sign_in_page

# with open("data/post_text.json") as f:
#    data_list = json.load(f)


# aList = ["t", "a"]
# jsonList = json.loads(aList)
# print(jsonList)


data_list = [
    "test1223",
    "!#;%:'\"&?*?",
    "FHGFDHDGFHF",
    "Привіт!\nЯк справи?"
]


@pytest.mark.xfail
@pytest.mark.nondestruction
@pytest.mark.parametrize("input_text", data_list)
def test_add_post(driver, dash_page, sign_in_user, input_text):
    old_number_of_post = len(dash_page.posts)
    dash_page.create_new_text_post(input_text)
    dash_page.wait_new_post(old_number_of_post)
    new_list_of_posts = dash_page.wait_new_post(old_number_of_post)
    post = new_list_of_posts[0]
    assert post.text == input_text
    assert post.user == sign_in_user
    assert post.time_created == "within 1 minute"


def test_add_like(driver, dash_page, sign_in_page):
    time.sleep(2)
    posts = dash_page.posts
    # print(posts[0].text)
    posts[0].add_like()
    assert posts[0].likes_count() == 12
