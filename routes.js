const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const company  = require('./model/company/company-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to safe-chamber-16726 API!' });
});

router.use('/user', user);
router.use('/company', company);


module.exports = router;
