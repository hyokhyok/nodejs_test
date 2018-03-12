console.log("hello nodejs");
var steem = require("steem")
steem.api.setOptions({url: 'https://api.steemit.com'});
steem.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
