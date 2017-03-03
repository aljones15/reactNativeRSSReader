"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    Q = require('q'),
    chai = require('chai'),
    expect = chai.expect, 
    serverConfigs = require('./helpers/appium-servers');

describe("ios basic tests", function () {
  this.timeout(900000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = process.env.npm_package_config_sauce ?
      serverConfigs.sauce : serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = _.clone(require("./helpers/caps").ios93);
    desired.app = require("./helpers/apps").myApp;
    if (process.env.npm_package_config_sauce) {
      desired.name = 'ios - tests';
      desired.tags = ['ios'];
    }
    return driver.init(desired);
  });

  after(function () {
    return driver
      .quit()
      .finally(function () {
        if (process.env.npm_package_config_sauce) {
          return driver.sauceJobStatus(allPassed);
        }
      });
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

 /***
  * element types XCUIElementTypeWindow
  *XCUIElementTypeButton
  * XCUIElementTypeStaticText
  * XCUIElementTypeScrollView
  * XCUIElementTypeOther
  * XCUIElementTypeApplication
  */ 

  function TypeOther(by){
    return "//XCUIElementTypeOther" + by;
  }

  function byName(name){
    return "[name=*'" + name + "']"; 
  }
  

  const main_header = "//XCUIElementTypeOther[name*='main_header']";
  const paginate_view = TypeOther(byName("paginate_view"));

  /*
  it("should see the app", () => {
    return driver.
	    waitForElementByXPath("//XCUIElementTypeApplication", 10000).
	    then((el) => {
	      chai.expect(el).to.not.be.null;
	    })
  }) */

  it("should see a loading screen", function () {
	  return driver.
		  waitForElementByXPath("//XCUIElementTypeWindow", 50000).
	    then((el) => {
	      	chai.expect(el).to.not.be.null;
				
            });
  })

  it("should see a header", () => {
    console.log(main_header);
    driver.elementByXPath(main_header).then((el) => { 
      chai.expect(el).to.not.be.null;
    });
        
  })

  it("should see a paginate footer", () => {
    driver.elementByXPath(paginate_view)
      .then((el) => { 
        chai.expect(el).to.not.be.null;
        el.isDisplayed().then((isDisplayed) => chai.expect(isDisplayed).to.be.true )
      })
   })

  it("should see a scroll view", () => {
    driver.elementByXPath("//XCUIElementTypeScrollView")
      .then((el) => { 
        chai.expect(el).to.not.be.null;
        el.isDisplayed().then((isDisplayed) => chai.expect(isDisplayed).to.be.true)
      })
     })

});
