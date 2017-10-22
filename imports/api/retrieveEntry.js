var blockchain = require('mastercard-blockchain');
var MasterCardAPI = blockchain.MasterCardAPI;

var consumerKey = "Q8fBANqsrW0jmYDIxBYvM51TV37Yyk5AsIekZa5Sd7425069!20a7bb099d384d31b85349783a7149310000000000000000";   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
var keyStorePath = "./money2020-sandbox-1508639485.pem"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
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


var requestData = {};
blockchain.Block.list(requestData
, function (error, data) {
	if (error) {
		console.error("HttpStatus: "+error.getHttpStatus());
		console.error("Message: "+error.getMessage());
		console.error("ReasonCode: "+error.getReasonCode());
		console.error("Source: "+error.getSource());
		console.error(error);

	}
	else {
		console.log(data[0].authority);     //Output-->PegupZdN96Kqe1GWgqEqLMkzeA4PotbUv2wiKZZqqqKDH3sDA9cozcEakAsmJxYRv8zHCHuuFujTRxUgYxrNA6Fw
		console.log(data[0].hash);     //Output-->87d97de8c553381adc735439762396355fe54322d580b7da642035a2c5b917bc
		console.log(data[0].nonce);     //Output-->13465573658468563000
		console.log(data[0].previous_block);     //Output-->f106b05908504960a5a5d47422cbb47a3ad138f6bbbb40e0af00d7750d04f0fb
		console.log(data[0].signature);     //Output-->AN1rKryh8muZCbtqPu7gFmahvx9N6emWyqMNgTDXGcomHSWQK9Tt7J3CUY1yDCFU7bTH7jD3qCyyta4GX8RBYtVVNif8X8kx4
		console.log(data[0].slot);     //Output-->1503572680
		console.log(data[0].version);     //Output-->1
	}
});
