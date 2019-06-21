const express = require('express');
const router = express.Router();

// @route GET api/testtest
// @desc Test route
// @access Public

router.get('/', (req, res) => res.send('Test Route')); // '/' is root directory

module.exports = router;