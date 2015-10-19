from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import Adafruit_BBIO.GPIO as GPIO

# input gruhub login info here
# example:
EMAIL = "meetup.eat@gmail.com"
PASSWORD = "galvanize11"

# set up global webdriver
driver=webdriver.Firefox()

def main():
	login()
	# print "successful login"
	getNBP()
	tearDown()

def login():
	driver.get("https://www.grubhub.com/")
	html = driver.page_source

	driver.find_element_by_css_selector("a.login-link").click()

	# enter info into sign in pop-up
	email_box = driver.find_element_by_id("login-email")
	password_box = driver.find_element_by_id("login-password")


	# enter email into email_box
	email_box.send_keys(EMAIL)
	email_box.send_keys(Keys.RETURN)

	# enter password into password_box
	password_box.send_keys(PASSWORD)
	password_box.send_keys(Keys.RETURN)

	# click submit to login
	driver.find_element_by_css_selector("input.primaryActionButton.submit").click()

# get North Beach Pizza
def getNBP():
	# make url
	ll = "37.764061,-122.445735" # NOTE: get ll from gps
	nbp_url = "https://www.grubhub.com/restaurant/19988/?where=37.764061,-122.445735&restaurantSearchTerm=north+beach+pizza&filters=openNow"
	driver.get(nbp_url)

	# click 'Large Pizza' option on menu
	driver.find_element_by_css_selector('#wrapper > div.ghwidget.ordering > div.grid_15.menu.ghwidget.ghmenu > ul > li:nth-child(5) > ul > li:nth-child(3) > span.name.grid_5.popularItem').click()

	# click modal's order button to add pizza to cart
	driver.find_element_by_css_selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner.all.ui-front.ghmenu.ui-dialog-buttons > div.menuitem.ghwidget.cachingdisplay.ui-dialog-content.ui-widget-content > div.current > div.modalDialog.ghwidget.menuitem > div[class="modalContent"] > a[class="primaryActionButton submit"]').click()

	# click order button on main page
	driver.find_element_by_css_selector('#wrapper > div.ordering.ghwidget > div.grid_9.whiteTextureCharm.ordercheck.ghwidget.glassceiling.glassceiling_tootallforcontainer.order-check-details-shown.glassceiling-pinned > div.finishOrderingButton > div.primaryActionButton.above-order-minimum.finishdelivery').click()

	def tearDown():
		driver.quit
