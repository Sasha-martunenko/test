from pytest_bdd import given, when, then, scenario
from confest_2 import dash_page
from confest_2 import sign_in_page
from confest_2 import config
from value_objects.user import User


@scenario("post.feature", "Create test post (without photos)")
def test_add_post():
    pass


@given("Initial amount of post in Oxwall database")
def initial_posts(dash_page):
    return len(dash_page.posts)


@given("I as a logged user")
def logged_user(main_page, config, sign_in_page):
    user = User(config["web"]["admin_user"])
    main_page.open_sign_in_form()
    sign_in_page.sign_in(user)
    return user


@when("I add a new post with <text> in Dashboard page")
def create_post(dash_page, text):
    dash_page.create_new_text_post(text)


@then("A new post block appears before old table of posts")
def wait_new_post(dash_page, initial_posts):
    dash_page.wait_new_post(initial_posts)


@then("This post block has this <text> and auther as this user and time \"within 1 minute\"")
def verify_new_post(dash_page, text, logged_user):
    new_list_of_posts = dash_page.wait_new_post()
    post = new_list_of_posts[0]
    assert post.text == text
    assert post.user == logged_user
    assert post.time_created == "within 1 minute"
