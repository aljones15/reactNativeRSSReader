//
//  rssTwoUITests.swift
//  rssTwoUITests
//
//  Created by Andrew Jones on 3/13/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import XCTest

class rssTwoUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
        
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
        XCUIApplication().launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
  
  func waitForExist(el: XCUIElement) {
    let exists = el.waitForExistence(timeout: 10);
    XCTAssertTrue(exists, "Expected Element to Exist");
  }
     
  func testClicksOnMenu() {
    let app = XCUIApplication();
    let containsMenu = NSPredicate(format: "label contains[c] %@", "Menu");
    let other = app.otherElements.containing(containsMenu).staticTexts["Menu"];
    waitForExist(el: other);
    other.tap();
  }
  
  func testClicksSubscription() {
    let app = XCUIApplication();
    testClicksOnMenu();
    let modal_menu = app.otherElements["modal_menu"];
    waitForExist(el: modal_menu);
    let sub_text = modal_menu.staticTexts["subscriptions_text"];
    waitForExist(el: sub_text);
    sub_text.tap();
    let sub_page = app.otherElements["subscriptions_page"];
    waitForExist(el: sub_page);
    let back = sub_page.buttons["subscriptions_back"];
    waitForExist(el: back);
    back.tap();
  }
}
