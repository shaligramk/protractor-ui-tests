var LoginPage = function(){
	this.userName = element(by.id('username'));
	this.password = element(by.id('password'));
	this.loginButton = element(by.css('.ladda-button'));
};

module.exports = new LoginPage();