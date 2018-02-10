# iOS environment
import os
import time
import unittest
from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class iOSTests(unittest.TestCase):
    def setUp(self):
        appDir = 'ios/build/Build/Products/Release-iphonesimulator/rssTwo.app'
        appPath = os.path.join(os.getcwd(), appDir)
        print 'current working dir'
        print appPath
        desired_caps = {}
        desired_caps['platformName'] = 'iOS'
        desired_caps['platformVersion'] = '10.3'
        desired_caps['deviceName'] = 'iPhone Simulator'
        desired_caps['automationName'] = 'XCUITest'
        desired_caps['app'] = appPath
        self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)

    def screenCap(self):
        source = self.driver.page_source
        screenPath = 'appium/ios/pages'
        name = 'main.xml'
        screenFile = os.path.join(os.getcwd(), screenPath, name)
        f = open(screenFile, 'w')
        f.write(source.encode('utf-8'))
        f.close()

    def tearDown(self):
        #end the session
        self.driver.quit()

    def assertDisplayed(self, el):
        self.assertIsNotNone(el)
        self.assertTrue(el.is_displayed())
 
    def waitForVisible(self, locator):
        el = WebDriverWait(self.driver, 10).until(
            EC.visibility_of_element_located(locator)
        )
        return el

    def test_main_to_subscriptions(self):
        window = self.driver.find_element_by_class_name('XCUIElementTypeWindow')
        self.assertIsNotNone(window)
        self.assertTrue(window.is_displayed())
        scroll = self.waitForVisible((By.CLASS_NAME, 'XCUIElementTypeScrollView'))
        main_header = self.waitForVisible((By.NAME, 'main_header'))
        menu = main_header.find_element_by_id('Menu');
        self.assertTrue(EC.element_to_be_clickable(menu))
        action = TouchAction(self.driver)
        menu.click()
        modal_menu = self.waitForVisible((By.NAME, 'modal_menu'))
        self.assertDisplayed(modal_menu)
        modal_texts = modal_menu.find_elements_by_class_name('XCUIElementTypeStaticText')
        self.assertTrue(len(modal_texts) == 2)
        sub_text = modal_texts[1]
        sub_text.click()
        # todo add TestID to Subscriptions Page
        boing_boing_feed = self.waitForVisible((By.NAME, 'http://boingboing.net/feed'))

if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(iOSTests)
    unittest.TextTestRunner(verbosity=3).run(suite)
