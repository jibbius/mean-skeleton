var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
//
//var db_user = 'jibbius';
//var db_pass = 'kvA9VEZnh6';
//var db_name = 'jibbius';
//var db_conn = 'mongodb://'+db_user+':'+db_pass+'@ds035750.mongolab.com:35750/'+db_name; // 'mongodb://jibbius:kvA9VEZnh6@ds035750.mongolab.com:35750/jibbius'

module.exports = {
  development : {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3031
  },
  production : {
    db: 'mongodb://jibbius:kvA9VEZnh6@ds035750.mongolab.com:35750/jibbius',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};


