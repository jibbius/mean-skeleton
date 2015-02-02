var mongoose = require('mongoose');

module.exports = function(config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('db connection opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String
  });
  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function (err, collection){
    if(collection.length === 0){
      User.create({firstName: 'Jack', lastName: 'Barker', userName: 'jackb'});
      User.create({firstName: 'Tom',  lastName: 'Jones', userName: 'tom'});
      User.create({firstName: 'Jane', lastName: 'Doe', userName: 'dan'});
    }
  })


}
