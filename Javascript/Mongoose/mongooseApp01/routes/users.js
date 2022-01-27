var express = require('express');
var User = require('../models/User')
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const user = await User.findOne();//{role: 'Admin'}
  // user.role = 'user';
  // await user.replaceOne(user);

  console.log(user.toObject());
  res.json(user.toObject())
});

module.exports = router;
