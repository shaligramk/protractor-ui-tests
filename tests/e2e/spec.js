/*
Objective: To write an end to end test for the standalone Chaucer platform
Author: Shawn Shaligram
Last Updated Date: February 16, 2015
*/
var util = require('util');
var production = "";
var loginPage = require('./pages/login_page.js');
var projectTracker = require('./pages/project_tracker.js');
// var contentComposer = require('./pages/content_composer.js');

describe('Sparky end to end', function() {
    beforeEach(function() {
    });

    it('should navigate to the login screen', function() {
        browser.get(production);
        expect(browser.getTitle()).toEqual('Chaucer - Log In');
    });

    it('should allow a user to log in', function() {
        expect(element(by.css('.login-form')).isPresent()).toBeTruthy();
        loginPage.userName.sendKeys("");
        loginPage.password.sendKeys("");
        loginPage.loginButton.click();
        browser.sleep(5000);
    });

    it('search for a project title in the Project Tracker', function() {
        expect(element(by.css('.project-tracker-container')).isPresent()).toBeTruthy();
        projectTracker.search.sendKeys("Picture Perfect");
        expect(browser.getTitle()).toEqual('Chaucer - New Project');
    });
});
