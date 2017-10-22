var blockchain = require('mastercard-blockchain');
var base64 = require('base-64');
var MasterCardAPI = blockchain.MasterCardAPI;

var consumerKey = "Q8fBANqsrW0jmYDIxBYvM51TV37Yyk5AsIekZa5Sd7425069!20a7bb099d384d31b85349783a7149310000000000000000";   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
var keyStorePath = "keystore.p12"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
var keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
var keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key

// You only need to do initialize MasterCardAPI once
//
var authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
MasterCardAPI.init({
	sandbox: true,
	debug: true,
	authentication: authentication
});


function createEntry(value, callback) {
  var requestData = {
    "app": "GD01",
    "encoding": "base64",
    "value": base64.encode(value)
  };
  blockchain.TransactionEntry.create(requestData
  , function (error, data) {
  	if (error) {
  		console.error("HttpStatus: "+error.getHttpStatus());
  		console.error("Message: "+error.getMessage());
  		console.error("ReasonCode: "+error.getReasonCode());
  		console.error("Source: "+error.getSource());
  		console.error(error);

  	}
  	else {
  		console.log(data.hash);     //Output-->1e6fc898c0f0853ca504a29951665811315145415fa5bdfa90253efe1e2977b1
  		console.log(data.slot);     //Output-->1503662624
  		console.log(data.status);     //Output-->pending
  	}
  });
}
